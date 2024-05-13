import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

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
                                <h5 className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"></h5>
                                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                                    Supercharge your hiring by taking advantage
                                    of our{" "}
                                    <a
                                        href="#"
                                        className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline"
                                    >
                                        limited-time sale
                                    </a>{" "}
                                    for Flowbite Docs + Job Board. Unlimited
                                    access to over 190K top-ranked candidates
                                    and the #1 design job board.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <a
                                        href="#"
                                        className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        Learn more
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        Get access{" "}
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
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
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Sidebar;
