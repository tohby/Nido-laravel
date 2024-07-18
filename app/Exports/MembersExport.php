<?php

namespace App\Exports;

use App\Models\Member;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;



class MembersExport implements FromCollection, WithHeadings, ShouldAutoSize, WithStyles
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
                $member->passports->isEmpty() ? '' : $member->passports->first()->number,
                $member->email,
                $member->dob,
                $member->gender === 'M' ? 'Male' : 'Female',
                $member->phone,
                $member->occupation,
                is_null($member->employer) ? '-' : $member->employer,
                is_null($member->institution) ? '-' : $member->institution,
                is_null($member->course) ? '-' : $member->course,
                $member->maritalStatus,
                $member->level_of_education,
                $member->address,
                $member->stateOfOrigin,
                $member->LGA,
                $member->nextOfKin,
                $member->nextOfKinPhone,
            ];
        });
    }

    public function headings(): array
    {
        return [
            'Fullname',
            'Passport Number',
            'Email',
            'Date of birth',
            'gender',
            'Phone',
            'Occupation',
            'Employer',
            'Institution',
            'Course',
            'Marital Status',
            'Level of Education',
            'Address',
            'State of origin',
            'LGA',
            'Next of kin',
            'Next of kin phone',
        ];
    }
    public function styles(Worksheet $sheet)
    {
        $sheet->getStyle('A1:Q1')->applyFromArray([
            'font' => [
                'bold' => true,
                'size' => 16,
            ],
        ]);

        // Apply a larger font size to the entire sheet
        $sheet->getStyle('A2:Q' . $sheet->getHighestRow())->applyFromArray([
            'font' => [
                'size' => 14, // Change this to your desired font size
            ],
        ]);

        return [
            // Additional styles can be added here if necessary
        ];
    }
}
