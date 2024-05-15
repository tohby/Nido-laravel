<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Directory;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    
    public function index() {
        $membersCount = Member::count();
        $directoriesCount = Directory::count();
        $latestMembers = Member::with(['passports'])->latest()->take(5)->get();
        return Inertia::render('Dashboard', [
            'status' => session('status'),
            'membersCount' => $membersCount,
            'directoriesCount' => $directoriesCount,
            'latestMembers' => $latestMembers
            // 'searchQuery' => $searchQuery
        ]);
    }
}
