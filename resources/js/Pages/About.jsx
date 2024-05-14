import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { faqs } from "@/Constants/faqs";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUp, Users } from "react-feather";


const About = () => {
    return (
        <Guest>
            <Head title="About us" />
            <header>
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-6 flex flex-col items-center py-12 md:py-18">
                    <div className="flex flex-col items-center text-center lg:max-w-[66.67%]">
                        <h1 className="headline mb-4 whitespace-pre-wrap text-balance text-black theme-tech:text-white lg:mb-8">
                            About NIDO
                        </h1>
                        {/* <p className="body-m md:body-l lg:title-s max-w-xl whitespace-pre-wrap text-pretty text-gray-300">
                            Who we are
                        </p> */}
                    </div>
                    <div className="relative mt-12 aspect-[3/4] w-full md:aspect-[16/7]">
                        <figure className="relative h-full w-full overflow-hidden rounded-3xl bg-gray-200 [transform:translateZ(0)]">
                            <img
                                alt="Nido"
                                fetchpriority="high"
                                decoding="async"
                                data-nimg="fill"
                                className="block h-auto w-full object-cover"
                                sizes="95vw"
                                src="/Nido-12.jpg"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: 0,
                                    objectPosition: "72.2114% 50.2778%",
                                    color: "transparent",
                                }}
                            />

                        </figure>
                    </div>
                </div>
            </header>
            <section
                className="theme-product relative bg-white py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
                style={{ zIndex: 6 }}
            >
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                        <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                            <h2 className="text-5xl text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                                Intuitive and authentic conversations{" "}
                            </h2>
                            <p className="body-m mt-2 text-pretty pr-4 text-gray-500 md:max-w-[90%] md:pr-0 lg:mt-6">
                                The Nigerians in Diaspora Organisation Vietnam is the Vietnamese arm of a global Nigerian Diaspora network. Established in the year 2000 and registered in England and Wales in 2002 under the Companies Act, the organization’s Headquarters is in London.

                                NIDO VN provides an umbrella to all Nigerians in Vietnam. In concert with the other continental arms of NIDO in the Americas, Asia and Africa, the organization is the largest assembly of Nigerians worldwide.

                                The Government of Nigeria recognizes the organization as an official platform through which individual Nigerian Diaspora, their Community Organizations, and Corporate Bodies can channel their developmental efforts to Nigeria. In this sense, the organization partners with Nigerian Community / Professional Organizations as well as public and private businesses in focused areas such as Foreign Direct Investment (FDI), professional networking, stakeholder advocacy, medical missions, educational support and skills transfer to Nigeria.
                            </p>
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
                                                        className={`${open
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
