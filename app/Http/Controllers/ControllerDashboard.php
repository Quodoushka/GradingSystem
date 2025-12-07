<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ControllerDashboard extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Dashboard', [
            'users' => User::orderBy('id','desc')->get(['id', 'name', 'email']),
        ]);
    }

    public function edit(User $user)
    {
        return Inertia::render('Dashboard/Edit', [
            'user' => $user,
        ]);
    }
}
