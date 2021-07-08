import React from "react";
import waves from "../../assets/waves.png";

const Wave = ({ stylee }) => {
  return (
    <img
      style={{ minWidth: "100%", maxWidth: "100%"   , maxHeight : "30%"}}
      className={`absolute ${stylee}`}
      src={waves}
    ></img>
  );
};

export default Wave;
