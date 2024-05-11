import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-28">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <img
                                    src="/storage/nidovn-logo-7.png"
                                    className="block h-20 w-auto fill-current text-gray-800 me-8"
                                />
                            </Link>
                            <NavLink
                                href={route("welcome")}
                                active={route().current("welcome")}
                                className="border-none"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="border-none"
                                href={route("about")}
                                active={route().current("about")}
                            >
                                About
                            </NavLink>
                            <NavLink
                                className="border-none"
                                href={route("directories")}
                                active={route().current("directories")}
                            >
                                Directories
                            </NavLink>
                            <NavLink
                                className="border-none"
                                href={route("contact")}
                                active={route().current("about")}
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href={route("member.join")}
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-lg px-4 py-2.5 me-2 my-8 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Become a member
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
