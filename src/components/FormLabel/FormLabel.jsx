import React from "react";
import "../../forms/form.css";

export const FormLabel = ({ forName, label }) => {
  return (
    <label htmlFor={forName} className="form-label">
      {label}
    </label>
  );
};
