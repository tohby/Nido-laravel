import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import New from "./New";
import {
    Edit2,
    Facebook,
    Instagram,
    Link2,
    MapPin,
    Trash,
} from "react-feather";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import { Head, router } from "@inertiajs/react";
import toast from "react-hot-toast";

const Index = ({ auth, directories }) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editItem, setEditItem] = useState({});
    const [deleteItem, setDeleteItem] = useState(0);

    const handleEdit = (directory) => {
        setEditItem(directory);
        setShowAddModal(true);
    };

    const handleDeleteClick = (id) => {
        setDeleteItem(id);
        setShowDeleteModal(true);
    };

    const handleDelete = () => {
        router.delete(`/directories/${deleteItem}`, {
            onSuccess: handleSuccess,
        });
    };

    const handleSuccess = () => {
        toast.success("Deleted successfully");
        setShowDeleteModal(false);
        setDeleteItem(0);
    };

    const closeModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Directories
                    </h2>
                    <PrimaryButton
                        className="rounded-lg"
                        onClick={() => setShowAddModal(true)}
                    >
                        Add Directory
                    </PrimaryButton>
                </div>
            }
        >
            <Head title="Directories" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ul className="mt-10">
                        {directories.map((directory, index) => (
                            <li key={index}>
                                <hr className="w-full border-t border-zinc-950/10" />
                                <div className="flex items-center justify-center gap-5">
                                    <div className="flex gap-6 py-6">
                                        <div className="w-40 shrink-0">
                                            <img
                                                src={`storage/directories/${directory.img}`}
                                                alt={`${directory.name} image`}
                                                className="aspect-[3/2] rounded-lg p-1"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="text-base/6">
                                                {directory.name}
                                            </div>
                                            <div className="text-xs/6 text-zinc-600">
                                                {directory.desc}
                                            </div>
                                            <div className="text-xs/6 text-zinc-600 flex gap-6">
                                                {directory.facebook && (
                                                    <a
                                                        href={
                                                            directory.facebook
                                                        }
                                                        target="_blank"
                                                        className="cursor-pointer"
                                                    >
                                                        <Facebook size={18} />
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
                                                        <Instagram size={18} />
                                                    </a>
                                                )}
                                                {directory.url && (
                                                    <a
                                                        href={directory.url}
                                                        target="_blank"
                                                        className="cursor-pointer"
                                                    >
                                                        <Link2 size={18} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-5">
                                        <SecondaryButton
                                            onClick={() =>
                                                handleEdit(directory)
                                            }
                                        >
                                            <Edit2 size={14} />
                                        </SecondaryButton>
                                        <DangerButton
                                            onClick={() =>
                                                handleDeleteClick(directory.id)
                                            }
                                        >
                                            <Trash size={14} />
                                        </DangerButton>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* <Pagination
                                    class="mt-6"
                                    links={members.links}
                                /> */}
                    <Modal show={showDeleteModal}>
                        <h2 className="text-lg font-medium text-gray-900">
                            Are you sure you want to delete this directory?
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            This cannot be undone. All information assiciated
                            with this dtirectory will be removed.
                        </p>
                        <div className="mt-6 flex justify-end">
                            <SecondaryButton
                                className="focus:ring-0"
                                onClick={closeModal}
                            >
                                Cancel
                            </SecondaryButton>

                            <DangerButton
                                className="ms-3"
                                // disabled={processing}
                                onClick={handleDelete}
                            >
                                Delete Directory
                            </DangerButton>
                        </div>
                    </Modal>
                </div>
            </div>
            <New
                show={showAddModal}
                close={() => {
                    setShowAddModal(false), setEditItem({});
                }}
                item={editItem}
                maxWidth="6xl"
            />
        </AuthenticatedLayout>
    );
};

export default Index;
