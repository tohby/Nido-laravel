<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PassportRegistrationOpen extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Passport Renewal Exercise Now Open!')
            ->greeting('Dear member,')
            ->line('We are pleased to announce that the passport renewal exercise is now officially open. All members are encouraged to take advantage of this opportunity to renew their passports in a timely manner.')
            ->line('To initiate your passport renewal process, please visit our website and complete the registration form using the link below.')
            ->action('Register', url('/passport-renewal'))
            ->line('For any inquiries or further assistance, please do not hesitate to reach out to the contacts below ')
            ->line('**Email:** contact-us@nigeriaembassy.org.vn')
            ->line('**Phone:** Nido representative +84326189705 or the Nigerian embassy +84775568278')
            ->line('We look forward to your prompt response and cooperation.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
