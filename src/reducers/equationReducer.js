import React from "react";

export const equationReducer = (state, action) => {
  switch (action.type) {
    case "updateNumOfQuestions":
      return {
        ...state,
        numOfQuestions: action.payload,
      };
    case "updateSetOfIntegers":
      if (state.btnUIState.setOfIntegers === "range") {
        const arr = { ...state };
        if (action.elem === "setOfIntegers_min") {
          arr.setOfIntegers.splice(0, 1, action.payload);
        } else if (action.elem === "setOfIntegers_max") {
          arr.setOfIntegers.splice(1, 1, action.payload);
        }

        return {
          ...arr,
        };
      }

      if (state.btnUIState.setOfIntegers === "custom") {
        return {
          ...state,
          setOfIntegers: [action.payload],
        };
      }
      break;
    case "updateSetValues":
      const arr = { ...state };
      if (action.elem === "setValues_min") {
        arr.setValues.splice(0, 1, action.payload).sort();
      } else if (action.elem === "setValues_max") {
        arr.setValues.splice(1, 1, action.payload).sort();
      }

      return {
        ...arr,
      };

    case "updateSetValuesUI":
      return {
        ...state,
        btnUIState: {
          ...state.btnUIState,
          setValues: action.payload,
        },
      };

    case "updateSetOfIntegersUI":
      return {
        ...state,
        btnUIState: {
          ...state.btnUIState,
          setOfIntegers: action.payload,
        },
      };

    case "resetSetOfIntegers":
      return {
        ...state,
        setOfIntegers: [],
      };

    case "resetSetValues":
      return {
        ...state,
        setValues: [],
      };

    default:
      return new Error();
  }
};
