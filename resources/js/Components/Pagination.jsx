import React from "react";

import { Link } from "@inertiajs/react";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function Pagination({ links }) {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-green-800 hover:text-white focus:border-primary focus:text-primary bg-green-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-green-800 hover:text-white focus:border-primary focus:text-primary";
        }
    }

    const renderLabel = (label) => {
        switch (label) {
            case "Next &raquo;":
                return (
                    <>
                        <ArrowRight size={14} />
                    </>
                );
            case "&laquo; Previous":
                return (
                    <>
                        <ArrowLeft size={14} />
                    </>
                );
            default:
                return label;
        }
    };

    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8 justify-end">
                    {links.map((link, key) =>
                        link.url === null ? (
                            <div className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">
                                {renderLabel(link.label)}
                            </div>
                        ) : (
                            <Link
                                className={getClassName(link.active)}
                                href={link.url}
                            >
                                {renderLabel(link.label)}
                            </Link>
                        )
                    )}
                </div>
            </div>
        )
    );
}
