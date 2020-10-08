import React from "react";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import { FormLabel } from "../components/FormLabel/FormLabel";
import "./form.css";
import { InputSelector } from "./InputSelector";
import { additionOps } from "../layouts/EquationWrapper/options.ui";
import FormError from "../components/FormError/FormError";

const CommonForm = ({ state, dispatch, register, errors }) => {
  return (
    <>
      <div className="field-group">
        <FormLabel
          forName="numOfQuestions"
          label="Number of Questions?"
          hasTooltip
          toolTipText={`This is the total number of questions you want on your worksheet

            Minimum of 1 question.
          `}
        />

        <input
          ref={register({
            min: {
              value: 1,
              message: "Number of questions must be over 1",
            },
            required: "Number of questions is required",
          })}
          type="number"
          className="form-input"
          name="numOfQuestions"
          placeholder="0"
          min="0"
          onChange={(e) =>
            dispatch({
              type: "updateNumOfQuestions",
              payload: e.target.value,
            })
          }
        />
        {console.log(errors)}
        {errors.numOfQuestions && (
          <FormError error={errors.numOfQuestions.message} />
        )}
      </div>

      <div className="field-group">
        <FormLabel
          forName="digitValues"
          label="What numbers do you want to work with?"
          hasTooltip
          toolTipText={`Choose which numbers you want in each equation. For example: 1 x 5 or 124 x 600.

            The randomize default is min: 0 and max: 1000
          `}
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
          inputRef={register}
        />
      </div>

      <div className="field-group">
        <FormLabel
          forName="numberOfDigitsPerEquation"
          label="How many integers per question?"
          hasTooltip
          toolTipText="This determines the number of digits per individual question."
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
          inputRef={register}
        />
      </div>
    </>
  );
};

export default CommonForm;
