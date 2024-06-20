import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SearchBox from "@/Components/SearchBox";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { Edit2, Eye, Trash } from "react-feather";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm, router } from "@inertiajs/react";
import toast from "react-hot-toast";
import { View } from "./View";
import Pagination from "@/Components/Pagination";
import Edit from "./Edit";

export default function Index({ auth, members, searchQuery, occupations }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedMemberId, setSelectedMemberId] = useState(0);
    const [memberData, setMemberData] = useState({});

    const { data, setData, get, processing } = useForm({
        search: searchQuery || "",
    });

    const handleSearch = () => {
        get(route("members"));
    };

    const handleClear = async () => {
        router.get(route("members"), { search: null }, { replace: true });
    };

    const handleConfirmation = (id) => {
        setSelectedMemberId(id);
        setShowDeleteModal(true);
    };

    const handleSuccess = () => {
        closeModal();
        toast.success("Successfully deleted");
    };

    const deleteMember = () => {
        router.delete(`/members/${selectedMemberId}`, {
            onSuccess: handleSuccess,
        });
    };

    const handleView = (member) => {
        setMemberData(member);
        setShowViewModal(true);
    };

    const handleEdit = (member) => {
        setMemberData(member);
        setShowEditModal(true);
    };

    const closeModal = () => {
        setSelectedMemberId(0);
        setShowDeleteModal(false);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Members
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex">
                        <div className="w-96">
                            <SearchBox
                                value={data.search}
                                onChange={(searchText) =>
                                    setData("search", searchText)
                                }
                                onSearch={handleSearch}
                                onClear={handleClear}
                            />
                        </div>
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
                                        {members.data.map((member, index) => (
                                            <tr
                                                className="bg-white dark:bg-gray-800"
                                                key={index}
                                            >
                                                <td className="px-2 py-4">
                                                    <div className="flex gap-1">
                                                        {auth.user.role ===
                                                            0 && (
                                                            <SecondaryButton
                                                                className="focus:ring-0 border-0 px-2 !shadow-none"
                                                                onClick={() =>
                                                                    handleEdit(
                                                                        member,
                                                                    )
                                                                }
                                                            >
                                                                <Edit2
                                                                    size={16}
                                                                />
                                                            </SecondaryButton>
                                                        )}

                                                        <SecondaryButton
                                                            className="focus:ring-0 border-0 px-2 !shadow-none"
                                                            onClick={() =>
                                                                handleView(
                                                                    member,
                                                                )
                                                            }
                                                        >
                                                            <Eye size={16} />
                                                        </SecondaryButton>
                                                        <SecondaryButton
                                                            className="focus:ring-0 border-0 px-2 !shadow-none"
                                                            onClick={() =>
                                                                handleConfirmation(
                                                                    member.id,
                                                                )
                                                            }
                                                        >
                                                            <Trash
                                                                size={16}
                                                                color="red"
                                                            />
                                                        </SecondaryButton>
                                                    </div>
                                                </td>
                                                <th
                                                    scope="row"
                                                    className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {member.fullname}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {
                                                        member.passports[0]
                                                            ?.number
                                                    }
                                                </td>
                                                <td className="px-6 py-4">
                                                    {member.phone}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {member.email}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination
                                    class="mt-6"
                                    links={members.links}
                                />
                                <Modal show={showDeleteModal}>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Are you sure you want to delete this
                                        member?
                                    </h2>
                                    <p className="mt-1 text-sm text-gray-600">
                                        This cannot be undone. All information
                                        assiciated with this member will be
                                        removed.
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
                                            disabled={processing}
                                            onClick={deleteMember}
                                        >
                                            Delete Account
                                        </DangerButton>
                                    </div>
                                </Modal>
                                {memberData && (
                                    <View
                                        show={showViewModal}
                                        setShowViewModal={setShowViewModal}
                                        memberData={memberData}
                                    />
                                )}

                                <Edit
                                    show={
                                        memberData !== undefined &&
                                        showEditModal
                                    }
                                    onClose={() => setShowEditModal(false)}
                                    member={memberData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
