import React, { useState } from "react";
import { Trash } from "react-feather";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { router } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

const Passports = ({ passports, onClose }) => {
    const [deletingID, setDeletingId] = useState(0);
    const handleDelete = () => {
        if (passports.length === 1) {
            toast.error(
                "You cannot delete the last passport. Please add a new passport before deleting!"
            );
        } else {
            router.delete(`/passport/${deletingID}`, {
                preserveScroll: true,
                onSuccess: handleDeleted,
            });
        }
    };

    const handleDeleted = () => {
        toast.success("Passport successfully removed");
        onClose();
    };
    return (
        <div>
            <h2 className="text-xl font-normal">Passports</h2>
            <div className="text-gray-900 border border-gray-200 rounded-lg my-6">
                <table class="w-full text-sm text-left rtl:text-right">
                    <thead class="text-xs uppercase border-b border-gray-200">
                        <tr>
                            <th scope="col" class="px-6 py-3"></th>
                            <th scope="col" class="px-6 py-3"></th>
                            <th scope="col" class="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date of Issue
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Expiry Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {passports.map((passport, index) => (
                            <tr
                                className={
                                    passports.length === index + 1
                                        ? ``
                                        : "border-b border-gray-200"
                                }
                                key={index}
                            >
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium whitespace-nowrap"
                                >
                                    <div
                                        className="flex gap-2 items-center cursor-pointer text-red-600"
                                        onClick={() =>
                                            setDeletingId(passport.id)
                                        }
                                    >
                                        Delete <Trash size={14} />
                                    </div>
                                </th>
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium whitespace-nowrap"
                                >
                                    <PhotoProvider>
                                        <div className="foo">
                                            <PhotoView
                                                key={index}
                                                src={`/storage/passports/${passport.image}`}
                                            >
                                                <div className="cursor-pointer hover:text-blue-700">
                                                    View Image
                                                </div>
                                            </PhotoView>
                                        </div>
                                    </PhotoProvider>
                                </th>
                                <td class="px-6 py-4">{passport.number}</td>
                                <td class="px-6 py-4">
                                    {passport.date_of_issue}
                                </td>
                                <td class="px-6 py-4">
                                    {passport.expiry_date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={deletingID !== 0} onClose={() => setDeletingId(0)}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete this passport?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once it is deleted, all of its resources and data will
                        be permanently deleted and cannot be later retreived.
                    </p>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={() => setDeletingId(0)}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            className="ms-3"
                            disabled={false}
                            onClick={() => handleDelete()}
                        >
                            Delete Passport
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Passports;
