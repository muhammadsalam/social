import type { Metadata } from "next";
import "./globals.css";
import Header from "@/widgets/Header";

import Profile from "@/widgets/Profile";

export const metadata: Metadata = {
    title: "Social Network",
    description: "Social Network description",
};

export default function FeedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Profile />
        </div>
    );
}
