import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      type="search"
      name="q"
      className="py-2 px-8  sm:w-full   text-sm text-white ml-4 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default Input;
