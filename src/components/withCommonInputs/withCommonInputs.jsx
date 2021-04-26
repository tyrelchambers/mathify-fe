import React, { useReducer } from "react";
import {
  logicState,
  formUIState,
  optionsState,
} from "../../layouts/EquationWrapper/defaultState";
import { randomizeIntegers } from "../../layouts/EquationWrapper/calculations";
import { equationReducer } from "../../reducers/equationReducer";

const withCommonInputs = (Component) => (props) => {
  const [state, dispatch] = useReducer(equationReducer, {
    logicState,
    formUIState,
    optionsState,
  });

  const generateWorksheet = () => {
    let digits = [];
    let digitValues = [];
    const equations = [];

    for (let index = 0; index < state.logicState.numberOfQuestions; index++) {
      if (state.formUIState.digitValues === "randomize") {
        for (let j = 0; j < 2; j++) {
          let numbers = randomizeIntegers();
          digitValues.splice(j, 1, numbers);
        }
      } else if (state.formUIState.digitValues === "range") {
        digitValues.splice(0, 1, state.logicState.digitValues[0]);
        digitValues.splice(1, 1, state.logicState.digitValues[1]);
        digitValues.sort();
      }
      if (state.formUIState.numberOfDigitsPerEquation === "custom") {
        for (let j = 0; j < state.logicState.numberOfDigitsPerEquation; j++) {
          digits.push(
            randomizeIntegers({
              min: digitValues[0],
              max: digitValues[1],
            })
          );
        }
      } else if (state.formUIState.numberOfDigitsPerEquation === "range") {
        const digitsCount = randomizeIntegers({
          min: state.logicState.numberOfDigitsPerEquation[0],
          max: state.logicState.numberOfDigitsPerEquation[1],
        });

        for (let j = 0; j < digitsCount; j++) {
          digits.push(
            randomizeIntegers({
              min: digitValues[0],
              max: digitValues[1],
            })
          );
        }
      }

      equations.push({
        digits,
        operation: props.equation,
      });
      digits = [];
      digitValues = [];
    }

    props.setEquationSets(equations);
  };
  return (
    <Component
      generateWorksheet={generateWorksheet}
      state={state}
      dispatch={dispatch}
      {...props}
    />
  );
};

export default withCommonInputs;
