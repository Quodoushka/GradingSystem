<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ControllerDashboard;
use Spatie\Permission\Models\Role;

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

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/greeting', function () {
        return 'Hello World';
    });
});

Route::get('/test-role', function () {
    return "ROLE OK";
})->middleware('role:admin');

Route::get('/test', function () {
    return "ROLE OK";
})->middleware('role:teacher');

require __DIR__.'/settings.php';
