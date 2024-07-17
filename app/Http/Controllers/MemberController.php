<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Passport;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Events\MemberRegistered;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Validation\Rule;
use Propaganistas\LaravelPhone\PhoneNumber;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\MembersExport;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchQuery = $request->input('search');
        $membersQuery = Member::with(['passports']);
        $occupationQuery = $request->input('occupationQuery', 'All');
        $maritalQuery = $request->input('maritalQuery', 'All');
        $levelOfEducationQuery = $request->input('levelOfEducationQuery', 'All');

        $occupations = Member::distinct()->pluck('occupation');
        $maritalStatuses = Member::distinct()->pluck('maritalStatus')->prepend('All');
        $levelsOfEducation = Member::distinct()->pluck('level_of_education')->prepend('All');
        $occupations->prepend('All');

        if ($searchQuery) {
            $membersQuery->where(function ($query) use ($searchQuery) {
                $query->where('fullname', 'like', '%' . $searchQuery . '%')
                    ->orWhere('email', 'like', '%' . $searchQuery . '%')
                    ->orWhere('phone', 'like', '%' . $searchQuery . '%')
                    ->orWhereHas('passports', function (Builder $query) use ($searchQuery) {
                        $query->where('number', 'like', '%' . $searchQuery . '%');
                    });
            });
        }

        if ($occupationQuery !== 'All') {
            $membersQuery->where('occupation', $occupationQuery);
        }

        if ($maritalQuery !== 'All') {
            $membersQuery->where('maritalStatus', $maritalQuery);
        }

        if ($levelOfEducationQuery !== 'All') {
            $membersQuery->where('level_of_education', $levelOfEducationQuery);
        }



        $members = $membersQuery->latest()->paginate(15);
        return Inertia::render('Members/Index', [
            'status' => session('status'),
            'members' => $members,
            'searchQuery' => $searchQuery,
            'occupations' => $occupations,
            'occupationQuery' => $occupationQuery,
            'maritalStatuses' => $maritalStatuses,
            'levelsOfEducation' => $levelsOfEducation,
            'maritalQuery' => $maritalQuery,
            'levelOfEducationQuery' => $levelOfEducationQuery
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
        if ($request->phone) {
            $request->merge([
                '_phone' => phone($request->phone, 'VN')->formatE164()
            ]);
        }

        $request->validate([
            'fullname' => ['required', 'string'],
            '_phone' => [
                'required',
                'regex:/^(?:\+84|84|0)\d{9}$/',
                'unique:' . Member::class . ',phone'
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
            'level_of_education' => 'required|string',
            'dateOfIssue' => 'required',
            'expiryDate' => 'required',
            'program' => 'required_if:occupation,===,Student' | 'required_if:occupation,student',
            'employerOrInstitution' => ['required', 'string']
        ], [
            'employerOrInstitution.required' => 'This field is required',
            '_phone.required' => 'Please provide a valid phone number here in Vietnam',
            '_phone.unique' => 'A member with this phone number is already registered.',
            '_phone.regex' => 'The format for this number is invalid'
        ]);

        if ($request->hasFile('passportImage')) {
            $extension = $request->file('passportImage')->getClientOriginalExtension();
            $fileNameWithExt = $request->file('passportImage')->getClientOriginalName();
            $fileName = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('passportImage')->getClientOriginalExtension();
            $fileNameToStore = $request->fullname . '_' . $request->passportNumber . '.' . $extension;
            $path = $request->file('passportImage')->storeAs('public/passports', $fileNameToStore);
        }

        $occupation = $request->input('occupation');
        $memberData = [
            'fullname' => $request->input('fullname'),
            'phone' => phone($request->phone, 'VN')->formatE164(),
            'email' => $request->input('email'),
            'dob' => $request->input('dob'),
            'address' => $request->input('address'),
            'stateOfOrigin' => $request->input('stateOfOrigin'),
            'maritalStatus' => $request->input('maritalStatus'),
            'nextOfKin' => $request->input('nextOfKin'),
            'nextOfKinPhone' => $request->input('nextOfKinPhone'),
            'occupation' => $occupation,
            'LGA' => $request->input('lga'),
            'course' => $request->input('course'),
            'level_of_education' => $request->input('level_of_education'),
            'gender' => $request->input('gender'),
        ];

        if (strtolower($occupation) === 'student') {
            $memberData['institution'] = $request->input('employerOrInstitution');
        } else {
            $memberData['employer'] = $request->input('employerOrInstitution');
        }

        $member = Member::create($memberData);

        Passport::Create([
            'member_id' => $member->id,
            'number' => $request->input('passportNumber'),
            'image' => $fileNameToStore,
            'date_of_issue' => $request->input('dateOfIssue'),
            'expiry_date' => $request->input('expiryDate'),
        ]);

        MemberRegistered::dispatch($member);
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
        if ($request->phone) {
            $request->merge([
                '_phone' => phone($request->phone, 'VN')->formatE164()
            ]);
        }
        $member = Member::find($request->id);
        $request->validate([
            'fullname' => ['required', 'string'],
            '_phone' => [
                'required',
                'regex:/^(?:\+84|84|0)\d{9}$/',
                'unique:' . Member::class . ',phone'
            ],
            'email' => ['required', 'email', Rule::unique('members')->ignore($member)],
            'dob' => ['required', 'date', 'before_or_equal:' . now()->format('Y-m-d')],
            'address' => ['required', 'string'],
            'stateOfOrigin' => ['required', 'string'],
            'nextOfKin' => ['required', 'string'],
            'maritalStatus' => ['required', 'string'],
            'nextOfKinPhone' => ['required', 'string'],
            'occupation' => ['required', 'string'],
            'LGA' => 'required|string',
            'gender' => 'required|string',
            'level_of_education' => 'required|string',
            'course' => 'required_if:occupation,==,student',
            'employerOrInstitution' => ['required', 'string']
        ], [
            'employerOrInstitution.required' => 'This field is required',
            '_phone.required' => 'Please provide a valid phone number',
            '_phone.unique' => 'A member with this phone number is already registered.',
            '_phone.regex' => 'The format for this number is invalid'
        ]);

        $occupation = $request->input('occupation');
        $memberData = [
            'fullname' => $request->input('fullname'),
            'phone' => phone($request->phone, 'VN')->formatE164(),
            'email' => $request->input('email'),
            'dob' => $request->input('dob'),
            'address' => $request->input('address'),
            'stateOfOrigin' => $request->input('stateOfOrigin'),
            'maritalStatus' => $request->input('maritalStatus'),
            'nextOfKin' => $request->input('nextOfKin'),
            'nextOfKinPhone' => $request->input('nextOfKinPhone'),
            'occupation' => $occupation,
            'LGA' => $request->input('LGA'),
            'course' => $request->input('course'),
            'level_of_education' => $request->input('level_of_education'),
            'gender' => $request->input('gender'),
        ];

        if (strtolower($occupation) === 'student') {
            $memberData['institution'] = $request->input('employerOrInstitution');
        } else {
            $memberData['employer'] = $request->input('employerOrInstitution');
        }

        $member->update($memberData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $member = Member::find($id);
        $passports = Passport::where('member_id', $id)->delete();
        $member->delete();
        return redirect()->back();
    }

    /**
     * Export the specified resource
     */
    public function export(Request $request)
    {
        $searchQuery = $request->input('search');
        $occupationQuery = $request->input('occupationQuery', 'All');
        $maritalQuery = $request->input('maritalQuery', 'All');
        $levelOfEducationQuery = $request->input('levelOfEducationQuery', 'All');

        $membersQuery = Member::with([
            'passports' => function ($query) {
                $query->latest()->limit(1);  // Only get the latest passport
            }
        ]);

        if ($searchQuery) {
            $membersQuery->where(function ($query) use ($searchQuery) {
                $query->where('fullname', 'like', '%' . $searchQuery . '%')
                    ->orWhere('email', 'like', '%' . $searchQuery . '%')
                    ->orWhere('phone', 'like', '%' . $searchQuery . '%')
                    ->orWhereHas('passports', function (Builder $query) use ($searchQuery) {
                        $query->where('number', 'like', '%' . $searchQuery . '%');
                    });
            });
        }

        if ($occupationQuery !== 'All') {
            $membersQuery->where('occupation', $occupationQuery);
        }

        if ($maritalQuery !== 'All') {
            $membersQuery->where('maritalStatus', $maritalQuery);
        }

        if ($levelOfEducationQuery !== 'All') {
            $membersQuery->where('level_of_education', $levelOfEducationQuery);
        }

        $members = $membersQuery->latest()->get();

        return Excel::download(new MembersExport($members), 'members.xlsx');


    }
}
