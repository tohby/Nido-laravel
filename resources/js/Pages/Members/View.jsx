import React, { useRef, useState } from "react";
import Modal from "@/Components/Modal";
import moment from "moment";
import SecondaryButton from "@/Components/SecondaryButton";
import { Hash, Mail, Calendar, Phone, Home, Users } from "react-feather";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Passports from "./Passports";
import AddPassports from "./AddPassports";

export const View = ({ show, setShowViewModal, memberData }) => {
    const reportTemplateRef = useRef(null);
    const [showPassports, setShowPassports] = useState(false);
    const [showAddPassports, setShowAddPassports] = useState(false);

    const downloadPDF = () => {
        html2canvas(document.querySelector("#memberDetail")).then((canvas) => {
            const imageData = canvas.toDataURL("image/png", 1.0);
            const pdf = new jsPDF("p", "px", [canvas.width, canvas.height]);
            pdf.addImage(imageData, "PNG", 50, 50);
            pdf.save(
                `${memberData.fullname} - ${memberData?.passports[0]?.number}`,
            );
        });
    };

    const handleCloseModal = () => {
        setShowViewModal(false);
        setShowPassports(false);
    };

    return (
        <div>
            <Modal show={show} maxWidth="6xl">
                <div
                    className="container min-h-[45rem]"
                    ref={reportTemplateRef}
                >
                    {showAddPassports ? (
                        <AddPassports
                            memberId={memberData.id}
                            onCancel={() => setShowAddPassports(false)}
                            onClose={() => setShowViewModal(false)}
                        />
                    ) : showPassports ? (
                        <Passports
                            passports={memberData.passports}
                            onClose={() => setShowViewModal(false)}
                        />
                    ) : (
                        <div className="grid grid-cols-2" id="memberDetail">
                            <div>
                                {memberData && memberData.passports && (
                                    <img
                                        src={`/storage/passports/${memberData?.passports[0]?.image}`}
                                        alt="profile"
                                        className="max-w-md max-h-[42rem] object-cover rounded-lg border-green-800 border-2"
                                    />
                                )}
                            </div>
                            <div className="">
                                <div className="flex flex-col text-gray-500 mb-2">
                                    <label className="mb-1 text-sm">
                                        Fullname:
                                    </label>
                                    <span className="text-gray-800 text-lg">
                                        {memberData.fullname}
                                    </span>
                                </div>
                                <div className="flex flex-col text-gray-500 mb-2">
                                    <label className="mb-1 text-sm">
                                        Passport number:
                                    </label>
                                    <div className="flex items-center text-gray-800 text-lg">
                                        <Hash
                                            className="text-gray-500"
                                            size={16}
                                        />
                                        <span className="ml-1">
                                            {memberData &&
                                                memberData.passports &&
                                                memberData?.passports[0]
                                                    ?.number}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-7">
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Date of issue:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <Calendar
                                                className="text-gray-500"
                                                size={16}
                                            />
                                            <span className="ml-1">
                                                {memberData &&
                                                    memberData.passports &&
                                                    memberData.passports[0]
                                                        ?.date_of_issue}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Date of Expiry:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <Calendar
                                                className="text-gray-500"
                                                size={16}
                                            />
                                            <span className="ml-1">
                                                {memberData &&
                                                    memberData.passports &&
                                                    memberData.passports[0]
                                                        ?.expiry_date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Email:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <Mail
                                                className="text-gray-500"
                                                size={16}
                                            />
                                            <span className="ml-1">
                                                {memberData.email}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Phone:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <Phone
                                                className="text-gray-500"
                                                size={16}
                                            />
                                            <span className="ml-1">
                                                {memberData.phone}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Date of birth:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <Calendar
                                                className="text-gray-500"
                                                size={16}
                                            />
                                            <span className="ml-1">
                                                {moment(memberData.dob).format(
                                                    "LL",
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Gender:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <span className="ml-1">
                                                {memberData.gender}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col text-gray-500 mb-2">
                                    <label className="mb-1 text-sm">
                                        Address:
                                    </label>
                                    <div className="flex items-center text-gray-800 text-lg">
                                        <Home
                                            className="text-gray-500"
                                            size={16}
                                        />
                                        <span className="ml-1">
                                            {memberData.address}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col text-gray-500 mb-2">
                                    <label className="mb-1 text-sm">
                                        Marital status:
                                    </label>
                                    <div className="flex items-center text-gray-800 text-lg">
                                        <Users
                                            className="text-gray-500"
                                            size={16}
                                        />
                                        <span className="ml-1">
                                            {memberData.maritalStatus}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            State of origin:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <span className="ml-1">
                                                {memberData.stateOfOrigin}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Local Government of origin:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <span className="ml-1">
                                                {memberData.LGA}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Next of kin:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <span className="ml-1">
                                                {memberData.nextOfKin}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Next of kin's phone number:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <span className="ml-1">
                                                {memberData.nextOfKinPhone}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Occupation:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <span className="ml-1">
                                                {memberData.occupation}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            {memberData.occupation === "Student"
                                                ? "Institution"
                                                : "Employer:"}
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <span className="ml-1">
                                                {memberData.occupation ===
                                                "Student"
                                                    ? memberData.institution
                                                    : memberData.employer}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col text-gray-500 mb-2">
                                        <label className="mb-1 text-sm">
                                            Level of education:
                                        </label>
                                        <div className="flex items-center text-gray-800 text-lg">
                                            <span className="ml-1">
                                                {memberData.level_of_education}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {!showAddPassports && (
                        <div
                            className="flex justify-end gap-7 mt-4"
                            id="action"
                        >
                            <SecondaryButton
                                className="focus:ring-0 focus:outline-none"
                                onClick={() => setShowPassports(!showPassports)}
                            >
                                {showPassports
                                    ? "View member detail"
                                    : "View Passports"}
                            </SecondaryButton>
                            {!showPassports && (
                                <SecondaryButton
                                    className="focus:ring-0 focus:outline-none"
                                    onClick={() => downloadPDF()}
                                >
                                    Download PDF
                                </SecondaryButton>
                            )}
                            {showPassports && (
                                <SecondaryButton
                                    className="focus:ring-0 focus:outline-none"
                                    onClick={() => setShowAddPassports(true)}
                                >
                                    Add Passport
                                </SecondaryButton>
                            )}
                            <SecondaryButton
                                className="focus:ring-0 focus:outline-none"
                                onClick={() => handleCloseModal()}
                            >
                                Close
                            </SecondaryButton>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};
