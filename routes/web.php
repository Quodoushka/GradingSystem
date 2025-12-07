<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ControllerDashboard;

#Route::get('/dash', [ControllerDashboard::class]);

Route::get('/dash', [ControllerDashboard::class, 'index'])->name('dashboard.index');

Route::get('/dash/{user}/edit', [ControllerDashboard::class, 'edit'])->name('dashboard.edit');

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
