import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Switch } from "@headlessui/react";
import SearchBox from "@/Components/SearchBox";
import { Head, useForm, router } from "@inertiajs/react";

const Index = ({ auth, passport_settings }) => {
    console.log(passport_settings);
    const [enabled, setEnabled] = useState(passport_settings.value);

    const handlePassportSettings = () => {
        // router.patch(route('passports.update', ), )
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
                                onChange={() => handlePassportSettings}
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
                    <SearchBox
                        // value={data.search}
                        // onChange={(searchText) => setData("search", searchText)}
                        // onSearch={handleSearch}
                        // onClear={handleClear}
                        placeholder={"Search..."}
                    />
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            ></th>
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
                                        <tr className="bg-white dark:bg-gray-800">
                                            <td className="px-2 py-4">
                                                <div className="flex gap-1"></div>
                                            </td>
                                            <th
                                                scope="row"
                                                className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            ></th>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                            <td className="px-6 py-4"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
