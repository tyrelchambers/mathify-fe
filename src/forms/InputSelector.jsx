import React from "react";

export const InputSelector = ({ stateKey, dispatch, state, dispatchType }) => {
  switch (state.btnUIState[stateKey]) {
    case "custom":
      return (
        <input
          type="number"
          name={stateKey}
          className="form-input mt-4"
          placeholder="0"
          min="0"
          max="1000"
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
            name={`${stateKey}_min`}
            className="form-input"
            placeholder="0"
            min="0"
            max="1000"
            onChange={(e) =>
              dispatch({
                type: dispatchType,
                payload: e.target.value,
                elem: e.target.name,
              })
            }
          />

          <p className="ml-2 mr-2 text-gray-700 font-bold">to</p>

          <input
            type="number"
            name={`${stateKey}_max`}
            className="form-input"
            placeholder="0"
            min="0"
            max="1000"
            onChange={(e) =>
              dispatch({
                type: dispatchType,
                payload: e.target.value,
                elem: e.target.name,
              })
            }
          />
        </div>
      );

    default:
      return null;
  }
};
