import React from "react";
import "./FormError.css";
const FormError = ({ error }) => {
  return (
    <div className="flex items-center form-error-wrapper">
      <i className="fas fa-exclamation-triangle mr-4"></i>
      <p className="text-sm font-bold">{error}</p>
    </div>
  );
};

export default FormError;
