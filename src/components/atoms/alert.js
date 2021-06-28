import React from "react";

export const Alert = ({ message, type }) => {
  const getAlertColor = () => {
    switch (type) {
      case "success":
        return "red";
      case "error":
        return "green";
      case "info":
        return "teal";
    }
  };

  return (
    <div
      className={`bg-${getAlertColor()}-100 border border-${getAlertColor()}-400 text-${getAlertColor()}-700 px-4 py-3 rounded relative`}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  );
};
