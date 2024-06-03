import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import NavLink from "./NavLink";
import { Link } from "@inertiajs/react";

const menuLinks = [
    { label: "Home", route: "welcome" },
    { label: "About", route: "about" },
    { label: "Directories", route: "directories" },
    { label: "Contact", route: "contact" },
];
const Sidebar = ({ isOpen, onClose }) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 overflow-hidden z-40"
                onClose={onClose}
            >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <div className="fixed inset-y-0 right-0 max-w-full flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition duration-300 ease-in-out"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition duration-300 ease-in-out"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className="relative w-80 bg-white dark:bg-gray-800 shadow-md">
                            <div className="px-4 py-6">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close menu</span>
                                </button>
                                <div className="mt-6">
                                    <ul className="flex-col items-center gap-8 lg:flex lg:flex-row">
                                        {menuLinks.map((link, index) => (
                                            <li className="body-s" key={index}>
                                                <NavLink
                                                    className='before border-none relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:text-white theme-tech:hover:text-gray-200 theme-tech:focus-visible:text-yellow'
                                                    href={route(link.route)}
                                                    active={route().current(
                                                        link.route,
                                                    )}
                                                >
                                                    {link.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                        <li>
                                            <Link
                                                href={route("member.join")}
                                                type="button"
                                                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-lg px-4 py-2.5 my-8 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            >
                                                Become a member
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Sidebar;
