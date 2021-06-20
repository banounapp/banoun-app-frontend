import React from "react";
import waves from "../../assets/waves.png";

const Wave = ({ stylee }) => {
  return (
    <img
      style={{ minWidth: "300px", maxWidth: "600px" }}
      className={`absolute ${stylee}`}
      src={waves}
    ></img>
  );
};

export default Wave;
