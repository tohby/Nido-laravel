<?php

namespace App\Http\Controllers;

use App\Models\PassportRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PassportRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchQuery = $request->input('search');
        $batchQuery = $request->input('batch');
        $currentYear = now()->year;

        $query = PassportRegistration::orderBy('created_at', 'desc');
        $batches = PassportRegistration::distinct()->pluck('batch');

        if ($batchQuery) {
            $query->where('batch', $batchQuery);
        } else {
            $query->where('batch', $currentYear);
        }

        if ($searchQuery) {
            $query->where('fullname', 'like', '%' . $searchQuery . '%')
                ->orWhere('email', 'like', '%' . $searchQuery . '%')
                ->orWhere('passportNo', 'like', '%' . $searchQuery . '%')
                ->orWhere('phone', 'like', '%' . $searchQuery . '%');

        }
        $currentBatch = $batchQuery ?? $currentYear;
        $registrations = $query->latest()->paginate(15);
        return Inertia::render('PassportRegistration/Index', [
            'registrations' => $registrations,
            'searchQuery' => $searchQuery,
            'batches' => $batches,
            'currentBatch' => $currentBatch
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
            'fullname' => 'required',
            'email' => 'required',
            'passportNo' => ['required'],
            'phone' => 'required'
        ]);

        PassportRegistration::Create([
            'fullname' => $request->input('fullname'),
            'email' => $request->input('email'),
            'passportNo' => $request->input('passportNo'),
            'phone' => $request->input('phone'),
            'batch' => date("Y")
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(PassportRegistration $passportRegistration)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PassportRegistration $passportRegistration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // $registration = PassportRegistration::find($id)
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PassportRegistration $passportRegistration)
    {
        //
    }
}
