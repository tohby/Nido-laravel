import Modal from "@/Components/Modal";
import React, { useEffect, useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import { X } from "react-feather";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

const New = ({ show, close, item }) => {
    const { errors } = usePage().props;
    const { data, setData, post, processing, wasSuccessful } = useForm({
        name: "",
        desc: "",
        location: "",
        url: "",
        instagram: "",
        facebook: "",
        img: "",
    });
    const [logo, setLogo] = useState(item.img);

    const submit = () => {
        post(route("directory.store"), {
            onSuccess: handleSuccess,
        });
    };

    const update = () => {
        console.log({ data });
        post(route("directory.update", data.id), {
            _method: "patch",
            onSuccess: handleSuccess,
        });
    };

    const handleSuccess = () => {
        toast.success(
            `Directory ${data.id ? "updated" : "added"} successfully!`,
        );
        close();
    };

    const handleRemoveImage = () => {
        setLogo(null); // Set logo state to null when removing image
        setData("logo", ""); // Also update form state to null
    };

    useEffect(() => {
        setData({ ...item });
        setLogo(item.img);
    }, [item]);
    return (
        <Modal show={show}>
            <div className="flex justify-between">
                <h2 className="text-xl">Add Directory</h2>
                <SecondaryButton
                    className="bg-transparent border-none !shadow-none"
                    onClick={close}
                >
                    <X size={14} />
                </SecondaryButton>
            </div>

            <form className="container mt-4">
                <div className="grid grid-cols-1">
                    <InputLabel htmlFor="name" value="Name" required />
                    <TextInput
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="grid grid-cols-1 mt-4">
                    <InputLabel
                        htmlFor="Description"
                        value="Description"
                        required
                    />
                    <TextArea
                        value={data.desc}
                        rows="3"
                        onChange={(e) => setData("desc", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.desc} />
                </div>
                <div className="grid grid-cols-1 mt-4">
                    <InputLabel htmlFor="location" value="Location" required />
                    <TextInput
                        value={data.location}
                        onChange={(e) => setData("location", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.location} />
                </div>
                <div className="grid mt-4">
                    <InputLabel htmlFor="url" value="URL" />
                    <TextInput
                        className="mt-1 w-full"
                        value={data.url}
                        onChange={(e) => setData("url", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.url} />
                </div>
                <div className="grid mt-4">
                    <InputLabel htmlFor="Instagram" value="Instagram" />
                    <TextInput
                        className="mt-1 w-full"
                        value={data.instagram}
                        onChange={(e) => setData("instagram", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.instagram} />
                </div>
                <div className="grid mt-4">
                    <InputLabel htmlFor="facebook" value="Facebook" />
                    <TextInput
                        className="mt-1 w-full"
                        value={data.facebook}
                        onChange={(e) => setData("facebook", e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.facebook} />
                </div>
                <div className="grid mt-4">
                    <InputLabel htmlFor="logo" value="Logo" required />

                    {logo ? (
                        <div className="flex items-center gap-8">
                            <img
                                src={`storage/directories/${item.img}`}
                                className="mt-2 w-56 object-cover"
                            />
                            <span
                                className="cursor-pointer text-red-500"
                                onClick={() => handleRemoveImage()}
                            >
                                Remove
                            </span>
                        </div>
                    ) : (
                        <TextInput
                            type="file"
                            onChange={(e) => setData("img", e.target.files[0])}
                            className="mt-1 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-400 file:border-0 file:me-4 file:py-3 file:px-4 cursor-pointer focus:outline-none"
                        />
                    )}
                    <InputError className="mt-2" message={errors.img} />
                </div>
            </form>
            <div className="flex justify-end gap-4 mt-8">
                <SecondaryButton onClick={close}>Cancel</SecondaryButton>
                <PrimaryButton
                    className="rounded-lg"
                    onClick={() => (data.id ? update() : submit())}
                >
                    {data.id ? "Update" : "Submit"}
                </PrimaryButton>
            </div>
        </Modal>
    );
};

export default New;
