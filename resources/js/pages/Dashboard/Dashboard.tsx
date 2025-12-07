import React from 'react';
import { Link, router } from "@inertiajs/react";

interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export default function Dashboard({ users }: { users: User[] }) {
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(`/users/${id}`);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Users</h1>

                <Link
                    href="/users/create"
                    className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
                >
                    + Add User
                </Link>
            </div>

            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 border-b">ID</th>
                            <th className="p-3 border-b">Name</th>
                            <th className="p-3 border-b">Email</th>
                            <th className="p-3 border-b">Created</th>
                            <th className="p-3 border-b">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="p-3 border-b">{user.id}</td>
                                    <td className="p-3 border-b">{user.name}</td>
                                    <td className="p-3 border-b">{user.email}</td>
                                    <td className="p-3 border-b text-gray-600">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="p-3 border-b space-x-3">
                                        <Link
                                            href={`/dash/${user.id}/edit`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="p-4 text-center text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
