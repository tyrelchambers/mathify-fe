import React from "react";
import {
  PrimaryButton,
  SubmitButton,
} from "../components/Buttons/PrimaryButton";
import { FormLabel } from "../components/FormLabel/FormLabel";
import "./form.css";
import { InputSelector } from "./InputSelector";
import { additionOps } from "../layouts/EquationWrapper/options.ui";

export const AdditionForm = ({ state, dispatch, generateWorksheet }) => {
  return (
    <form className="form">
      {console.log(state)}
      <div className="field-group">
        <FormLabel forName="numOfQuestions" label="Number of Questions?" />
        <input
          type="number"
          className="form-input"
          name="numOfQuestions"
          placeholder="0"
          onChange={(e) =>
            dispatch({
              type: "updateNumOfQuestions",
              payload: e.target.value,
            })
          }
        />
      </div>

      <div className="field-group">
        <FormLabel
          forName="digitValues"
          label="What numbers do you want to work with?"
        />

        <div className="flex mt-2">
          {additionOps.digitValues.map((op) => (
            <PrimaryButton
              onClick={() => {
                dispatch({ type: "updateDigitValuesUI", payload: op.name });
                dispatch({ type: "resetDigitValues", payload: op.name });
              }}
              classes={`${
                state.formUIState.digitValues === op.name ? "active" : ""
              }`}
              key={op.label}
              onChange={dispatch}
            >
              {op.label}
            </PrimaryButton>
          ))}
        </div>
        <InputSelector
          dispatch={dispatch}
          state={state}
          dispatchType="updateDigitValues"
          stateKey="digitValues"
        />
      </div>

      <div className="field-group">
        <FormLabel
          forName="numberOfDigitsPerEquation"
          label="How many integers per question?"
        />
        <div className="flex mt-2">
          {additionOps.numberOfDigitsPerEquation.map((op) => (
            <PrimaryButton
              onClick={() => {
                dispatch({
                  type: "updateNumberOfDigitsPerEquationUI",
                  payload: op.name,
                });
                dispatch({
                  type: "resetNumberOfDigitsPerEquation",
                  payload: op.name,
                });
              }}
              classes={`${
                state.formUIState.numberOfDigitsPerEquation === op.name
                  ? "active"
                  : ""
              }`}
              key={op.label}
              onChange={dispatch}
            >
              {op.label}
            </PrimaryButton>
          ))}
        </div>
        <InputSelector
          dispatch={dispatch}
          state={state}
          dispatchType="updateNumberOfDigitsPerEquation"
          stateKey="numberOfDigitsPerEquation"
        />
      </div>

      <SubmitButton classes="shadow-lg" onClick={generateWorksheet}>
        <i className="fas fa-angle-double-right mr-4"></i>
        Generate
      </SubmitButton>
    </form>
  );
};
