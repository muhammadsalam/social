import { IconButton } from "@/shared/ui/IconButton";
import { Logo } from "@/shared/ui/Logo";
import { Home, LogOut, MessageCircleMore, Search, Users } from "lucide-react";
import Image from "next/image";

const NavigationInfo = [
    {
        link: "/feed",
        title: "Feed",
        notification: 10,
        Icon: ({ ...props }) => <Home {...props} />,
        isDisabled: false,
    },
    {
        link: "/messages",
        title: "Messages",
        notification: 0,
        Icon: ({ ...props }) => <MessageCircleMore {...props} />,
        isDisabled: false,
    },
    {
        link: "/friends",
        title: "Friends",
        notification: 2,
        Icon: ({ ...props }) => <Users {...props} />,
        isDisabled: false,
    },
];

const Header = () => {
    return (
        <header className="flex flex-col p-4 max-w-78 border-r border-border-gray h-screen sticky top-0">
            <Logo />

            <label className="cursor-text relative flex items-center mt-4 py-2 px-3 border border-[#CBD5E1] rounded-full">
                <Search className="text-gray mr-2" size={20} />
                <input
                    placeholder="Search..."
                    className="font-medium placeholder:text-gray outline-none grow"
                />
            </label>

            <nav className="mt-8">
                <ul className="space-y-2">
                    {NavigationInfo.map((item) => (
                        <li key={item.link}>
                            <a
                                href={item.link}
                                className="group flex gap-2 items-center px-3 py-2 hover:bg-blue-100 rounded-sm transition-[background-color]"
                            >
                                <item.Icon className="text-[#94A3B8] transition-text" />
                                <span className="font-bold grow group-hover:ml-1 transition-[margin] duration-123">
                                    {item.title}
                                </span>
                                {item.notification > 0 && (
                                    <span className="py-1 px-[10px] border rounded-full text-sm/5 text-purple font-semibold border-[#A5B4FC] bg-[#EEF2FF] -tracking-[0.006em]">
                                        {item.notification}
                                    </span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="border-t border-border-gray mt-auto pt-4 flex items-center">
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

                <IconButton className="ml-auto hover:text-[crimson]">
                    <LogOut />
                </IconButton>
            </div>
        </header>
    );
};

export default Header;
