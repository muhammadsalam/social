import type { Metadata } from "next";
import "../globals.css";
import Header from "@/widgets/Header";

import Profile from "@/widgets/Profile";
import { getUserFromToken } from "@/shared/lib/jwt";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Social Network",
    description: "Social Network description",
};

export default async function FeedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUserFromToken();

    if (!user) {
        redirect("/login");
    }

    return (
        <>
            <Header />
            {children}
            <Profile />
        </>
    );
}
