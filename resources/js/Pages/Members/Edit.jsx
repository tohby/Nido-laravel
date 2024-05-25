import React, { useEffect } from "react";
import Modal from "@/Components/Modal";
import { X } from "react-feather";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SelectInput from "@/Components/SelectInput";
import { States } from "@/Constants/states";
import toast from "react-hot-toast";

const Edit = ({ show, member, onClose }) => {
    const { errors } = usePage().props;

    const { data, setData, patch, processing, wasSuccessful } = useForm({
        fullname: member.fullname || "",
    });

    useEffect(() => {
        if (member && Object.keys(member).length > 0) {
            const updatedData = {
                ...member,
                employerOrInstitution:
                    member.occupation === "student"
                        ? member.institution
                        : member.employer,
            };
            setData(updatedData);
        }
    }, [member]);

    const submit = () => {
        patch(route("members.update", member.id), {
            onSuccess: handleSuccess,
            // onError: handleError,
        });
    };

    const handleSuccess = () => {
        onClose();
        toast.success("Updated Successfully!!!");
    };

    return (
        <Modal show={show} maxWidth="6xl">
            <div className="container">
                <div className="flex justify-between">
                    <h2 className="text-lg">
                        Edit{" "}
                        <span className="font-semibold">
                            {member.fullname}'s
                        </span>{" "}
                        mebership profile
                    </h2>
                    <SecondaryButton
                        className="border-0 shadow-none"
                        onClick={() => onClose()}
                    >
                        <X size={14} />
                    </SecondaryButton>
                </div>
                <div className="grid grid-cols-1 mt-4">
                    <div>
                        <InputLabel
                            htmlFor="fullname"
                            value="Full Name"
                            required
                        />
                        <TextInput
                            id="fullname"
                            value={data.fullname}
                            onChange={(e) =>
                                setData("fullname", e.target.value)
                            }
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="name"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.fullname}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-7 mt-4">
                    <div>
                        <InputLabel
                            htmlFor="phone"
                            value="Phone Number"
                            required
                        />
                        <TextInput
                            id="phone"
                            type="number"
                            className="mt-1 block w-full phone"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            autoComplete="phone"
                        />

                        <InputError className="mt-2" message={errors.phone} />
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Email" required />

                        <TextInput
                            id="email"
                            className="mt-1 block w-full"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            autoComplete="email"
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-7 mt-4">
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
                            onChange={(e) => setData("dob", e.target.value)}
                            className="mt-1 block w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 items-center"
                        />

                        <InputError className="mt-2" message={errors.dob} />
                    </div>
                    <div>
                        <InputLabel htmlFor="Gender" value="Gender" required />
                        <SelectInput
                            id="gender"
                            className="mt-1 block w-full"
                            value={data.gender}
                            onChange={(e) => setData("gender", e.target.value)}
                        >
                            <option value="" disabled>
                                Select your option
                            </option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </SelectInput>
                        <InputError className="mt-2" message={errors.gender} />
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
                                setData("maritalStatus", e.target.value)
                            }
                        >
                            <option value="" disabled>
                                Select your option
                            </option>
                            <option value="Married">Married</option>
                            <option value="Single">Single</option>
                            <option value="Divorced">Divorced</option>
                        </SelectInput>

                        <InputError
                            className="mt-2"
                            message={errors.maritalStatus}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-4">
                    <div>
                        <InputLabel htmlFor="name" required>
                            Address
                        </InputLabel>

                        <TextInput
                            id="address"
                            className="mt-1 block w-full"
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            autoComplete="address"
                        />

                        <InputError className="mt-2" message={errors.address} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-7 mt-4">
                    <div>
                        <InputLabel value={"State of Origin"} required />
                        <SelectInput
                            className="mt-1 block w-full"
                            value={data.stateOfOrigin}
                            onChange={(e) =>
                                setData("stateOfOrigin", e.target.value)
                            }
                        >
                            <option value="" disabled>
                                Select your option
                            </option>
                            {States.map((state) => (
                                <option value={state.name} key={state.id}>
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
                            value={"Local government area of Origin"}
                            required
                        />
                        <TextInput
                            id="lga"
                            className="mt-1 block w-full"
                            value={data.LGA}
                            onChange={(e) => setData("LGA", e.target.value)}
                        />
                        <InputError className="mt-2" message={errors.LGA} />
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-4">
                    <InputLabel value={"Level of education"} required />
                    <SelectInput
                        className="mt-1 block w-full"
                        value={data.level_of_education}
                        onChange={(e) =>
                            setData("level_of_education", e.target.value)
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
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="Doctorate Degree">
                            Doctorate Degree
                        </option>
                    </SelectInput>
                    <InputError
                        className="mt-2"
                        message={errors.level_of_education}
                    />
                </div>
                <div className="grid grid-cols-2 gap-7 mt-4">
                    <div>
                        <InputLabel value={"Occupation"} required />
                        <TextInput
                            id="occupation"
                            className="mt-1 block w-full"
                            value={data.occupation}
                            onChange={(e) =>
                                setData("occupation", e.target.value)
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
                                data.occupation &&
                                data.occupation !== "" &&
                                data.occupation.toLowerCase() === "student"
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
                                setData("employerOrInstitution", e.target.value)
                            }
                        />
                        <InputError
                            className="mt-2"
                            message={errors.employerOrInstitution}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-7 mt-4">
                    <div>
                        <InputLabel value="Next of kin in Nigeria" required />
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
                        <InputLabel value="Phone number Next of kin" required />
                        <TextInput
                            id="nextOfKinPhone"
                            type="number"
                            className="mt-1 block w-full phone"
                            value={data.nextOfKinPhone}
                            onChange={(e) =>
                                setData("nextOfKinPhone", e.target.value)
                            }
                        />
                        <InputError
                            className="mt-2"
                            message={errors.nextOfKinPhone}
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                    <SecondaryButton
                        onClick={() => onClose()}
                        disabled={processing}
                    >
                        Cancel
                    </SecondaryButton>
                    <PrimaryButton
                        className="rounded-md"
                        onClick={() => submit()}
                        disabled={processing}
                    >
                        {processing ? "Updating..." : "Save"}
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    );
};

export default Edit;
