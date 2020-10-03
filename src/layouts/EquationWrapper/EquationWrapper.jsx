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
import { defaultState } from "./defaultState";

export const EquationWrapper = () => {
  const { equation } = useParams();
  const [equationSets, setEquationSets] = useState([]);
  const [state, dispatch] = useReducer(equationReducer, defaultState);

  if (!acceptedEquationRoutes.includes(equation)) {
    return null;
  }

  const generateWorksheet = () => {
    const { btnUIState, setValues, setOfIntegers, numOfQuestions } = state;
    let values = [],
      integers = [];
    const equations = [];

    console.log(state);

    for (let i = 0; i < numOfQuestions; i++) {
      if (btnUIState.setValues === "randomize") {
        for (let j = 0; j < 2; j++) {
          values.splice(j, 1, randomizeIntegers()).sort();
        }
      } else if (btnUIState.setValues === "range") {
        values = randomizeIntegers({ min: setValues[0], max: setValues[1] });
      }

      if (btnUIState.setOfIntegers === "custom") {
        const arr = [];

        if (btnUIState.setValues === "range") {
          arr.push(randomizeIntegers({ min: values[0], max: values[1] }));
          integers = arr;
          return;
        }

        for (let k = 0; k < setOfIntegers; k++) {
          arr.push(randomizeIntegers());
        }

        integers = arr;
      }

      equations.push({
        symbol: operations[equation],
        digits: integers,
      });
    }

    setEquationSets(equations);
  };

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
