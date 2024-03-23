import React from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <button
      className={isSelected ? "active" : undefined}
      id="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default TabButton;
