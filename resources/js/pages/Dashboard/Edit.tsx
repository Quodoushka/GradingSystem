import { useForm } from "@inertiajs/react";

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Edit({ user }: { user: User }) {
    console.log(user);
    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    return (
        <form onSubmit={submit} className="p-6 max-w-md space-y-4">
            <h1 className="text-2xl font-bold">Edit User</h1>

            <div>
                <label>Name</label>
                <input
                    className="border p-2 w-full"
                    value={data.name}
                    onChange={e => setData("name", e.target.value)}
                />
                {errors.name && <p className="text-red-600">{errors.name}</p>}
            </div>

            <div>
                <label>Email</label>
                <input
                    className="border p-2 w-full"
                    value={data.email}
                    onChange={e => setData("email", e.target.value)}
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>

            <div>
                <label>New Password (leave blank to keep old password)</label>
                <input
                    type="password"
                    className="border p-2 w-full"
                    value={data.password}
                    onChange={e => setData("password", e.target.value)}
                    placeholder="••••••••"
                />
                {errors.password && <p className="text-red-600">{errors.password}</p>}
            </div>

            <button
                disabled={processing}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Update
            </button>
        </form>
    );
}
