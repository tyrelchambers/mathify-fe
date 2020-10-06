import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { EqPreview } from "../../components/EqPreview/EqPreview";
import { H2 } from "../../components/Headings/Headings";
import { operations } from "../../constants/operations";
import { AdditionForm } from "../../forms/AdditionForm";
import { equationReducer } from "../../reducers/equationReducer";
import { acceptedEquationRoutes } from "../../routes/accepted.routes";
import { DisplayWrapper } from "../DisplayWrapper/DisplayWrapper";
import { randomizeIntegers } from "./calculations";
import { logicState, formUIState } from "./defaultState";

export const EquationWrapper = () => {
  const { equation } = useParams();
  const [equationSets, setEquationSets] = useState([]);
  const [state, dispatch] = useReducer(equationReducer, {
    logicState,
    formUIState,
  });

  if (!acceptedEquationRoutes.includes(equation)) {
    return null;
  }

  const generateWorksheet = () => {};

  const defaultProps = {
    state,
    generateWorksheet,
    dispatch,
  };

  const forms = {
    addition: <AdditionForm {...defaultProps} />,
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
