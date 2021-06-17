import React from "react";
import { Input } from "../atoms";

export const SearchDoc = ({ placeholder }) => {
    return (
        <div className="relative rounded  border-2 border-pale-leaf-500  text-gray-600 focus-within:text-gray-400  w-9/12  md:w-4/12 md:m-auto lg:w-2/12">
            <span className="absolute  inset-y-0 right-0 flex items-center pl-2">
                <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6  text-silver-tree"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </span>
            <Input placeholder={placeholder} />
        </div>
    );
};
