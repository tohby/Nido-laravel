import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

const About = () => {
    return (
        <Guest>
            <Head title="Directories" />
            <header>
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 flex flex-col items-center py-12 md:py-18">
                    <div className="flex flex-col items-center text-center lg:max-w-[66.67%]">
                        <h1 className="headline mb-4 whitespace-pre-wrap text-balance text-black lg:mb-8">
                            Directories.
                        </h1>
                        <p className="text-lg max-w-xl whitespace-pre-wrap text-pretty text-gray-500">
                            Explore the vibrant community of Nigerian entrepreneurs making their mark in Vietnam.
                        </p>
                    </div>
                </div>
            </header>
            <section id="directories">
                <div className="container p-4 mx-auto">
                    <div
                        className="mx-auto flex flex-col items-center border border-gray-200 bg-white rounded-lg md:flex-row md:max-w-6xl p-2"
                    >
                        <img
                            className="object-cover w-full rounded-lg h-50 md:h-60 md:w-48 md:rounded-lg"
                            src="/nido-12.jpg"
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal ml-4">
                            <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in
                                reverse chronological order.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </Guest>
    );
};

export default About;
