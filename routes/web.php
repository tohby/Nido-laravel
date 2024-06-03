<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DirectoryController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PassportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Default', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/directory', function () {
    return Inertia::render('Directories');
})->name('directory');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/become-a-member', function () {
    return Inertia::render('Membership');
})->name('member.join');
Route::post('/become-a-member', [MemberController::class, 'store'])->name('Membership.store');

Route::middleware('auth')->group(function () {
    Route::get('/members', [MemberController::class, 'index'])->name('members');
    Route::delete('/members/{id}', [MemberController::class, 'destroy'])->name('member.destroy');
    Route::patch('members/{id}', [MemberController::class, 'update'])->name('members.update');
    Route::post('passport/{id}', [PassportController::class, 'store'])->name('passport.store');
    Route::delete('/passport/{id}', [PassportController::class, 'destroy'])->name('passport.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/directories', [DirectoryController::class, 'index'])->name('directories');
    Route::post('/directories', [DirectoryController::class, 'store'])->name('directory.store');
    Route::post('/directories/{id}', [DirectoryController::class, 'update'])->name('directory.update');
    Route::delete('/directories/{id}', [DirectoryController::class, 'destroy'])->name('directory.destroy');
});

require __DIR__ . '/auth.php';
