import React from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, useForm, usePage, router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import toast from "react-hot-toast";

const AddPassports = ({ memberId, onCancel, onClose }) => {
    const { errors } = usePage().props;
    const { data, setData, post, processing, wasSuccessful } = useForm({
        passportNumber: "",
        expiryDate: "",
        dateOfIssue: "",
        passportImage: "",
    });

    const handleSubmit = () => {
        post(route("passport.store", memberId), {
            onSuccess: handleSaveSuccess,
        });
    };

    const handleSaveSuccess = () => {
        toast.success("New passport added successfully!");
        onCancel();
        onClose();
        // router.reload({ only: ["members"] });
    };
    return (
        <div>
            <Head title="Add Passport" />
            <h2 className="mb-4 font-normal text-xl">Add New Passport</h2>
            <div className="grid mb-8">
                <div className="grid-cols-1">
                    <InputLabel value="Passport number" required />
                    <TextInput
                        id="passportNumber"
                        className="mt-1 block w-full"
                        value={data.passportNumber}
                        onChange={(e) =>
                            setData("passportNumber", e.target.value)
                        }
                    />
                    <InputError
                        className="mt-2"
                        message={errors.passportNumber}
                    />
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4">
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
                                setData("dateOfIssue", e.target.value)
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
                                setData("expiryDate", e.target.value)
                            }
                            className="mt-1 block w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 items-center"
                        />

                        <InputError
                            className="mt-2"
                            message={errors.expiryDate}
                        />
                    </div>
                </div>
                <div className="grid grid-col-2 mt-4">
                    <div>
                        <InputLabel value="Passport" required />
                        <TextInput
                            type="file"
                            className="mt-1 block w-full appearance-none bg-white border border-gray-300 rounded-md py-1 px-4 items-center"
                            onChange={(e) =>
                                setData("passportImage", e.target.files[0])
                            }
                        />
                        <InputError
                            className="mt-2"
                            message={errors.passportImage}
                        />
                    </div>
                </div>
                <div className="flex gap-4 justify-end mt-8">
                    <PrimaryButton
                        className="rounded-lg"
                        onClick={handleSubmit}
                    >
                        Submit
                    </PrimaryButton>
                    <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
                </div>
            </div>
        </div>
    );
};

export default AddPassports;
