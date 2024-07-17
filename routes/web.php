<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DirectoryController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PassportController;
use App\Http\Controllers\PassportRegistrationController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;

Route::inertia('/about', 'About')->name('about');
Route::inertia('/', 'Default')->name('welcome');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/become-a-member', 'Membership')->name('member.join');
Route::inertia('/passport-renewal', 'Renewal')->name('passports.renew');

Route::get('/directory', [DirectoryController::class, 'directories'])->name('directory');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');


Route::post('/become-a-member', [MemberController::class, 'store'])->name('Membership.store');
Route::post('/passport-renewal', [PassportRegistrationController::class, 'store'])->name('passports.store');

Route::middleware('auth')->group(function () {
    Route::get('/members', [MemberController::class, 'index'])->name('members');
    Route::delete('/members/{id}', [MemberController::class, 'destroy'])->name('member.destroy');
    Route::patch('members/{id}', [MemberController::class, 'update'])->name('members.update');
    Route::post('passport/{id}', [PassportController::class, 'store'])->name('passport.store');
    Route::delete('/passport/{id}', [PassportController::class, 'destroy'])->name('passport.destroy');
    Route::patch('settings/{setting}', [SettingsController::class, 'update'])->name('settings.update');
    Route::get('members/export', [MemberController::class, 'export'])->name('members.export');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/directories', [DirectoryController::class, 'index'])->name('directories');
    Route::post('/directories', [DirectoryController::class, 'store'])->name('directory.store');
    Route::post('/directories/{id}', [DirectoryController::class, 'update'])->name('directory.update');
    Route::delete('/directories/{id}', [DirectoryController::class, 'destroy'])->name('directory.destroy');
    Route::get('passports', [PassportRegistrationController::class, 'index'])->name('passports.index');
});

require __DIR__ . '/auth.php';
