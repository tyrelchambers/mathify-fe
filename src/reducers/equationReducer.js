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
        return {
          ...state,
          setOfIntegers: {
            ...state.setOfIntegers,
            ...action.payload,
          },
        };
      }

      if (state.btnUIState.setOfIntegers === "custom") {
        return {
          ...state,
          setOfIntegers: action.payload,
        };
      }
      break;
    case "updateSetValues":
      return {
        ...state,
        setValues: {
          ...state.setValues,
          ...action.payload,
        },
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
        setOfIntegers: {
          min: 0,
          max: 0,
        },
      };

    case "resetSetValues":
      return {
        ...state,
        setValues: {
          min: 0,
          max: 0,
        },
      };

    default:
      return new Error();
  }
};
