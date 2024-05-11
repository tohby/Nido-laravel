import React from "react";
import { X } from "react-feather";

const SearchBox = ({ value, onChange, onSearch, onClear }) => {
    const handleSearch = (e) => {
        e.preventDefault();

        onSearch && onSearch();
    };

    const handleClear = () => {
        onClear && onClear();
    };
    return (
        <div>
            <form className="max-w-md mb-5">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-700 focus:ring-green-700 focus:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700"
                        placeholder="Search Members..."
                        required
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <div className="flex absolute end-2.5 bottom-2.5 gap-2">
                        {value && (
                            <button
                                type="button"
                                onClick={handleClear}
                                className="text-gray-800 bg-transparent hover:bg-gray-200 focus:bg-gray-200 focus:ring-0 focus:outline-none rounded-lg font-medium text-sm px-2 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                <X size={16} />
                            </button>
                        )}
                        <button
                            type="submit"
                            onClick={handleSearch}
                            className="text-white   bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBox;
