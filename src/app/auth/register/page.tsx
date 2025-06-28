"use client";
import Link from "next/link";
import { useState } from "react";
import { register } from "@/feautres/auth/register";

export default function RegisterForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        register(email, password)
            .then((data) => {
                console.log("register", data);
            })
            .catch((error) => {
                console.log("error", error);
            });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="m-auto w-[350px] bg-white rounded-lg shadow-md p-8 flex flex-col gap-4"
        >
            <div className="text-4xl text-center mb-2">👋</div>
            <h2 className="text-2xl text-center mb-1">Welcome back!</h2>
            <div className="text-gray-500 text-center mb-4">
                Let's build something great
            </div>
            <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 rounded-md border border-gray-300"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 rounded-md border border-gray-300"
            />
            <button
                type="submit"
                disabled={loading}
                className="bg-purple-500 text-white font-bold py-2 px-4 rounded"
            >
                {loading ? "Signing in..." : "Sign in"}
            </button>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div className="text-center mt-4">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-purple-500">
                    Sign up
                </Link>
            </div>
        </form>
    );
}
