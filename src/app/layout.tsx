import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/Header";
import clsx from "clsx";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
    title: "Social Network",
    description: "Social Network description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    plusJakartaSans.variable,
                    "flex shrink-2 min-h-full"
                )}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
