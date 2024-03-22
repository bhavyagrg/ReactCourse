import React from "react";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <button
      className={isSelected ? "active" : undefined}
      id="button"
      onClick={() => onSelect()}
    >
      {children}
    </button>
  );
};

export default TabButton;
