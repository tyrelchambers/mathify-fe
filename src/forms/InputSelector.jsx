import React from "react";

export const InputSelector = ({ stateKey, dispatch, state, dispatchType }) => {
  switch (state.btnUIState[stateKey]) {
    case "custom":
      return (
        <input
          type="number"
          name="setOfIntegers"
          className="form-input mt-4"
          placeholder="0"
          onChange={(e) =>
            dispatch({ type: dispatchType, payload: e.target.value })
          }
        />
      );

    case "range":
      return (
        <div className="flex items-center mt-4">
          <input
            type="number"
            name="setOfIntegers"
            className="form-input"
            placeholder="0"
            onChange={(e) =>
              dispatch({
                type: dispatchType,
                payload: {
                  min: e.target.value,
                },
              })
            }
          />

          <p className="ml-2 mr-2 text-gray-700 font-bold">to</p>

          <input
            type="number"
            name="setOfIntegers"
            className="form-input"
            placeholder="0"
            onChange={(e) =>
              dispatch({
                type: dispatchType,
                payload: {
                  max: e.target.value,
                },
              })
            }
          />
        </div>
      );

    default:
      return null;
  }
};
