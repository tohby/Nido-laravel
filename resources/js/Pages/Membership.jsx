import React, { Fragment } from "react";
import Guest from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

import { States } from "@/Constants/states";
import moment from "moment";
import { Link } from "@inertiajs/react";

const Membership = () => {
    const { errors } = usePage().props;
    console.log(errors);
    const { data, setData, post, processing, wasSuccessful } = useForm({
        fullname: "",
        email: "",
        phone: "",
        dob: "",
        maritalStatus: "",
        address: "",
        stateOfOrigin: "",
        nextOfKin: "",
        nextOfKinPhone: "",
        passportNumber: "",
        passportImage: "",
        occupation: "",
        employerOrInstitution: "",
        expiryDate: "",
        dateOfIssue: "",
        lga: "",
        gender: "",
        level_of_education: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("Membership.store"));
    };

    return (
        <Guest>
            <Head title="Become a member" />
            <section className="max-w-[70rem] mx-auto my-10 px-4 sm:p-6 lg:p-8 overflow-auto">
                {wasSuccessful ? (
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
                            Welcome to the Nido community! Your registration is
                            complete. Let's embark on this journey together!
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
                            Become a member
                        </h1>
                        <p className="max-w-5xl mt-5 text-base text-gray-600 text-center">
                            We're thrilled to have you join our vibrant
                            community of Nigerians in Vietnam. Kindly fill out
                            the following details. Your information will be kept
                            confidential and used solely for internal purposes.
                            Please note that this information is shared with the
                            Nigerian Embassy in Vietnam.
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
                                        htmlFor="date-of-birth"
                                        value="Date of birth"
                                        required
                                    />

                                    <TextInput
                                        type="date"
                                        aria-label="Date"
                                        value={data.dob}
                                        onChange={(e) =>
                                            setData("dob", e.target.value)
                                        }
                                        className="mt-1 block w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 items-center"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.dob}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="Gender"
                                        value="Gender"
                                        required
                                    />
                                    <SelectInput
                                        id="gender"
                                        className="mt-1 block w-full"
                                        value={data.gender}
                                        onChange={(e) =>
                                            setData("gender", e.target.value)
                                        }
                                    >
                                        <option value="" disabled>
                                            Select your option
                                        </option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </SelectInput>
                                    <InputError
                                        className="mt-2"
                                        message={errors.gender}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="marital-status"
                                        value="Marital status"
                                        required
                                    />

                                    <SelectInput
                                        id="marital-status"
                                        className="mt-1 block w-full"
                                        value={data.maritalStatus}
                                        onChange={(e) =>
                                            setData(
                                                "maritalStatus",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="" disabled>
                                            Select your option
                                        </option>
                                        <option value="Married">Married</option>
                                        <option value="Single">Single</option>
                                        <option value="Divorced">
                                            Divorced
                                        </option>
                                    </SelectInput>

                                    <InputError
                                        className="mt-2"
                                        message={errors.maritalStatus}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div>
                                    <InputLabel htmlFor="name" required>
                                        Address
                                    </InputLabel>

                                    <TextInput
                                        id="address"
                                        className="mt-1 block w-full"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                        autoComplete="address"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.address}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-7">
                                <div>
                                    <InputLabel
                                        value={"State of Origin"}
                                        required
                                    />
                                    <SelectInput
                                        className="mt-1 block w-full"
                                        value={data.stateOfOrigin}
                                        onChange={(e) =>
                                            setData(
                                                "stateOfOrigin",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="" disabled>
                                            Select your option
                                        </option>
                                        {States.map((state) => (
                                            <option
                                                value={state.name}
                                                key={state.id}
                                            >
                                                {state.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        className="mt-2"
                                        message={errors.stateOfOrigin}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        value={
                                            "Local government area of Origin"
                                        }
                                        required
                                    />
                                    <TextInput
                                        id="lga"
                                        className="mt-1 block w-full"
                                        value={data.lga}
                                        onChange={(e) =>
                                            setData("lga", e.target.value)
                                        }
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.lga}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <InputLabel
                                    value={"Level of education"}
                                    required
                                />
                                <SelectInput
                                    className="mt-1 block w-full"
                                    value={data.level_of_education}
                                    onChange={(e) =>
                                        setData(
                                            "level_of_education",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="" disabled>
                                        Select your option
                                    </option>
                                    <option value="None">None</option>
                                    <option value="High school graduate">
                                        High school
                                    </option>
                                    <option value="Bachelor's Degree">
                                        Bachelor's Degree
                                    </option>
                                    <option value="Master's Degree">
                                        Master's Degree
                                    </option>
                                    <option value="Doctorate Degree">
                                        Doctorate Degree
                                    </option>
                                </SelectInput>
                                <InputError
                                    className="mt-2"
                                    message={errors.level_of_education}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-7">
                                <div>
                                    <InputLabel value={"Occupation"} required />
                                    <TextInput
                                        id="occupation"
                                        className="mt-1 block w-full"
                                        value={data.occupation}
                                        onChange={(e) =>
                                            setData(
                                                "occupation",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.occupation}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        value={
                                            data.occupation !== "" &&
                                            data.occupation.toLowerCase() ===
                                                "student"
                                                ? "Institution"
                                                : "Employer"
                                        }
                                        required
                                    />
                                    <TextInput
                                        id="employerOrInstitution"
                                        className="mt-1 block w-full"
                                        value={data.employerOrInstitution}
                                        onChange={(e) =>
                                            setData(
                                                "employerOrInstitution",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.employerOrInstitution}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-7">
                                <div>
                                    <InputLabel
                                        value="Next of kin in Nigeria"
                                        required
                                    />
                                    <TextInput
                                        id="nextOfKin"
                                        className="mt-1 block w-full"
                                        value={data.nextOfKin}
                                        onChange={(e) =>
                                            setData("nextOfKin", e.target.value)
                                        }
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.nextOfKin}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        value="Phone number Next of kin"
                                        required
                                    />
                                    <TextInput
                                        id="nextOfKinPhone"
                                        type="number"
                                        className="mt-1 block w-full phone"
                                        value={data.nextOfKinPhone}
                                        onChange={(e) =>
                                            setData(
                                                "nextOfKinPhone",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.nextOfKinPhone}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-7">
                                <div>
                                    <InputLabel
                                        value="Passport number"
                                        required
                                    />
                                    <TextInput
                                        id="passportNumber"
                                        className="mt-1 block w-full"
                                        value={data.passportNumber}
                                        onChange={(e) =>
                                            setData(
                                                "passportNumber",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.passportNumber}
                                    />
                                </div>
                                <div>
                                    <InputLabel value="Passport" required />
                                    <TextInput
                                        type="file"
                                        className="mt-1 block w-full appearance-none bg-white border border-gray-300 rounded-md py-1 px-4 items-center"
                                        onChange={(e) =>
                                            setData(
                                                "passportImage",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.passportImage}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-7">
                                <div>
                                    <InputLabel
                                        htmlFor="date-of-issue"
                                        value="Date of issue"
                                        required
                                    />
                                    <TextInput
                                        type="date"
                                        aria-label="Date"
                                        value={data.dateOfIssue}
                                        onChange={(e) =>
                                            setData(
                                                "dateOfIssue",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 items-center"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.dateOfIssue}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="expiry-date"
                                        value="Expiry date"
                                        required
                                    />
                                    <TextInput
                                        type="date"
                                        aria-label="Date"
                                        value={data.expiryDate}
                                        onChange={(e) =>
                                            setData(
                                                "expiryDate",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 items-center"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.expiryDate}
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

export default Membership;
