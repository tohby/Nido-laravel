import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

const About = () => {
    return (
        <Guest>
            <Head title="Contact us" />
            <header>
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 flex flex-col items-center py-12 md:py-18">
                    <div className="flex flex-col items-center text-center lg:max-w-[66.67%]">
                        <h1 className="headline mb-4 whitespace-pre-wrap text-balance text-black theme-tech:text-white lg:mb-8">
                            Get in touch with Us.
                        </h1>
                        <p className="text-lg max-w-xl whitespace-pre-wrap text-pretty text-gray-500">
                            Have a question, comment, or suggestion? We'd love
                            to hear from you! Get in touch with our team using
                            the contact form below, and we'll get back to you as
                            soon as possible.
                        </p>
                    </div>
                    <div className="relative mt-12 aspect-[3/4] w-full md:aspect-[16/7]"></div>
                </div>
            </header>
        </Guest>
    );
};

export default About;
