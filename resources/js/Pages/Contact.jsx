import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Facebook, MessageCircle, ChevronUp } from "react-feather";
import { faqs } from "@/Constants/faqs";
import { Disclosure, Transition } from "@headlessui/react";

const About = () => {
    return (
        <Guest>
            <Head title="Contact us" />
            <header className="mb-4">
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 flex flex-col items-center py-12 md:py-18">
                    <div className="flex flex-col items-center text-center lg:max-w-[66.67%]">
                        <h1 className="headline mb-4 whitespace-pre-wrap text-balance text-black lg:mb-8">
                            Get in touch with Us.
                        </h1>
                        <p className="text-lg max-w-xl whitespace-pre-wrap text-pretty text-gray-500">
                            Have a question, comment, or suggestion? We'd love
                            to hear from you! Get in touch with our team using
                            the contact form below, and we'll get back to you as
                            soon as possible.
                        </p>
                    </div>
                </div>
            </header>
            <section className="px-6 max-w-6xl container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="max-w-sm p-6 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-100 mb-4">
                            <MessageCircle className="text-green-900" />
                        </div>

                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Join our group on Whatsapp
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Our lines are open, meet like minded people on our
                            WhatsApp group.
                        </p>
                        <a
                            href="https://wa.me/+84326189705?text=Hello%20NIDO"
                            target="_blank"
                            className="inline-flex font-medium items-center text-green-600 mt-2"
                        >
                            Join our WhatsApp group
                        </a>
                    </div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-100 mb-4">
                            <MessageCircle className="text-green-900" />
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Message Us
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Send us an email, and our dedicated team will get
                            back to you promptly.
                        </p>
                        <h5 className="inline-flex font-medium items-center text-green-600 mt-12">
                            info@nidovietnam.com
                        </h5>
                    </div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-100 mb-4">
                            <Facebook className="text-green-900" />
                        </div>
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Join our community
                        </h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Connect with like-minded individuals, share ideas,
                            and stay updated on the latest news and events by
                            joining our Facebook group
                        </p>
                        <a
                            href="https://www.facebook.com/groups/357099351095953"
                            target="_blank"
                            className="inline-flex font-medium items-center text-green-600 hover:underline"
                        >
                            Nigerians in Vietnam facebook
                            <svg
                                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section id="CTA" className="mx-4 mt-2 lg:mt-20">
                <div className="relative bg-green-900 py-80 rounded-xl">
                    <img
                        src="/cta_bg.png"
                        alt="Background Image"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="text-white text-center">
                                <h2 className="text-3xl lg:text-6xl font-normal">
                                    Join us and be part of a community where
                                    camaraderie meets opportunity for Nigerians
                                    in Vietnam.
                                </h2>
                                <div className="mt-8">
                                    <Link
                                        href={route("member.join")}
                                        type="button"
                                        className="focus:outline-none text-white bg-transparent border-2 border-white hover:bg-white hover:text-green-800 focus:ring-4 focus:ring-green-300 font-medium text-lg px-6 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-lg hover:-translate-y-1 transition ease-in-out delay-150"
                                    >
                                        Become a member
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="faqs">
                <div className="container py-20 lg:py-40 mx-auto">
                    <div className="max-w-xl mx-auto">
                        <div className="w-full h-1 max-w-28 min-h-1 bg-green-700 mb-4 mx-auto"></div>
                        <div className="text-center mb-10">
                            <h2 className="text-6xl font-normal">
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="w-full pt-2">
                            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                                {faqs.map((faq, index) => (
                                    <Disclosure
                                        defaultOpen={index === 0 && true}
                                        as="div"
                                        className={index !== 0 ? "mt-6" : ""}
                                        key={index}
                                    >
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-6 py-6 text-left text-2xl font-normal text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500/75">
                                                    <span>{faq.question}</span>
                                                    <ChevronUp
                                                        className={`${
                                                            open
                                                                ? "rotate-180 transform transition-transform duration-300"
                                                                : "transition-transform duration-300"
                                                        } h-10 w-10 text-green-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Transition
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-xl text-gray-500">
                                                        {faq.answer}
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Guest>
    );
};

export default About;
