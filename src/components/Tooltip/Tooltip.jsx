import React from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  if (!props.tooltipRef) return null;
  const parent = props.tooltipRef.getBoundingClientRect();

  return (
    <div
      className={`bg-gray-800 absolute p-4 rounded-lg shadow-md tooltip-body`}
      style={{
        left: parent.width + 10,
        top: 0,
      }}
    >
      <p className="tooltip-text">{props.children}</p>
    </div>
  );
};

export default Tooltip;
