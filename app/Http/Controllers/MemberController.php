<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Passport;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Events\MemberRegistered;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->input('search');
        $membersQuery = Member::with(['passports']);
        if ($query) {
            $membersQuery->where('fullname', 'like', '%' . $query . '%')
                ->orWhere('email', 'like', '%' . $query . '%')
                ->orWhere('phone', 'like', '%' . $query . '%')
                ->orWhere('passportNumber', 'like', '%' . $query . '%');
        }

        $members = $membersQuery->latest()->paginate(15);
        return Inertia::render('Members/Index', [
            'status' => session('status'),
            'members' => $members,
            'searchQuery' => $query
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'fullname' => ['required', 'string'],
            'phone' => [
                'required',
                'regex:/^(\+\d{1,3}\s?)?(\d{10})$/',
                'unique:' . Member::class
            ],
            'email' => ['required', 'email', 'unique:' . Member::class],
            'dob' => ['required', 'date', 'before_or_equal:' . now()->format('Y-m-d')],
            'address' => ['required', 'string'],
            'stateOfOrigin' => ['required', 'string'],
            'nextOfKin' => ['required', 'string'],
            'maritalStatus' => ['required', 'string'],
            'nextOfKinPhone' => ['required', 'string'],
            'occupation' => ['required', 'string'],
            'passportNumber' => ['required', 'string',],
            'passportImage' => 'required|image|mimes:jpeg,png,jpg|max:5048',
            'lga' => 'required|string',
            'gender' => 'required|string',
            'level_of_education' => 'required|string'
        ]);

        if ($request->hasFile('passportImage')) {
            $extension = $request->file('passportImage')->getClientOriginalExtension();
            $fileNameWithExt = $request->file('passportImage')->getClientOriginalName();
            $fileName = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('passportImage')->getClientOriginalExtension();
            $fileNameToStore = $request->fullname . '_' . $request->passportNumber . '_' . time() . '.' . $extension;
            $path = $request->file('passportImage')->storeAs('public/passports', $fileNameToStore);
        }

        $occupation = $request->input('occupation');
        $memberData = [
            'fullname' => $request->input('fullname'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'dob' => $request->input('dob'),
            'address' => $request->input('address'),
            'stateOfOrigin' => $request->input('stateOfOrigin'),
            'maritalStatus' => $request->input('maritalStatus'),
            'nextOfKin' => $request->input('nextOfKin'),
            'nextOfKinPhone' => $request->input('nextOfKinPhone'),
            'occupation' => $occupation,
            'LGA' => $request->input('lga'),
            'level_of_education' => $request->input('level_of_education'),
            'gender' => $request->input('gender'),
        ];

        if (strtolower($occupation) === 'student') {
            $memberData['institution'] = $request->input('employerOrInstitution');
        } else {
            $memberData['employer'] = $request->input('employerOrInstitution');
        }

        $member = Member::create($memberData);
        // $member->notify(new MemberRegistered());
        MemberRegistered::dispatch($member);

        Passport::Create([
            'member_id' => $member->id,
            'number' => $request->input('passportNumber'),
            'image' => $fileNameToStore,
            'date_of_issue' => $request->input('dateOfIssue'),
            'expiry_date' => $request->input('expiryDate'),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Member $member)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Member $member)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Member $member)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $member = Member::find($id);
        $passports = Passport::where('user_id', $id)->delete();
        $member->delete();
        return redirect()->back();
    }
}
