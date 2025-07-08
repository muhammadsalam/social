import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface Props {
    className?: string;
}

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

export const Stories: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={clsx("flex py-6 border-b border-border-gray", className)}
        >
            <Swiper
                className="w-full px-8!"
                spaceBetween={16}
                slidesPerView="auto"
            >
                {stories.map((story, index) => (
                    <SwiperSlide
                        className="flex! flex-col items-center gap-1 group cursor-pointer w-auto!"
                        key={story.name + index}
                    >
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
    );
};
