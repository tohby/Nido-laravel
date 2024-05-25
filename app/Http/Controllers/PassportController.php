<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;
use App\Models\Passport;
use Illuminate\Support\Facades\Storage;

class PassportController extends Controller
{
    public function store(Request $request, $id)
    {
        $request->validate([
            'dateOfIssue' => 'required',
            'expiryDate' => 'required',
            'passportNumber' => ['required', 'string'],
            'passportImage' => 'required|image|mimes:jpeg,png,jpg|max:5048',
        ]);

        $member = Member::find($id);

        if ($request->hasFile('passportImage')) {
            $extension = $request->file('passportImage')->getClientOriginalExtension();
            $fileNameWithExt = $request->file('passportImage')->getClientOriginalName();
            $fileName = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('passportImage')->getClientOriginalExtension();
            $fileNameToStore = $member->fullname . '_' . $request->passportNumber . '.' . $extension;
            $path = $request->file('passportImage')->storeAs('public/passports', $fileNameToStore);
        }

        Passport::Create([
            'member_id' => $id,
            'number' => $request->input('passportNumber'),
            'image' => $fileNameToStore,
            'date_of_issue' => $request->input('dateOfIssue'),
            'expiry_date' => $request->input('expiryDate'),
        ]);

        return back();

    }
    public function destroy($id)
    {
        $passport = Passport::find($id);
        Storage::delete('storage/passports' . $passport->image);
        $passport->delete();

    }
}
