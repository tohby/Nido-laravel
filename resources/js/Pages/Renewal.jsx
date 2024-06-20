import React, { Fragment } from "react";
import Guest from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

import { Link } from "@inertiajs/react";

const PassportRenewal = ({ passport_settings }) => {
    const { errors } = usePage().props;
    const { data, setData, post, processing, wasSuccessful } = useForm({
        fullname: "",
        email: "",
        phone: "",
        passportNo: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("passports.store"));
    };

    return (
        <Guest>
            <Head title="Passport Renewal" />
            <section className="max-w-[70rem] mx-auto my-10 px-4 sm:p-6 lg:p-8 overflow-auto">
                {!passport_settings.value ? (
                    <div className=""></div>
                ) : wasSuccessful ? (
                    <div className="flex flex-col items-center justify-center">
                        <Transition
                            as={Fragment}
                            show={wasSuccessful}
                            enter="transform transition duration-[400ms]"
                            enterFrom="opacity-0 rotate-[-120deg] scale-50"
                            enterTo="opacity-100 rotate-0 scale-100"
                            leave="transform duration-200 transition ease-in-out"
                            leaveFrom="opacity-100 rotate-0 scale-100 "
                            leaveTo="opacity-0 scale-95 "
                        >
                            <img
                                src="/Success Icon.svg"
                                className="w-48 mx-auto"
                                alt="Success"
                            />
                        </Transition>

                        <h1 className="mt-6 w-2/3 text-center text-2xl">
                            Congratulations!
                            <br />
                            Your application was successful, our representative
                            will be in contact with you shortly!
                        </h1>

                        <Link
                            href={route("welcome")}
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-lg px-4 py-2.5 my-8 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Go back home
                        </Link>
                    </div>
                ) : (
                    <>
                        <h1 className="text-5xl font-medium text-gray-700 text-center">
                            Passport Renewal
                        </h1>
                        <p className="max-w-5xl mt-5 text-base text-gray-600 text-center">
                            Stay informed about upcoming passport renewal
                            opportunities! Sign up now to receive updates,
                            priority processing, and timely notifications. Fill
                            out the form below to express your interest and
                            ensure a smooth renewal process.
                        </p>
                        <form
                            onSubmit={submit}
                            className="mt-6 space-y-6 max-w-5xl"
                        >
                            <div>
                                <InputLabel htmlFor="name" required>
                                    Fullname
                                    <span className="ml-2 text-sm text-gray-400">
                                        (as it appears on passport)
                                    </span>
                                </InputLabel>

                                <TextInput
                                    id="fullname"
                                    className="mt-1 block w-full"
                                    value={data.fullname}
                                    onChange={(e) =>
                                        setData("fullname", e.target.value)
                                    }
                                    isFocused
                                    autoComplete="name"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.fullname}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-7 mb-3">
                                <div>
                                    <InputLabel
                                        htmlFor="phone"
                                        value="Phone number"
                                        required
                                    />

                                    <TextInput
                                        id="phone"
                                        type="number"
                                        className="mt-1 block w-full phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        autoComplete="phone"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.phone}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email"
                                        required
                                    />

                                    <TextInput
                                        id="email"
                                        className="mt-1 block w-full"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        autoComplete="email"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.email}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-7 mb-3">
                                <div>
                                    <InputLabel
                                        htmlFor="passportNo"
                                        value="Passport Number"
                                        required
                                    />

                                    <TextInput
                                        id="passportNo"
                                        className="mt-1 block w-full"
                                        type="text"
                                        value={data.passportNo}
                                        onChange={(e) =>
                                            setData(
                                                "passportNo",
                                                e.target.value,
                                            )
                                        }
                                        autoComplete="passportNo"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.passportNo}
                                    />
                                </div>
                            </div>

                            <div className="flex float-end">
                                <PrimaryButton className="bg-green-700">
                                    Submit
                                </PrimaryButton>
                            </div>
                        </form>
                    </>
                )}
            </section>
        </Guest>
    );
};

export default PassportRenewal;
