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
    let values, integers;
    const numOfQuestionsInput = document.querySelector(
      `input[name="numOfQuestions"]`
    )?.value;
    const rangeSetValuesMin = document.querySelector(
      `input[name="setValues_min"]`
    )?.value;
    const rangeSetValuesMax = document.querySelector(
      `input[name="setValues_max"]`
    )?.value;
    const rangeSetOfIntegersMin = document.querySelector(
      `input[name="setOfIntegers_min"]`
    )?.value;
    const rangeSetOfIntegersMax = document.querySelector(
      `input[name="setOfIntegers_max"]`
    )?.value;
    const setOfIntegersCustom = document.querySelector(
      `input[name="setOfIntegers"]`
    )?.value;

    const { btnUIState } = state;
    const equations = [];

    for (let i = 0; i < numOfQuestionsInput; i++) {
      if (btnUIState.setValues === "randomize") {
        const ints = randomizeIntegers({ type: "range" });
        values = {
          min: ints.min,
          max: ints.max,
        };
      }

      if (btnUIState.setOfIntegers === "range") {
        let [timesToLoop] = randomizeIntegers({
          min: rangeSetOfIntegersMin,
          max: rangeSetOfIntegersMax,
        });

        let arr = [];

        for (let k = 0; k < timesToLoop; k++) {
          let [int] = randomizeIntegers({
            min: values.min,
            max: values.max,
          });
          arr.push(int);
        }

        integers = arr;
      }

      if (btnUIState.setOfIntegers === "custom") {
        let arr = [];
        for (let k = 0; k < setOfIntegersCustom; k++) {
          let [int] = randomizeIntegers({
            min: values.min,
            max: values.max,
          });
          arr.push(int);
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
