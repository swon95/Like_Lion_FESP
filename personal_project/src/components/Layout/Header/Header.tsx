import React from "react";
import HeaderProps from "@/types/public";

const Header = ({ title }: HeaderProps): JSX.Element => {
    return (
        <div className="text-center text-black bg-custom-purple p-3 shadow-md">
            <h1>{`Todo ${title}`}</h1>
        </div>
    );
};

export default Header;
