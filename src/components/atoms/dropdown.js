import React from "react";
import { Link } from "react-router-dom";

export const DropDownList = ({ parent, category }) => {
  return (
    <div className="dropdown w-1/6  relative">
      <button className=" py-2 px-2  rounded inline-flex items-center">
        <span>{parent}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      <ul className="dropdown-menu absolute mr-16 sm:mr-6 text-center  hidden w-64  pt-1">
        <li>
          {category &&
            category.map((item) => (
              <Link
                key={item._id}
                className="rounded-t bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                to={`/pregnacy/${item._id}`}
              >
                {item.name}
              </Link>
            ))}
        </li>
      </ul>
    </div>
  );
};
