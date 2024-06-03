<?php

namespace App\Http\Controllers;

use App\Models\Directory;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DirectoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $directories = Directory::orderBy('name')->get();
        return Inertia::render('Directories/Index', [
            'directories' => $directories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'desc' => 'required|string',
            'location' => 'required|string',
            'url' => 'url:http,https|string|nullable',
            'instagram' => 'url:http,https|string|nullable',
            'facebook' => 'url:http,https|string|nullable',
            'img' => 'required|image|mimes:jpeg,png,jpg,svg|max:5048',
        ]);

        if ($request->hasFile('img')) {
            $extension = $request->file('img')->getClientOriginalExtension();
            $extension = $request->file('img')->getClientOriginalExtension();
            $fileNameToStore = $request->name . '_' . time() . '.' . $extension;
            $path = $request->file('img')->storeAs('public/directories', $fileNameToStore);
        }

        Directory::Create([
            'name' => $request->name,
            'desc' => $request->desc,
            'location' => $request->location,
            'url' => $request->url,
            'instagram' => $request->instagram,
            'facebook' => $request->facebook,
            'img' => $fileNameToStore
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Directory $directory, $id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Directory $directory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Directory $directory, $id)
    {
        $request->validate([
            'name' => 'required|string',
            'desc' => 'required|string',
            'location' => 'required|string',
            'url' => 'url:http,https|string|nullable',
            'instagram' => 'url:http,https|string|nullable',
            'facebook' => 'url:http,https|string|nullable',
        ]);
        if (!is_string($request->img)) {
            $request->validate([
                'img' => 'required|image|mimes:jpeg,png,jpg,svg|max:5048',
            ]);
        }

        if ($request->hasFile('img')) {
            $extension = $request->file('img')->getClientOriginalExtension();
            $extension = $request->file('img')->getClientOriginalExtension();
            $fileNameToStore = $request->name . '_' . time() . '.' . $extension;
            $path = $request->file('img')->storeAs('public/directories', $fileNameToStore);
        }

        $directory = Directory::find($id);
        $directory->name = $request->name;
        $directory->desc = $request->desc;
        $directory->location = $request->location;
        $directory->url = $request->url;
        $directory->instagram = $request->instagram;
        $directory->facebook = $request->facebook;
        if ($request->hasFile('img')) {
            $directory->img = $fileNameToStore;
        }
        $directory->save();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $directory = Directory::find($id);
        $directory->delete();
    }
}
