import { Link, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

export default function Guest({ children }) {
    const { passport_settings } = usePage().props;
    const [showBanner, setShowBanner] = useState(passport_settings.value);

    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div className="min-h-screen">
            {showBanner && (
                <div
                    id="sticky-banner"
                    tabIndex={-1}
                    className="start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-green-800 dark:bg-gray-700 dark:border-gray-600"
                >
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-sm font-normal text-white">
                            <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                                <svg
                                    className="w-3 h-3 text-green-800"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 19"
                                >
                                    <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                                </svg>
                                <span className="sr-only">Light bulb</span>
                            </span>
                            <span>
                                Passport registration is now open! Click{" "}
                                <Link className="font-bold text-white mr-1 text-md">
                                    HERE
                                </Link>
                                to register
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={() => setShowBanner(false)}
                            type="button"
                            className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
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
                            <span className="sr-only">Close banner</span>
                        </button>
                    </div>
                </div>
            )}

            <Navbar openSidebar={setOpenSidebar} />
            <main>{children}</main>
            <Sidebar
                isOpen={openSidebar}
                onClose={() => setOpenSidebar(false)}
            />
            <Footer />
        </div>
    );
}
