import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Login Page in Social",
    description: "Lorem ipsum description in Social!",
    openGraph: {
        type: "website",
        title: "Login in Social",
        description:
            "Social is a test website for the testing my skills and viewing it. I think this OpenGraph is pretty good. Nice!",
        images: "https://i.postimg.cc/XvzNCrTY/qw6t6.png",
        url: "https://social-git-main-muhammadsalams-projects.vercel.app",
        siteName: "Social Website",
    },
};

export default function LoginLayout({ children }: { children: ReactNode }) {
    return children;
}
