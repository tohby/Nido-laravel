import React from "react";
import ApplicationLogo from "./ApplicationLogo";

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 flex h-full flex-col justify-between gap-6 md:gap-[100px] lg:gap-[150px] bg-stone-100 mt-8">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 gap-y-8 pt-6 lg:pt-14">
                    <div className="col-span-12 hidden md:col-span-3 md:block lg:col-start-2">
                        <a
                            aria-label="Homepage"
                            className="block text-green-800 outline-none transition-[color] focus-visible:text-yellow active:text-green-300 theme-tech:text-white theme-tech:focus-visible:text-yellow md:pl-2 lg:pl-0"
                            href="/"
                        >
                            <ApplicationLogo className="w-20 h-20 fill-current text-green-500" />
                        </a>
                    </div>
                    <div className="col-span-12 grid grid-cols-subgrid gap-y-8 md:col-span-9 md:gap-y-18 lg:col-span-8">
                        <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
                            <h3 className="text-gray-400 theme-tech:text-gray-100">
                                Conversational AI
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li className="body-s">
                                    <a
                                        className='before relative py-1 text-green-500 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        href="/product"
                                    >
                                        Product
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className='before relative py-1 text-green-500 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        href="/platform"
                                    >
                                        Platform
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
                            <h3 className="text-gray-400 theme-tech:text-gray-100">
                                Customers
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li className="body-s">
                                    <a
                                        className='before relative py-1 text-green-500 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        href="/customers"
                                    >
                                        Customer Stories
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-6 flex flex-col gap-4 md:col-span-6 lg:col-span-4">
                            <h3 className="text-gray-400 theme-tech:text-gray-100">
                                Company
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li className="body-s">
                                    <a
                                        className='before relative py-1 text-green-500 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        href="/about"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className='before relative py-1 text-green-500 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        href="/news"
                                    >
                                        Newsroom
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className='before relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        href="/terms-and-conditions"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className='before relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        href="/privacy-policy"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className='before relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        href="#manage-cookies"
                                    >
                                        Cookie Preferences
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="body-s col-span-11 mb-6 text-gray-400 theme-tech:text-gray-100 md:pb-6 lg:col-start-2">
                        © {/* */}2024{/* */} NIDO Vietnam
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
