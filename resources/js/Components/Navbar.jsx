import React from "react";
import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";

const menuLinks = [
    { label: "Home", route: "welcome" },
    { label: "About", route: "about" },
    { label: "Directories", route: "directory" },
    { label: "Contact", route: "contact" },
];

const Navbar = ({ openSidebar }) => {
    return (
        <nav className="py-3 lg:py-6">
            <div className="mx-auto max-w-screen-3xl px-4 flex max-w-[100rem] items-center justify-between md:h-11 lg:px-6">
                <div className="relative flex w-full items-center justify-between lg:justify-center gap-16">
                    <ul className="hidden lg:flex flex-1 justify-start gap-8">
                        {menuLinks.map((link, index) => (
                            <li className="body-s" key={index}>
                                <NavLink
                                    className="relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow active:text-green-300"
                                    href={route(link.route)}
                                    active={route().current(link.route)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <img
                        src="/nidovn-logo.svg"
                        className="block h-10 lg:h-20 w-auto fill-current text-gray-800"
                        alt="Nido VN Logo"
                    />
                    <ul className="hidden lg:flex flex-1 justify-end gap-8">
                        <Link
                            href={route("member.join")}
                            type="button"
                            className="text-white bg-green-700 hover:bg-green-800 font-medium text-lg px-4 py-2.5"
                        >
                            Become a member
                        </Link>
                    </ul>
                </div>
                <div
                    className="right-1 top-1.5 z-20 lg:hidden bg-transparent"
                    style={{ width: 32, height: 32 }}
                >
                    <button
                        type="button"
                        aria-label="Menu"
                        className="flex h-8 w-8 flex-col items-center justify-center"
                        onClick={() => openSidebar(true)}
                    >
                        <div className="my-1 h-[2px] w-5 bg-gray-400 rounded-full" />
                        <div className="my-1 h-[2px] w-5 bg-gray-400 rounded-full" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
