import React from "react";

const TabButton = ({children , onSelect}) => {
  return (
    <button id="button" onClick = {()=> onSelect()}>
      {children}
    </button>
  );
}

export default TabButton;
