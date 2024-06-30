<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Propaganistas\LaravelPhone\PhoneNumber;
use App\Models\Member;

class FormatPhoneNumbers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'format:phone';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Format all phone numbers in the database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $members = Member::get();

        foreach ($members as $member) {
            if (phone($member->phone, 'VN')->isOfCountry('VN')) {
                $member->phone = phone($member->phone, 'VN')->formatE164();
                $member->save();
            } elseif (phone($member->phone, 'NG')->isOfCountry('NG')) {
                $member->phone = phone($member->phone, 'NG')->formatE164();
                $member->save();
            }
        }
    }
}
