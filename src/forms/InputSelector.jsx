import React from "react";

export const InputSelector = ({
  stateKey,
  dispatch,
  state,
  dispatchType,
  inputRef,
}) => {
  switch (state.formUIState[stateKey]) {
    case "custom":
      return (
        <input
          ref={inputRef({
            required: "Please enter a value",
            min: {
              value: 1,
              message: "Please enter a value greater than 1",
            },
          })}
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
            ref={inputRef({
              required: "Please enter a value",
              min: {
                value: 2,
                message: "Please enter a value greater than 2",
              },
            })}
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
            ref={inputRef({
              required: "Please enter a value",
              min: {
                value: 2,
                message: "Please enter a value greater than 2",
              },
            })}
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
