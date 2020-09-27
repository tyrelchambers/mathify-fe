import React from "react";

export const equationReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "updateNumOfQuestions":
      return {
        ...state,
        numOfQuestions: action.payload,
      };
    case "updateSetOfIntegers":
      console.log(state);
      if (state.btnState.setOfIntegers === "range") {
        return {
          ...state,
          setOfIntegers: {
            ...state.setOfIntegers,
            ...action.payload,
          },
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

    default:
      return new Error();
  }
};
