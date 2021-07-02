import React from "react";

export const Btn = (props) => {
  return (
    <button className={` text-sm  rounded   mt-4 px-3 sm:px-4 ${props.stylee}`} type='submit'>
      {props.children}
    </button>
  );
};
