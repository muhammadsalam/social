import Image from "next/image";
import "swiper/css";
import {
    Bookmark,
    EllipsisVertical,
    MessageSquareMore,
    Share,
    ThumbsUp,
} from "lucide-react";
import clsx from "clsx";
import { IconButton } from "@/shared/ui/IconButton";
import { MainTextArea } from "@/widgets/main-text-area";

export default function FeedPage() {
    return (
        <main className="w-full overflow-hidden flex min-h-screen">
            <div className="w-full grow bg-white">
                {/* <Stories /> */}

                <MainTextArea />

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

                            <IconButton>
                                <EllipsisVertical
                                    className="text-[#CBD5E1]"
                                    size={20}
                                />
                            </IconButton>
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

                            <IconButton>
                                <Bookmark size={20} />
                            </IconButton>
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

                            <IconButton>
                                <EllipsisVertical
                                    className="text-[#CBD5E1]"
                                    size={20}
                                />
                            </IconButton>
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

                            <IconButton>
                                <Bookmark size={20} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
