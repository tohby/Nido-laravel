import React from "react";
import Modal from "@/Components/Modal";
import moment from "moment";
import SecondaryButton from "@/Components/SecondaryButton";
import { User, Hash, Mail, Calendar, Phone, Home, Users } from "react-feather";

export const View = ({ show, setShowViewModal, memberData }) => {
    return (
        <Modal show={show} maxWidth="6xl">
            <div className="container">
                <div className="grid grid-cols-2">
                    <div>
                        {memberData && memberData.passports && (
                            <img
                                src={`/storage/passports/${memberData?.passports[0]?.image}`}
                                alt="profile"
                                className="max-w-md h-auto rounded-lg border-green-800 border-2"
                            />
                        )}
                    </div>
                    <div className="">
                        <div className="flex flex-col text-gray-500 mb-2">
                            <label className="mb-1 text-sm">Fullname:</label>
                            <span className="text-gray-800 text-lg">
                                {memberData.fullname}
                            </span>
                        </div>
                        <div className="flex flex-col text-gray-500 mb-2">
                            <label className="mb-1 text-sm">
                                Passport number:
                            </label>
                            <div className="flex items-center text-gray-800 text-lg">
                                <Hash className="text-gray-500" size={16} />
                                <span className="ml-1">
                                    {memberData &&
                                        memberData.passports &&
                                        memberData?.passports[0]?.number}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col text-gray-500 mb-2">
                                <label className="mb-1 text-sm">Email:</label>
                                <div className="flex items-center text-gray-800 text-lg">
                                    <Mail className="text-gray-500" size={16} />
                                    <span className="ml-1">
                                        {memberData.email}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col text-gray-500 mb-2">
                                <label className="mb-1 text-sm">Phone:</label>
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

                        <div className="flex flex-col text-gray-500 mb-2">
                            <label className="mb-1 text-sm">
                                Date of birth:
                            </label>
                            <div className="flex items-center text-gray-800 text-lg">
                                <Calendar className="text-gray-500" size={16} />
                                <span className="ml-1">
                                    {moment(memberData.dob).format("LL")}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col text-gray-500 mb-2">
                            <label className="mb-1 text-sm">Address:</label>
                            <div className="flex items-center text-gray-800 text-lg">
                                <Home className="text-gray-500" size={16} />
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
                                <Users className="text-gray-500" size={16} />
                                <span className="ml-1">
                                    {memberData.maritalStatus}
                                </span>
                            </div>
                        </div>

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
                    </div>
                </div>

                <div className="flex justify-end">
                    <SecondaryButton
                        className="focus:ring-0 focus:outline-none"
                        onClick={() => setShowViewModal(false)}
                    >
                        Close
                    </SecondaryButton>
                </div>
            </div>
        </Modal>
    );
};
