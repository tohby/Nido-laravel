<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Tobi Adeyinka',
        //     'email' => 'tadeyinka173@gmail.com',
        // ]);

        // User::factory()->create([
        //     'name' => 'Micheal Omar',
        //     'email' => 'mikeom21@yahoo.com',
        // ]);

        User::factory()->create([
            'name' => 'Embassy Staff',
            'email' => 'embassy@nidovietnam.com',
            'role' => 1
        ]);
    }
}
