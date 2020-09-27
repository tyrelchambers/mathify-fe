import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { EqPreview } from "../../components/EqPreview/EqPreview";
import { H2 } from "../../components/Headings/Headings";
import { AdditionForm } from "../../forms/AdditionForm";
import { equationReducer } from "../../reducers/equationReducer";
import { acceptedEquationRoutes } from "../../routes/accepted.routes";
import { DisplayWrapper } from "../DisplayWrapper/DisplayWrapper";
import { createIntegerSet, randomizeIntegers } from "./calculations";
import { defaultState } from "./defaultState";

export const EquationWrapper = () => {
  const { equation } = useParams();

  const [state, dispatch] = useReducer(equationReducer, defaultState);

  if (!acceptedEquationRoutes.includes(equation)) {
    return null;
  }

  const generatePreview = () => {
    switch (state.btnUIState.setValues) {
      case "randomize":
        const ints = randomizeIntegers({ type: "range" });
        dispatch({
          type: "updateSetValues",
          payload: {
            min: ints.min,
            max: ints.max,
          },
        });
        break;

      default:
        return;
    }

    switch (state.btnUIState.setOfIntegers) {
      case "randomize":
        if (state.btnUIState.setOfIntegers === "range") {
          const ints = randomizeIntegers({
            type: "range",
          });
          const set = createIntegerSet({ max: ints.max, min: ints.min });
          console.log(set);
        }

        if (state.btnUIState.setOfIntegers === "custom") {
          const int = randomizeIntegers({
            type: "custom",
            loopCount: 2,
          });
          console.log(int);
        }

        break;

      default:
        break;
    }
  };

  const defaultProps = {
    state,
    generatePreview,
    dispatch,
  };

  const forms = {
    addition: <AdditionForm {...defaultProps} />,
  };

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
