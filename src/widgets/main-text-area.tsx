"use client";

import { Mic, Paperclip, SendHorizontal, Smile } from "lucide-react";

import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/shared/ui/Button";

import { useState } from "react";
import { IconButton } from "@/shared/ui/IconButton";
import clsx from "clsx";

interface Props {
    className?: string;
}

export const MainTextArea: React.FC<Props> = ({ className }) => {
    const [text, setText] = useState("");

    return (
        <label className="contents">
            <form
                className={clsx(
                    "flex flex-col py-6 px-4 border-b border-border-gray cursor-text",
                    className
                )}
            >
                <div className="flex w-full py-2 px-4 ">
                    <Paperclip size={24} className="text-lightgray h-[28px]" />
                    <TextareaAutosize
                        autoFocus
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="What’s on your mind right now?"
                        className="w-full resize-none text-lg outline-none ml-2 placeholder:text-gray overflow-auto max-h-35"
                    />
                </div>

                <div className="flex justify-end space-x-2">
                    <IconButton variant="outline" transition="filling">
                        <Smile />
                    </IconButton>
                    <IconButton variant="outline" transition="filling">
                        <Mic />
                    </IconButton>
                    <Button transition="fill" variant="primary">
                        Post <SendHorizontal />
                    </Button>
                </div>
            </form>
        </label>
    );
};
