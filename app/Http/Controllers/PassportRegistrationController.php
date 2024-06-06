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
    public function index()
    {
        return Inertia::render('PassportRegistration/Index', [
            'status' => session('status'),

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
        //
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
    public function update(Request $request, PassportRegistration $passportRegistration)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PassportRegistration $passportRegistration)
    {
        //
    }
}
