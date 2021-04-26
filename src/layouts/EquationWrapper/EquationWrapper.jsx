import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { EqPreview } from "../../components/EqPreview/EqPreview";
import { H2 } from "../../components/Headings/Headings";
import AdditionForm from "../../forms/AdditionForm";
import { acceptedEquationRoutes } from "../../routes/accepted.routes";
import { DisplayWrapper } from "../DisplayWrapper/DisplayWrapper";
import { useForm } from "react-hook-form";
import SubtractionForm from "../../forms/SubtractionForm";
import MultiplicationForm from "../../forms/MultiplicationForm";
import DivisionForm from "../../forms/DivisionForm";

const EquationWrapper = () => {
  const { equation } = useParams();
  const [equationSets, setEquationSets] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  if (!acceptedEquationRoutes.includes(equation)) {
    return null;
  }

  const defaultProps = {
    setEquationSets,
    equation,
    register,
    errors,
    handleSubmit,
  };
  const forms = {
    addition: <AdditionForm {...defaultProps} />,
    subtraction: <SubtractionForm {...defaultProps} />,
    multiplication: <MultiplicationForm {...defaultProps} />,
    division: <DivisionForm {...defaultProps} />,
  };

  return (
    <DisplayWrapper>
      <div className="p-4 bg-gray-100 rounded-lg flex justify-center shadow-md">
        <H2 className="capitalize text-orange-500">{equation}</H2>
      </div>
      <div className="flex">
        <div className="w-3/5">{forms[equation]}</div>
        <div className="w-full">
          <EqPreview state={equationSets} />
        </div>
      </div>
    </DisplayWrapper>
  );
};

export default EquationWrapper;
