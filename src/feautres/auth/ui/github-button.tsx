"use client";

import { Github } from "lucide-react";

export const GithubButton = () => {
    const loginWithGithub = () => {
        const params = new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_GITHUB_ID || "",
            redirect_url: "http://localhost:3000/api/auth/callback",
            scope: "read:user user:email",
        });

        window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
    };

    return (
        <button
            type="button"
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded cursor-pointer flex items-center justify-center gap-2"
            onClick={loginWithGithub}
        >
            <Github />
            SIGN IN WITH GITHUB
        </button>
    );
};
