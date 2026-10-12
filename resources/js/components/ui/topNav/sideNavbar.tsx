import { Link } from "@inertiajs/react";
import { home } from "@/routes";

type Props = {};

const sideNavbar = (props: Props) => {
    return (
        <div className="flex md:hidden h-16 w-full items-center justify-between border-b border-[#E5E5E5] bg-[#FDFDFC] px-4 text-[#bebeb3] dark:border-[#1b1b18] dark:bg-[#0a0a0a] lg:px-8 mt-6">
            <Link href={home()} className="relative p-4">
                <svg
                    className="w-8 h-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M5 7h14M5 12h14M5 17h14"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default sideNavbar;
