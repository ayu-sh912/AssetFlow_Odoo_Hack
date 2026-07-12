import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiEye,
    FiEyeOff,
    FiLock,
    FiMail,
} from "react-icons/fi";

import { AuthService } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        setError("");

        try {
            setLoading(true);

            const response = await AuthService.login({
                email,
                password,
            });

            localStorage.setItem(
                "accessToken",
                response.data.data.accessToken
            );

            await login();

            navigate("/dashboard", {
                replace: true,
            });
        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                    "Invalid email or password."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen bg-slate-100">

            {/* LEFT */}

            <div className="hidden lg:flex lg:w-1/2 bg-emerald-600 text-white">

                <div className="m-auto max-w-md">

                    <h1 className="text-5xl font-bold leading-tight">
                        AssetFlow ERP
                    </h1>

                    <p className="mt-6 text-lg text-emerald-100 leading-8">
                        Enterprise Asset Management
                        Platform for organizations to
                        manage assets, allocations,
                        maintenance, audits and reports.
                    </p>

                    <div className="mt-12 space-y-5">

                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-white" />
                            Asset Tracking
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-white" />
                            QR Management
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-white" />
                            Resource Booking
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="h-3 w-3 rounded-full bg-white" />
                            Maintenance Workflow
                        </div>

                    </div>

                </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-1 items-center justify-center p-8">

                <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

                    <div className="mb-8 text-center">

                        <h2 className="text-3xl font-bold text-slate-800">
                            Welcome Back
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Login to continue
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Email Address
                            </label>

                            <div className="relative">

                                <FiMail
                                    className="absolute left-4 top-4 text-slate-400"
                                    size={18}
                                />

                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-emerald-600"
                                />

                            </div>

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Password
                            </label>

                            <div className="relative">

                                <FiLock
                                    className="absolute left-4 top-4 text-slate-400"
                                    size={18}
                                />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter your password"
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-12 outline-none transition focus:border-emerald-600"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    className="absolute right-4 top-3 text-slate-500"
                                >
                                    {showPassword ? (
                                        <FiEyeOff
                                            size={18}
                                        />
                                    ) : (
                                        <FiEye
                                            size={18}
                                        />
                                    )}
                                </button>

                            </div>

                        </div>

                        {error && (
                            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        <div className="flex items-center justify-between text-sm">

                            <label className="flex items-center gap-2">

                                <input
                                    type="checkbox"
                                    className="rounded"
                                />

                                Remember me

                            </label>

                            <button
                                type="button"
                                className="font-medium text-emerald-600 hover:underline"
                            >
                                Forgot Password?
                            </button>

                        </div>

                        <button
                            disabled={loading}
                            className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading
                                ? "Signing In..."
                                : "Login"}
                        </button>

                        <div className="text-center text-sm text-slate-600">

                            Don't have an account?

                            <Link
                                to="/register"
                                className="ml-2 font-semibold text-emerald-600 hover:underline"
                            >
                                Create Account
                            </Link>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}