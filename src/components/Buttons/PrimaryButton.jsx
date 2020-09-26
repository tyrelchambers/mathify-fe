import React from "react";
import "./buttons.css";
export const PrimaryButton = (props) => {
  return (
    <button
      type="button"
      className={`${props.classes} btn primary`}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};
