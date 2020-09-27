import React from "react";
import {
  PrimaryButton,
  SubmitButton,
} from "../components/Buttons/PrimaryButton";
import { FormLabel } from "../components/FormLabel/FormLabel";
import "./form.css";
import { InputSelector } from "./InputSelector";
import { additionOps } from "../layouts/EquationWrapper/options.ui";

export const AdditionForm = ({ state, dispatch, generatePreview }) => {
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
          value={state.numOfQuestions}
          onChange={(e) =>
            dispatch({ type: "updateNumOfQuestions", payload: e.target.value })
          }
        />
      </div>

      <div className="field-group">
        <FormLabel
          forName="setValues"
          label="What numbers do you want to work with?"
        />

        <div className="flex mt-2">
          {additionOps.setValues.map((op) => (
            <PrimaryButton
              onClick={() =>
                dispatch({ type: "updateSetValuesUI", payload: op.name })
              }
              classes={`${
                state.btnUIState.setValues === op.name ? "active" : ""
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
          dispatchType="updateSetValues"
          stateKey="setValues"
        />
      </div>

      <div className="field-group">
        <FormLabel
          forName="setOfIntegers"
          label="How many integers per question?"
        />
        <div className="flex mt-2">
          {additionOps.setOfIntegers.map((op) => (
            <PrimaryButton
              onClick={() =>
                dispatch({ type: "updateSetOfIntegersUI", payload: op.name })
              }
              classes={`${
                state.btnUIState.setOfIntegers === op.name ? "active" : ""
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
          dispatchType="updateSetOfIntegers"
          stateKey="setOfIntegers"
        />
      </div>

      <SubmitButton classes="shadow-lg" onClick={generatePreview}>
        <i className="fas fa-angle-double-right mr-4"></i>
        Generate
      </SubmitButton>
    </form>
  );
};
