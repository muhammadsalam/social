import type { Metadata } from "next";
import "../globals.css";
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
        <>
            <Header />
            {children}
            <Profile />
        </>
    );
}
