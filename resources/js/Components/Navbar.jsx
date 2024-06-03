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
            <div className="mx-auto max-w-screen-3xl px-4 flex max-w-[80rem] items-center justify-between md:h-11 lg:px-6">
                <div className="relative flex w-full justify-between gap-16 md:justify-normal">
                    <img
                        src="/nidovn-logo.svg"
                        className="block h-10 lg:h-20 w-auto fill-current text-gray-800 me-8"
                    />
                    <div
                        className="absolute right-1 top-1.5 z-20 overflow-hidden rounded-lg transition-[background-color] lg:!hidden bg-transparent"
                        style={{ width: 32, height: 32 }}
                    >
                        <button
                            id=":R2ajaH1:"
                            type="button"
                            aria-label="Menu"
                            aria-expanded="false"
                            aria-controls=":R2aja:"
                            className="group absolute right-0 top-0 mr-0 mt-0 flex h-8 w-8 flex-col items-center justify-center outline-none"
                            data-rac=""
                            onClick={() => openSidebar(true)}
                        >
                            <div className="ease my-1 h-[2px] w-5 transform rounded-full transition duration-300 group-data-[focus-visible]:bg-yellow group-data-[focus-visible]:theme-tech:bg-yellow bg-gray-400 theme-tech:bg-gray-200" />
                            <div className="ease my-1 h-[2px] w-5 transform rounded-full transition duration-300 group-data-[focus-visible]:bg-yellow group-data-[focus-visible]:theme-tech:bg-yellow bg-gray-400 theme-tech:bg-gray-200" />
                        </button>
                    </div>
                    <ul className="hidden flex-col items-center gap-8 lg:flex lg:flex-row">
                        {menuLinks.map((link, index) => (
                            <li className="body-s">
                                <NavLink
                                    className='before border-none relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:text-white theme-tech:hover:text-gray-200 theme-tech:focus-visible:text-yellow'
                                    href={route(link.route)}
                                    active={route().current(link.route)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="hidden shrink-0 gap-8 lg:flex">
                    <Link
                        href={route("member.join")}
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-lg px-4 py-2.5 ms-6 my-8 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Become a member
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
