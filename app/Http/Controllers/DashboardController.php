<?php

namespace App\Http\Controllers;

use App\Models\Directory;
use App\Models\Member;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $membersCount = Member::count();
        $directoriesCount = Directory::count();
        $latestMembers = Member::with(['passports'])->latest()->take(5)->get();
        $members = DB::table('members')->select('dob')->get();

        $ageGroups = [
            '0-17' => 0,
            '18-24' => 0,
            '25-34' => 0,
            '35-54' => 0,
            '55+' => 0,
        ];

        foreach ($members as $member) {
            $age = Carbon::parse($member->dob)->age;

            if ($age <= 17) {
                $ageGroups['0-17']++;
            } elseif ($age <= 24) {
                $ageGroups['18-24']++;
            } elseif ($age <= 34) {
                $ageGroups['25-34']++;
            } elseif ($age <= 54) {
                $ageGroups['35-54']++;
            } else {
                $ageGroups['55+']++;
            }
        }

        foreach ($ageGroups as $key => $value) {
            $ageGroups[$key] = round(($value / $membersCount) * 100, 2);
        }

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
            'statistics' => $statistics,
            'ageGroups' => $ageGroups
            // 'searchQuery' => $searchQuery
        ]);
    }
}
