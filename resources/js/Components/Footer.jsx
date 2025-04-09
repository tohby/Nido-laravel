import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto px-4 lg:px-2.5 flex h-full flex-col justify-between gap-6 md:gap-[100px] lg:gap-[150px] bg-stone-100 mt-8">
                <div className="max-w-[100rem] mx-auto">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 gap-y-8 pt-6 lg:pt-14">
                        <div className="col-span-12 hidden md:col-span-4 md:block lg:col-start-1">
                            <a
                                aria-label="Homepage"
                                className="block text-green-800 outline-none transition-[color] focus-visible:text-yellow active:text-green-300 theme-tech:text-white theme-tech:focus-visible:text-yellow md:pl-2 lg:pl-0"
                                href="/"
                            >
                                <ApplicationLogo className="w-20 h-20 fill-current text-green-500" />
                            </a>
                        </div>
                        <div className="col-span-12 grid grid-cols-subgrid gap-y-10 md:col-span-8 md:gap-y-18 lg:col-span-6">
                            <div className="col-span-6 flex flex-col gap-4 md:col-span-2 lg:col-span-1">
                                <h3 className="text-gray-400 theme-tech:text-gray-100">
                                    Links
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    <li className="body-s">
                                        <Link
                                            className='before relative py-1 text-green-700 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                            href={route("about")}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li className="body-s">
                                        <Link
                                            className='before relative py-1 text-green-700 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                            href={route("contact")}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-6 flex flex-col gap-4 md:col-span-2 lg:col-span-3">
                                <h3 className="text-gray-400 theme-tech:text-gray-100">
                                    NIDO contact
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    <li className="body-s">
                                        <p className='before relative py-1 text-green-700 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'>
                                            Phone: +84326189705
                                        </p>
                                    </li>
                                    <li className="body-s">
                                        <a
                                            target="_blank"
                                            href="https://www.facebook.com/groups/357099351095953"
                                            className='before relative py-1 text-green-700 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'
                                        >
                                            Facebook group
                                        </a>
                                    </li>
                                    <li className="body-s max-w-80">
                                        <p className='before relative py-1 text-green-700 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'>
                                            Address: TPI Office Building 40-42,
                                            Hung Gia 2, Phu My Hung Urban Area,
                                            Tan Phong Ward District 7, HCMC
                                            Office Address
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-6 flex flex-col gap-4 md:col-span-2 lg:col-span-2">
                                <h3 className="text-gray-400 theme-tech:text-gray-100">
                                    Nigerian Embassy
                                </h3>
                                <ul className="flex flex-col gap-4">
                                    <li className="body-s">
                                        <p className='before relative py-1 text-green-700 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'>
                                            Address: Villa No. 44/1 phố 100000,
                                            P. Vạn Bảo, Ngọc Khánh, Ba Đình, Hà
                                            Nội
                                        </p>
                                    </li>
                                    <li className="body-s">
                                        <p className='before relative py-1 text-green-700 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'>
                                            Phone: +84775568278
                                        </p>
                                    </li>
                                    <li className="body-s">
                                        <p className='before relative py-1 text-green-700 outline-none transition-colors duration-200 hover:text-green-800 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300'>
                                            contact-us@nigeriaembassy.org.vn
                                        </p>
                                    </li>
                                </ul>
                            </div>
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
