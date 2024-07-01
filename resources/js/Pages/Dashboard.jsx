import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Users } from "@/Assets/icons/Users";
import { FolderOpen } from "@/Assets/icons/FolderOpen";
import { Document } from "@/Assets/icons/Document";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { ArrowRight, Edit2, Eye, Trash } from "react-feather";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm, router } from "@inertiajs/react";
import { View } from "./Members/View";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard({
    auth,
    membersCount,
    directoriesCount,
    latestMembers,
    statistics,
}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedMemberId, setSelectedMemberId] = useState(0);
    const [memberData, setMemberData] = useState({});

    console.log(statistics);

    const pieData = {
        labels: statistics.labels,
        datasets: [
            {
                label: "Occupations",
                data: statistics.data,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                ],
                // spacing: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    const closeModal = () => {
        setSelectedMemberId(0);
        setShowDeleteModal(false);
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

    const handleConfirmation = (id) => {
        setSelectedMemberId(id);
        setShowDeleteModal(true);
    };

    const { data, setData, get, processing, reset, errors } = useForm({});
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-5">
                        <h5 className="text-2xl font-medium">
                            Hello {auth.user.name.split(" ")[0]},
                        </h5>
                        <p className="text-gray-500">
                            Ready to conquer challenges with your dashboard
                            tools?
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 relative">
                            <h5 className="text-gray-900 text-xl font-normal mb-4">
                                Members
                            </h5>
                            <h2 className="text-4xl font-medium">
                                {membersCount}
                            </h2>
                            <Users
                                className="absolute -bottom-6 right-0 mr-4"
                                size={80}
                                color="#15803D"
                            />
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 relative">
                            <h5 className="text-gray-900 text-xl font-normal mb-4">
                                Directories
                            </h5>
                            <h2 className="text-4xl font-medium">
                                {directoriesCount}
                            </h2>
                            <FolderOpen
                                className="absolute -bottom-5 right-0 mr-4"
                                size={80}
                                color="#15803D"
                            />
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 relative">
                            <h5 className="text-gray-900 text-xl font-normal mb-4">
                                Passport Registration
                            </h5>
                            <h2 className="text-4xl font-medium">0</h2>
                            <Document
                                className="absolute -bottom-5 right-0 mr-4"
                                size={80}
                                color="#15803D"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg col-span-3 md:col-span-2">
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
                                            {latestMembers.map(
                                                (member, index) => (
                                                    <tr
                                                        className="bg-white dark:bg-gray-800"
                                                        key={index}
                                                    >
                                                        <td className="px-2 py-4">
                                                            <div className="flex gap-3">
                                                                <SecondaryButton
                                                                    className="focus:ring-0 border-0 px-2 hidden"
                                                                    onClick={() =>
                                                                        toast(
                                                                            "Hello World",
                                                                        )
                                                                    }
                                                                >
                                                                    <Edit2
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                </SecondaryButton>
                                                                <SecondaryButton
                                                                    className="focus:ring-0 border-0 px-2"
                                                                    onClick={() =>
                                                                        handleView(
                                                                            member,
                                                                        )
                                                                    }
                                                                >
                                                                    <Eye
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                </SecondaryButton>
                                                                <SecondaryButton
                                                                    className="focus:ring-0 border-0 px-2"
                                                                    onClick={() =>
                                                                        handleConfirmation(
                                                                            member.id,
                                                                        )
                                                                    }
                                                                >
                                                                    <Trash
                                                                        size={
                                                                            16
                                                                        }
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
                                                                member
                                                                    .passports[0]
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
                                                ),
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="flex justify-end w-full">
                                        <Link
                                            href={route("members")}
                                            className="flex align-middle text-gray-600 hover:text-gray-900"
                                        >
                                            See all{" "}
                                            <ArrowRight
                                                className="ml-2 mt-1"
                                                size={16}
                                            />
                                        </Link>
                                    </div>
                                    <Modal show={showDeleteModal}>
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Are you sure you want to delete this
                                            member?
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-600">
                                            This cannot be undone. All
                                            information assiciated with this
                                            member will be removed.
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
                                </div>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            {/* <h4 className="text-xl mb-4">Occupations</h4> */}
                            <Doughnut data={pieData} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
