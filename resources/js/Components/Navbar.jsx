import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";
import Menu from "./Menu";

const menuLinks = [
    { label: "Home", route: "welcome" },
    { label: "About", route: "about" },
    { label: "Directories", route: "directories" },
    { label: "Contact", route: "contact" },
];

const Navbar = () => {
    return (
        <nav className="py-3 lg:py-6">
            <div className="mx-auto max-w-screen-3xl px-4 flex max-w-[80rem] items-center justify-between md:h-11 lg:px-6">
                <div className="relative flex w-full justify-between gap-16 md:justify-normal">
                    <img
                        src="/storage/nidovn-logo-7.png"
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
                        >
                            <div className="ease my-1 h-[2px] w-5 transform rounded-full transition duration-300 group-data-[focus-visible]:bg-yellow group-data-[focus-visible]:theme-tech:bg-yellow bg-gray-400 theme-tech:bg-gray-200" />
                            <div className="ease my-1 h-[2px] w-5 transform rounded-full transition duration-300 group-data-[focus-visible]:bg-yellow group-data-[focus-visible]:theme-tech:bg-yellow bg-gray-400 theme-tech:bg-gray-200" />
                        </button>
                        <div
                            className="flex flex-col gap-10 pb-3 pl-3 pr-[62px] pt-6 md:pr-[110px]"
                            id=":R2aja:"
                            aria-hidden="true"
                        >
                            <ul
                                className="flex flex-col gap-1 opacity-0"
                                aria-labelledby=":R2ajaH1:"
                            >
                                {menuLinks.map((link, index) => (
                                    <li>
                                        <Link
                                            className="body-m group inline-flex h-6 items-center gap-4 rounded px-1 py-1 text-white outline-none focus-visible:text-yellow theme-tech:text-gray-400"
                                            tabIndex={-1}
                                            href="/product"
                                        >
                                            Product
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="group-active: h-4 w-4 rotate-90 text-green-500 theme-tech:text-white"
                                            >
                                                <path
                                                    d="M6 10L12 4L18 10M12 5V20"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex">
                                <a
                                    className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border group-hover:border-green-500 group-hover:text-green-500 focus-visible:border-yellow active:border-green-300 active:text-green-300 py-3 md:py-2 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4 h-8 shrink-0 gap-4 border-white text-white hover:border-gray-200 hover:text-gray-200 theme-tech:border-gray-200 theme-tech:text-gray-400 theme-tech:hover:border-green-500 theme-tech:hover:text-green-500 theme-product:border-white theme-platform:border-white"
                                    tabIndex={-1}
                                    href="/learn-more"
                                >
                                    Learn more
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="rotate-90 h-5 w-5"
                                    >
                                        <path
                                            d="M6 10L12 4L18 10M12 5V20"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="hidden flex-col items-center gap-12 lg:flex lg:flex-row">
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
