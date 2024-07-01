<?php

namespace App\Http\Controllers;

use App\Models\Directory;
use App\Models\Member;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $membersCount = Member::count();
        $directoriesCount = Directory::count();
        $latestMembers = Member::with(['passports'])->latest()->take(5)->get();

        // Get statistics
        $occupations = Member::select('occupation', DB::raw('count(*) as count'))->groupBy('occupation')->orderBy('count', 'desc')
            ->get();

        // Take the top 4 occupations
        $topOccupations = $occupations->take(4);

        // Get the labels and data for the top occupations
        $topOccupationsLabels = $topOccupations->pluck('occupation')->toArray();
        $topOccupationsData = $topOccupations->pluck('count')->toArray();

        // Sum the counts for other occupations
        $otherCount = $occupations->slice(4)->sum('count');

        // Add "Other" to labels and data if there are remaining occupations
        if ($otherCount > 0) {
            $topOccupationsLabels[] = 'Other';
            $topOccupationsData[] = $otherCount;
        }

        // Prepare the data for the chart
        $statistics = [
            'labels' => $topOccupationsLabels,
            'data' => $topOccupationsData,
        ];

        return Inertia::render('Dashboard', [
            'status' => session('status'),
            'membersCount' => $membersCount,
            'directoriesCount' => $directoriesCount,
            'latestMembers' => $latestMembers,
            'statistics' => $statistics
            // 'searchQuery' => $searchQuery
        ]);
    }
}
