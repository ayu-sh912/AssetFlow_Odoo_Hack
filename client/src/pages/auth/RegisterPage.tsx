import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthService } from "../../services/auth.service";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(
        e: React.FormEvent
    ) {
        e.preventDefault();

        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            await AuthService.register({
                name: form.name,
                email: form.email,
                password: form.password,
            });

            navigate("/login");
        } catch (err: any) {
            setError(
                err.response?.data?.message ||
                    "Registration failed"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

            <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">

                <h1 className="mb-2 text-center text-3xl font-bold">
                    Create Account
                </h1>

                <p className="mb-8 text-center text-slate-500">
                    Join AssetFlow ERP
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="mb-2 block font-medium">
                            Full Name
                        </label>

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                        />

                    </div>

                    {error && (
                        <div className="rounded-xl bg-red-100 p-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    <button
                        disabled={loading}
                        className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </button>

                </form>

                <p className="mt-6 text-center text-sm">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ml-2 font-semibold text-emerald-600"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}