"use client";

import { logout } from "@/feautres/auth/lib/logout";
import { IconButton } from "@/shared/ui/IconButton";
import clsx from "clsx";
import { LogOut } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
    className?: string;
}

export const HeaderFooter: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={clsx(
                "border-t border-border-gray mt-auto pt-4 flex items-center",
                className
            )}
        >
            <Image
                src="/assets/avatar.jpg"
                width={40}
                height={40}
                alt="avatar"
                className="rounded-full"
            />

            <div className="flex flex-col ml-3">
                <strong>Azunyan U. Wu</strong>
                <span className="text-sm text-gray font-medium">
                    Basic Member
                </span>
            </div>

            <IconButton
                onClick={logout}
                className="ml-auto hover:text-[crimson]"
            >
                <LogOut />
            </IconButton>
        </div>
    );
};
