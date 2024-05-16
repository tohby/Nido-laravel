import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUp, Users } from "react-feather";
import { faqs } from "@/Constants/faqs";

const Default = () => {
    return (
        <Guest>
            <Head title="Welcome" />

            <div className="relative w-full md:w-11/12  h-[45rem] mx-auto mt-4 overflow-hidden rounded-3xl md:block">
                <video
                    className="absolute left-0 w-full h-full object-cover rounded-3xl"
                    autoPlay
                    loop
                    muted
                    preload="true"
                >
                    <source
                        src="/20193650-uhd_3840_2160_24fps.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Color overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

                {/* Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-4">
                        Bridging Cultures, Igniting Change
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        Connecting Nigerian Hearts in the Heart of Vietnam
                    </p>
                </div>
            </div>
            <section className="py-20">
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                        <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                            <h2 className="text-5xl mb-2 py-6">
                                Welcome to Nido Vietnam, your home base in the
                                diaspora.
                            </h2>
                            <p className="mb-0 text-lg">
                                Experience the power of community as Nigerians
                                come together in Vietnam to support, inspire,
                                and uplift each other. Nido is your anchor in a
                                world of opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                        <div className="col-span-12 mb-6 md:col-span-6 md:mb-0 lg:col-span-5 lg:col-start-2">
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl">
                                <img
                                    alt="One Nigeria"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="block h-auto w-full object-cover"
                                    sizes="(min-width: 769px) 50vw, 100vw"
                                    src="/1577075996970.jpg"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        inset: 0,
                                        color: "transparent",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-3 lg:col-start-9">
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 lg:mt-1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17.7929 2.29295C18.1834 1.90243 18.8166 1.90243 19.2071 2.29295L21.7071 4.79295C22.0976 5.18348 22.0976 5.81664 21.7071 6.20717L6.20711 21.7072C5.81658 22.0977 5.18342 22.0977 4.79289 21.7072L2.29289 19.2072C1.90237 18.8166 1.90237 18.1835 2.29289 17.793L17.7929 2.29295ZM16.1642 6.75006L17.25 7.83585L19.5858 5.50006L18.5 4.41428L16.1642 6.75006ZM15.8358 9.25006L14.75 8.16427L4.41421 18.5001L5.5 19.5858L15.8358 9.25006Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M9.92504 2.03733C9.97342 2.01314 10.0127 1.97391 10.0368 1.92553L10.776 0.447279C10.8681 0.263016 11.1311 0.263017 11.2232 0.447279L11.9623 1.92553C11.9865 1.97391 12.0257 2.01314 12.0741 2.03733L13.5524 2.77646C13.7366 2.86859 13.7366 3.13154 13.5524 3.22367L12.0741 3.9628C12.0257 3.98699 11.9865 4.02622 11.9623 4.0746L11.2232 5.55285C11.1311 5.73711 10.8681 5.73711 10.776 5.55285L10.0368 4.0746C10.0127 4.02622 9.97342 3.98699 9.92504 3.9628L8.44679 3.22367C8.26253 3.13154 8.26253 2.86859 8.44679 2.77646L9.92504 2.03733Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M18.925 13.0373C18.9734 13.0131 19.0127 12.9739 19.0368 12.9255L19.776 11.4473C19.8681 11.263 20.1311 11.263 20.2232 11.4473L20.9623 12.9255C20.9865 12.9739 21.0257 13.0131 21.0741 13.0373L22.5524 13.7765C22.7366 13.8686 22.7366 14.1315 22.5524 14.2237L21.0741 14.9628C21.0257 14.987 20.9865 15.0262 20.9623 15.0746L20.2232 16.5529C20.1311 16.7371 19.8681 16.7371 19.776 16.5529L19.0368 15.0746C19.0127 15.0262 18.9734 14.987 18.925 14.9628L17.4468 14.2237C17.2625 14.1315 17.2625 13.8686 17.4468 13.7765L18.925 13.0373Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M4.92504 7.03733C4.97342 7.01314 5.01265 6.97391 5.03684 6.92553L5.77597 5.44728C5.8681 5.26302 6.13105 5.26302 6.22318 5.44728L6.96231 6.92553C6.9865 6.97391 7.02573 7.01314 7.07411 7.03733L8.55236 7.77646C8.73663 7.86859 8.73663 8.13154 8.55236 8.22367L7.07411 8.9628C7.02573 8.98699 6.9865 9.02622 6.96231 9.0746L6.22318 10.5529C6.13105 10.7371 5.8681 10.7371 5.77597 10.5529L5.03684 9.0746C5.01265 9.02622 4.97342 8.98699 4.92504 8.9628L3.44679 8.22367C3.26253 8.13154 3.26253 7.86859 3.44679 7.77646L4.92504 7.03733Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Why we exist
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4">
                                        To serve as an umbrella (parent)
                                        organization for the various existing
                                        Nigerian social and cultural groups in
                                        Vietnam. Acting as a liaison between
                                        members and official representatives of
                                        the governments of Nigeria and/or the
                                        governments of Vietnam
                                    </p>
                                </li>
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <Users className="h-6 w-6 shrink-0 lg:mt-1" />
                                        Who we are
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4">
                                        The Nigerians in Diaspora Association
                                        Vietnam(NIDO Vietnam), is a non-profit
                                        and non-partisan association dedicated
                                        towards promoting friendship, awareness,
                                        knowledge and understanding, and
                                        bilateral relationship between Nigeria
                                        and Vietnam, in all areas of development
                                        and cultures.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 items-center">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 lg:mt-1"
                                        >
                                            <path
                                                d="M16 21.5L15.1429 18.5M8 21.5L8.85714 18.5M8 13V14M12 8V14M16 11V14M21 4V18H15H9H3V4H21Z"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Our aim & objectives
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4">
                                        The primary objective of the Association
                                        is to foster the economic, social and
                                        cultural development of the people of
                                        Nigeria as a whole and the society we
                                        live in and to act as a medium of
                                        providing support to the individual
                                        members.
                                    </p>
                                </li>
                            </ul>
                        </div>
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

export default Default;
