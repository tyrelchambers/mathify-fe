import React from "react";

export const InputSelector = ({ state, stateKey }) => {
  switch (state[stateKey]) {
    case "custom":
      return (
        <input
          type="number"
          name="numOfDigitSets"
          className="form-input mt-4"
          placeholder="0"
        />
      );

    case "range":
      return (
        <div className="flex items-center mt-4">
          <input
            type="number"
            name="numOfDigitSets"
            className="form-input"
            placeholder="0"
          />

          <p className="ml-2 mr-2 text-gray-700 font-bold">to</p>

          <input
            type="number"
            name="numOfDigitSets"
            className="form-input"
            placeholder="0"
          />
        </div>
      );

    default:
      return null;
  }
};
