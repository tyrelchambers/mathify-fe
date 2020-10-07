import React from "react";

export const equationReducer = (state, action) => {
  switch (action.type) {
    case "updateNumOfQuestions":
      return {
        ...state,
        logicState: {
          ...state.logicState,
          numberOfQuestions: action.payload,
        },
      };

    case "updateNumberOfDigitsPerEquation":
      if (state.formUIState.numberOfDigitsPerEquation === "range") {
        const arr = { ...state };
        if (action.elem === "numberOfDigitsPerEquation_min") {
          arr.logicState.numberOfDigitsPerEquation.splice(0, 1, action.payload);
        } else if (action.elem === "numberOfDigitsPerEquation_max") {
          arr.logicState.numberOfDigitsPerEquation.splice(1, 1, action.payload);
        }

        return {
          ...arr,
        };
      }

      if (state.formUIState.numberOfDigitsPerEquation === "custom") {
        return {
          ...state,
          logicState: {
            ...state.logicState,

            numberOfDigitsPerEquation: [action.payload],
          },
        };
      }
      break;

    case "updateDigitValues":
      const arr = { ...state };
      if (action.elem === "digitValues_min") {
        arr.logicState.digitValues.splice(0, 1, action.payload).sort();
      } else if (action.elem === "digitValues_max") {
        arr.logicState.digitValues.splice(1, 1, action.payload).sort();
      }

      return {
        ...arr,
      };

    case "updateDigitValuesUI":
      return {
        ...state,
        formUIState: {
          ...state.formUIState,
          digitValues: action.payload,
        },
      };

    case "updateNumberOfDigitsPerEquationUI":
      return {
        ...state,
        formUIState: {
          ...state.formUIState,
          numberOfDigitsPerEquation: action.payload,
        },
      };

    case "resetNumberOfDigitsPerEquation":
      return {
        ...state,
        logicState: {
          ...state.logicState,

          numberOfDigitsPerEquation: [],
        },
      };

    case "resetDigitValues":
      return {
        ...state,
        logicState: {
          ...state.logicState,

          digitValues: [],
        },
      };

    default:
      return new Error();
  }
};
