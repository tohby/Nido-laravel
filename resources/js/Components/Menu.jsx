import React from "react";

const Menu = ({ className = "" }) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect x="9" y="16.2" width="10" height="1.6" fill="#0D0B26" />
            <rect x="5" y="11.2" width="14" height="1.6" fill="#0D0B26" />
            <rect x="9" y="6.20001" width="10" height="1.6" fill="#0D0B26" />
        </svg>
    );
};

export default Menu;
