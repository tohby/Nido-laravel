import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { Facebook, Link2, Instagram } from "react-feather";
import Pagination from "@/Components/Pagination";

const About = ({ directories }) => {
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
                            Explore the vibrant community of Nigerian
                            entrepreneurs making their mark in Vietnam.
                        </p>
                    </div>
                </div>
            </header>
            <section id="directories">
                <div className="container p-4 mx-auto max-w-7xl">
                    <ul className="mt-3">
                        {directories.data.map((directory, index) => (
                            <li key={index}>
                                <hr className="w-full border-t border-zinc-950/10" />
                                <div className="flex items-center justify-start gap-5">
                                    <div className="flex gap-20 py-6">
                                        <div className="w-60 shrink-0">
                                            <img
                                                src={`/storage/directories/${directory.img}`}
                                                alt={`${directory.name} image`}
                                                className="rounded-lg p-1"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="text-3xl">
                                                {directory.name}
                                            </div>
                                            <div className="text-xl text-zinc-600">
                                                {directory.desc}
                                            </div>
                                            <div className="text-sm text-zinc-600 flex gap-6 !mt-4">
                                                {directory.facebook && (
                                                    <a
                                                        href={
                                                            directory.facebook
                                                        }
                                                        target="_blank"
                                                        className="cursor-pointer"
                                                    >
                                                        <Facebook size={20} />
                                                    </a>
                                                )}
                                                {directory.instagram && (
                                                    <a
                                                        href={
                                                            directory.instagram
                                                        }
                                                        target="_blank"
                                                        className="cursor-pointer"
                                                    >
                                                        <Instagram size={20} />
                                                    </a>
                                                )}
                                                {directory.url && (
                                                    <a
                                                        href={directory.url}
                                                        target="_blank"
                                                        className="cursor-pointer"
                                                    >
                                                        <Link2 size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mx-auto">
                        <Pagination class="mt-6" links={directories.links} />
                    </div>
                </div>
            </section>
        </Guest>
    );
};

export default About;
