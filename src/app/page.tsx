"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
    Bookmark,
    EllipsisVertical,
    MessageSquareMore,
    Mic,
    Paperclip,
    SendHorizontal,
    Share,
    Smile,
    ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/shared/ui/Button";
import clsx from "clsx";

const stories = [
    {
        avatar: "/assets/avatar.jpg",
        name: "x_ae-23b",
    },
    {
        avatar: "/assets/avatar.jpg",
        name: "maisenpai",
    },
    {
        avatar: "/assets/avatar.jpg",
        name: "saylortwift",
    },
    {
        avatar: "/assets/avatar.jpg",
        name: "johndoe",
    },
    {
        avatar: "/assets/avatar.jpg",
        name: "maryjane2",
    },
    {
        avatar: "/assets/avatar.jpg",
        name: "maryjane2",
    },
];

export default function Home() {
    const [text, setText] = useState("");

    return (
        <main className="w-full overflow-hidden flex min-h-screen">
            <div className="w-full grow bg-white">
                <div className="flex py-6 border-b border-border-gray">
                    <Swiper
                        className="w-full px-8!"
                        spaceBetween={16}
                        slidesPerView="auto"
                    >
                        {stories.map((story) => (
                            <SwiperSlide className="flex! flex-col items-center gap-1 group cursor-pointer w-auto!">
                                <div className="p-[2px] inline-block rounded-full bg-radial-[at_0%_50%] from-purple from-13% via-[#C622FF] via-[#FF2222] via-65% to-[#FFA439]">
                                    <Image
                                        src={story.avatar}
                                        alt=""
                                        width={64}
                                        height={64}
                                        className="border-2 border-white rounded-full bg-white"
                                    />
                                </div>
                                <p className="transition-transform group-hover:-translate-y-1">
                                    {story.name}
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <label className="contents">
                    <form className="flex flex-col py-6 px-4 border-b border-border-gray cursor-text">
                        <div className="flex w-full py-2 px-4 ">
                            <Paperclip
                                size={24}
                                className="text-lightgray h-[28px]"
                            />
                            <TextareaAutosize
                                autoFocus
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="What’s on your mind right now?"
                                className="w-full resize-none text-lg outline-none ml-2 placeholder:text-gray overflow-auto max-h-35"
                            />
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                className="size-10 flex justify-center items-center border border-[#CBD5E1] rounded-full cursor-pointer hocus:bg-purple hocus:text-white hocus:border-purple transition-[border-color_color_background] outline-none"
                            >
                                <Smile />
                            </button>
                            <button
                                type="button"
                                className="size-10 flex justify-center items-center border border-[#CBD5E1] rounded-full cursor-pointer hocus:bg-purple hocus:text-white hocus:border-purple transition-[border-color_color_background] outline-none"
                            >
                                <Mic />
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 h-10 bg-purple text-white rounded-full cursor-pointer border border-purple hocus:bg-white hocus:text-purple hocus:border-[#CBD5E1] transition-[border-color_color_background] text-sm font-bold outline-none">
                                Post
                                <SendHorizontal />
                            </button>
                        </div>
                    </form>
                </label>

                {/* посты */}
                <div className="divide-y divide-border-gray">
                    {/* пост */}
                    <div className="p-4">
                        {/* пост.топ */}
                        <div className="flex items-start gap-3">
                            <Image
                                src="/assets/avatar.jpg"
                                alt="avatar"
                                width={40}
                                height={40}
                            />

                            <div className="grow flex flex-col">
                                <strong className="text-sm font-bold">
                                    X_AE_A-13
                                </strong>
                                <p className="text-sm">
                                    Product Designer, slothUI
                                </p>
                            </div>

                            <div>
                                <EllipsisVertical
                                    className="text-[#CBD5E1]"
                                    size={20}
                                />
                            </div>
                        </div>

                        {/* пост.контент */}
                        <div className="py-3 px-1 flex flex-col gap-4">
                            <p className="text-sm [&_span]:text-purple">
                                Habitant morbi tristique senectus et netus et.
                                Suspendisse sed nisi lacus sed viverra. Dolor
                                morbi non arcu risus quis varius.{" "}
                                <span>#amazing</span> <span>#great</span>{" "}
                                <span>#lifetime</span> <span>#uiux</span>{" "}
                                <span>#machinelearning</span>
                            </p>

                            <Image
                                className="rounded-2xl w-full max-w-180"
                                src="/assets/post-image.jpg"
                                width={720}
                                height={260}
                                alt="House image"
                            />
                        </div>

                        {/* пост.нижнее */}
                        <div className="flex justify-between px-1 items-center">
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <button className="cursor-pointer flex items-center gap-2 group">
                                    <ThumbsUp
                                        size={20}
                                        className={clsx(
                                            "text-lightgray group-hover:opacity-80 transition-[opacity]",
                                            true && "text-purple"
                                        )}
                                    />
                                    <span>12 Likes</span>
                                </button>
                                <button className="cursor-pointer flex items-center gap-2 group">
                                    <MessageSquareMore
                                        size={20}
                                        className="text-lightgray group-hover:opacity-80 transition-[opacity]"
                                    />
                                    <span>25 Comments</span>
                                </button>
                                <button className="cursor-pointer flex items-center gap-2 group">
                                    <Share
                                        size={20}
                                        className="text-lightgray group-hover:opacity-80 transition-[opacity]"
                                    />
                                    <span>187 Share</span>
                                </button>
                            </div>

                            <Bookmark
                                size={20}
                                className="text-lightgray cursor-pointer hover:opacity-80 transition-[opacity]"
                            />
                        </div>
                    </div>

                    {/* пост */}
                    <div className="p-4">
                        {/* пост.топ */}
                        <div className="flex items-start gap-3">
                            <Image
                                src="/assets/avatar.jpg"
                                alt="avatar"
                                width={40}
                                height={40}
                            />

                            <div className="grow flex flex-col">
                                <strong className="text-sm font-bold">
                                    X_AE_A-13
                                </strong>
                                <p className="text-sm">
                                    Product Designer, slothUI
                                </p>
                            </div>

                            <div>
                                <EllipsisVertical
                                    className="text-[#CBD5E1]"
                                    size={20}
                                />
                            </div>
                        </div>

                        {/* пост.контент */}
                        <div className="py-3 px-1 flex flex-col gap-4">
                            <p className="text-sm [&_span]:text-purple">
                                Habitant morbi tristique senectus et netus et.
                                Suspendisse sed nisi lacus sed viverra. Dolor
                                morbi non arcu risus quis varius.{" "}
                                <span>#amazing</span> <span>#great</span>{" "}
                                <span>#lifetime</span> <span>#uiux</span>{" "}
                                <span>#machinelearning</span>
                            </p>
                        </div>

                        {/* пост.нижнее */}
                        <div className="flex justify-between px-1 items-center">
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <button className="cursor-pointer flex items-center gap-2 group">
                                    <ThumbsUp
                                        size={20}
                                        className={clsx(
                                            "text-lightgray group-hover:opacity-80 transition-[opacity]",
                                            true && "text-purple"
                                        )}
                                    />
                                    <span>12 Likes</span>
                                </button>
                                <button className="cursor-pointer flex items-center gap-2 group">
                                    <MessageSquareMore
                                        size={20}
                                        className="text-lightgray group-hover:opacity-80 transition-[opacity]"
                                    />
                                    <span>25 Comments</span>
                                </button>
                                <button className="cursor-pointer flex items-center gap-2 group">
                                    <Share
                                        size={20}
                                        className="text-lightgray group-hover:opacity-80 transition-[opacity]"
                                    />
                                    <span>187 Share</span>
                                </button>
                            </div>

                            <Bookmark
                                size={20}
                                className="text-lightgray cursor-pointer hover:opacity-80 transition-[opacity]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 border-l border-border-gray max-w-92 w-full"></div>
        </main>
    );
}
