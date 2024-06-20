import React, { useState, Fragment, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Switch } from "@headlessui/react";
import SearchBox from "@/Components/SearchBox";
import { Head, useForm, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown, Check } from "react-feather";

const Index = ({
    auth,
    passport_settings,
    registrations,
    searchQuery,
    batches,
    currentBatch,
}) => {
    const [enabled, setEnabled] = useState(passport_settings.value);

    const { data, setData, get, processing } = useForm({
        search: searchQuery || "",
        batch: "",
    });
    const [selected, setSelected] = useState(currentBatch);

    const handleSearch = () => {
        get(route("passports.index"));
    };

    const handleClear = async () => {
        router.get(
            route("passports.index"),
            { search: null },
            { replace: true },
        );
    };

    const handleChange = (value) => {
        router.get(route("passports.index"), {
            batch: value,
            search: searchQuery,
        });
    };

    const handlePassportSettings = (value) => {
        router.patch(
            route("settings.update", passport_settings.id),
            {
                value: value,
            },
            {
                onSuccess: setEnabled(value),
            },
        );
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Passport renewals
                    </h2>
                    <Switch.Group>
                        <div className="flex items-center">
                            <Switch.Label className="mr-4">
                                Enable passport renewals
                            </Switch.Label>
                            <Switch
                                checked={enabled}
                                onChange={(value) =>
                                    handlePassportSettings(value)
                                }
                                className={`${
                                    enabled ? "bg-green-800" : "bg-gray-200"
                                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                            >
                                <span
                                    className={`${
                                        enabled
                                            ? "translate-x-6"
                                            : "translate-x-1"
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                                />
                            </Switch>
                        </div>
                    </Switch.Group>
                </div>
            }
        >
            <Head title="Passport renewal registrations" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex gap-3">
                        <div className="w-96">
                            <SearchBox
                                value={data.search}
                                onChange={(searchText) =>
                                    setData("search", searchText)
                                }
                                onSearch={handleSearch}
                                onClear={handleClear}
                                placeholder={"Search..."}
                            />
                        </div>
                        <Listbox
                            value={selected}
                            onChange={handleChange}
                            className="h-full"
                        >
                            <div className="relative z-10">
                                <Listbox.Button className="relative h-full w-40 cursor-default rounded-lg bg-white py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-green-800 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 sm:text-sm">
                                    <span className="block truncate">
                                        {selected}
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronDown
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute mt-1 max-h-94 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {batches.map((batch, index) => (
                                            <Listbox.Option
                                                key={index}
                                                className={({ active }) =>
                                                    `relative cursor-pointer select-none pl-10 py-2 pr-4 ${
                                                        active
                                                            ? "bg-green-100 text-gray-900"
                                                            : "text-gray-900"
                                                    }`
                                                }
                                                value={batch}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {batch}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                                                <Check
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Full name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Passport No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Phone No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Email
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {registrations.data.map(
                                            (user, index) => (
                                                <tr
                                                    className="bg-white dark:bg-gray-800"
                                                    key={index}
                                                >
                                                    <td className="px-2 py-4">
                                                        <div className="flex gap-1">
                                                            {user.fullname}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.passportNo}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.phone}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.email}
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                    </tbody>
                                </table>
                                <Pagination
                                    class="mt-6"
                                    links={registrations.links}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
