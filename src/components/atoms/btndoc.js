import React from "react";

export const BtnDoc = (props) => {
  return (
    <button className={`rounded ${props.stylee}`}>
      {props.children}
    </button>
  );
};
