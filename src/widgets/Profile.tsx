"use client";

import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

const profileInfo = {
    name: "X_AE_C-921",
    id: "@xtheobliterator",
    city: "Osaka, Japan 🎌",
    stats: {
        posts: 548,
        followers: 1259,
        following: 221,
    },
    about: "Hi there! 👋 I'm X-AE-A-19, an AI enthusiast and fitness aficionado. When I'm not crunching numbers or optimizing algorithms, you can find me hitting the gym.",
};

function getNumberWithSymbol(number: number) {
    let suffix = "";
    let divisor = 1;

    if (number >= 1_000 && number < 1_000_000) {
        divisor = 1000;
        suffix = "k";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
        divisor = 1_000_000;
        suffix = "kk";
    }

    const formatted = (number / divisor).toFixed(1);
    return formatted.endsWith(".0")
        ? formatted.slice(0, -2) + suffix
        : formatted + suffix;
}

const Profile = () => {
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        if (typeof navigator !== "undefined") {
            setIsOnline(navigator.onLine);

            const handleOnline = () => setIsOnline(true);
            const handleOffline = () => setIsOnline(false);

            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);

            return () => {
                window.removeEventListener("online", handleOnline);
                window.removeEventListener("offline", handleOffline);
            };
        }
    }, []);

    return (
        <div className="flex flex-col py-8 px-6 max-w-92 border-l w-full border-border-gray h-screen sticky top-0 flex flex-column items-center">
            <div className="relative">
                <Image
                    src="/assets/avatar.jpg"
                    width={96}
                    height={96}
                    alt="avatar"
                    className="rounded-full"
                />
                <span
                    className={`block size-6 box-border border border-[2.25px] border-white rounded-full absolute right-0 bottom-0 ${
                        isOnline ? "bg-green" : "bg-[crimson]"
                    }`}
                ></span>
            </div>

            <strong className="mt-4 text-xl">{profileInfo.name}</strong>
            <p className="font-medium mt-1">{profileInfo.id}</p>
            <p className="text-gray mt-1 font-medium">{profileInfo.city}</p>

            <div className="w-full flex justify-between text-center mt-8">
                <div className="w-full border-r border-[#CBD5E1] last:border-0">
                    <span className="font-extrabold text-xl">
                        {getNumberWithSymbol(profileInfo.stats.posts)}
                    </span>
                    <p className="font-semibold text-gray">Posts</p>
                </div>
                <div className="w-full border-r border-[#CBD5E1] last:border-0">
                    <span className="font-extrabold text-xl">
                        {getNumberWithSymbol(profileInfo.stats.followers)}
                    </span>
                    <p className="font-semibold text-gray">Followers</p>
                </div>
                <div className="w-full border-r border-[#CBD5E1] last:border-0">
                    <span className="font-extrabold text-xl">
                        {getNumberWithSymbol(profileInfo.stats.following)}
                    </span>
                    <p className="font-semibold text-gray">Following</p>
                </div>
            </div>

            <div className="mt-10">
                <strong>About Me</strong>
                <p className="mt-4 text-gray text-sm">{profileInfo.about}</p>
                <Button className="font-bold mt-3">Read More</Button>
            </div>
        </div>
    );
};

export default Profile;
