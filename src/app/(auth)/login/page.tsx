"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// import { login } from "@/feautres/auth/login";

export default function LoginForm() {
    const [loading] = useState(false);
    const [error] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const loginWithGithub = () => {
        const params = new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_GITHUB_ID || "",
            redirect_url: "http://localhost:3000/api/auth/callback",
            scope: "read:user user:email",
        });

        window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <button
                type="button"
                className="bg-purple-500 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
                onClick={loginWithGithub}
            >
                <Github />
                SIGN IN WITH GITHUB
            </button>
        </div>
    );

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

            <button
                type="button"
                className="bg-purple-500 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
                onClick={loginWithGithub}
            >
                <Github />
                SIGN IN WITH GITHUB
            </button>
        </form>
    );
}
