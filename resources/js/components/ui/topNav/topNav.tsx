import React from "react";
import SideNavbar from "./sideNavbar";
import TopNavCart from "./topNavCart";
import TopNavLinks from "./topNavLinks";
import TopNavLogo from "./topNavLogo";

type Props = {};

const topNav = (props: Props) => {
    return (
        <div
            className="flex sticky top-0 z-50 h-30 w-full items-center justify-between border-b border-[#E5E5E5] bg-[#FDFDFC] px-4 text-[#bebeb3] dark:border-[#1b1b18] dark:bg-[#0a0a0a] lg:px-8
        "
        >
            <div className="flex items-center gap-4">
                <SideNavbar />
                <TopNavCart />
            </div>
            <TopNavLinks />
            <TopNavLogo />
        </div>
    );
};

export default topNav;
