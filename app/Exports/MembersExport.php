<?php

namespace App\Exports;

use App\Models\Member;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class MembersExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    protected $members;

    public function __construct($members)
    {
        $this->members = $members;
    }

    public function collection()
    {
        return $this->members->map(function ($member) {
            return [
                $member->fullname,
                $member->email,
                $member->phone,
                $member->occupation,
                $member->maritalStatus,
                $member->level_of_education,
                $member->passports->isEmpty() ? '' : $member->passports->first()->number,
            ];
        });
    }

    public function headings(): array
    {
        return [
            'Fullname',
            'Email',
            'Phone',
            'Occupation',
            'Marital Status',
            'Level of Education',
            'Latest Passport Number',
        ];
    }
}
