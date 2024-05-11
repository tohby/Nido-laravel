import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "react-feather";

const Drawer = ({ isOpen, children, dismiss, title }) => {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 overflow-hidden left-0"
                onClose={dismiss}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* <div className="flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                    <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none"
                        onClick={dismiss}
                    >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <X />
                    </button>
                </div> */}

                <div className="pointer-events-auto relative w-screen max-w-[80%] h-screen border-l bg-white shadow-xl rounded-tl-2xl rounded-bl-2xls">
                    <div className="flex overflow-y-auto max-h-full flex-col bg-white py-8">
                        <div className="container mx-auto max-w-7xl">
                            {title && (
                                <div className="px-6 sm:px-8">
                                    <Dialog.Title className="text-2xl font-semibold leading-6 text-gray-900">
                                        {title}
                                    </Dialog.Title>
                                </div>
                            )}
                            <div className="relative mt-6 flex-1 px-6 sm:px-8">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Drawer;
