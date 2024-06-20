<?php

namespace App\Listeners;

use App\Events\PassportRegistrationProcessed;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Notifications\PassportRegistrationOpen;
use Illuminate\Support\Facades\Notification;
use App\Models\Member;

class SendPassportRegistrationNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PassportRegistrationProcessed $event): void
    {
        $users = Member::all();
        Notification::send($users, new PassportRegistrationOpen());
    }
}
