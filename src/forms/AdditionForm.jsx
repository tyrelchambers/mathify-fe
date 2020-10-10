import React from "react";
import { SubmitButton } from "../components/Buttons/PrimaryButton";
import withCommonInputs from "../components/withCommonInputs/withCommonInputs";
import CommonForm from "./CommonForm";

const AdditionForm = (props) => {
  console.log(props);
  const submit = props.handleSubmit;
  return (
    <form className="form mr-4" onSubmit={submit(props.generateWorksheet)}>
      <CommonForm {...props} state={props.state} dispatch={props.dispatch} />
      <SubmitButton type="submit" classes="shadow-lg">
        <i className="fas fa-angle-double-right mr-4"></i>
        Generate
      </SubmitButton>
    </form>
  );
};

export default withCommonInputs(AdditionForm);
