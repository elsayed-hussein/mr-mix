import React from "react";

type Props = {};

const topNavLogo = (props: Props) => {
    return (
        <div className=" px-4 lg:px-8">
            <img src="/images/logo.png" alt="logo" className="h-28 w-auto" />
        </div>
    );
};

export default topNavLogo;
