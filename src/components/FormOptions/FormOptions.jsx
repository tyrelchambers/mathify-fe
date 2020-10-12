import React from "react";
import { FormLabel } from "../FormLabel/FormLabel";

const FormOptions = (props) => {
  return (
    <div>
      <div className="field-group">
        <FormLabel forName="decimals" />
        <input type="checkbox" name="decimals" />
      </div>
    </div>
  );
};

export default FormOptions;
