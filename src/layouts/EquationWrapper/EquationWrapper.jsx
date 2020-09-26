import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EqPreview } from "../../components/EqPreview/EqPreview";
import { H2 } from "../../components/Headings/Headings";
import { AdditionForm } from "../../forms/AdditionForm";
import { acceptedEquationRoutes } from "../../routes/accepted.routes";
import { DisplayWrapper } from "../DisplayWrapper/DisplayWrapper";
import { additionState } from "./defaultState";

export const EquationWrapper = () => {
  const { equation } = useParams();

  const [btnState, setBtnState] = useState({
    setOfDigits: "",
    setValues: "",
  });

  const [state, setState] = useState({});

  useEffect(() => {
    switch (equation) {
      case "addition":
        setState(additionState);
        break;
      default:
        break;
    }
  }, [equation]);

  const defaultProps = {
    btnState,
    setBtnState,
    state,
    setState,
  };

  const forms = {
    addition: <AdditionForm {...defaultProps} />,
  };

  if (!acceptedEquationRoutes.includes(equation)) {
    return null;
  }

  return (
    <DisplayWrapper>
      <div className="p-4 bg-gray-100 rounded-lg flex justify-center shadow-md">
        <H2 className="capitalize text-red-500">{equation}</H2>
      </div>
      <div className="flex">
        <div className="w-3/5">{forms[equation]}</div>
        <div className="w-full">
          <EqPreview state={state} />
        </div>
      </div>
    </DisplayWrapper>
  );
};
