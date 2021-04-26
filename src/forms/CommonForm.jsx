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
        {errors.digitValues_min && (
          <FormError error={errors.digitValues_min.message} />
        )}
        {errors.digitValues_max && (
          <FormError error={errors.digitValues_max.message} />
        )}
        {errors.digitValues && <FormError error={errors.digitValues.message} />}
      </div>

      <div className="field-group">
        <FormLabel
          forName="numberOfDigitsPerEquation"
          label="How many sets of numbers per question?"
          hasTooltip
          toolTipText="This determines the number of sets of numbers per individual question."
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
        {errors.numberOfDigitsPerEquation_min && (
          <FormError error={errors.numberOfDigitsPerEquation_min.message} />
        )}
        {errors.numberOfDigitsPerEquation_max && (
          <FormError error={errors.numberOfDigitsPerEquation_max.message} />
        )}
        {errors.numberOfDigitsPerEquation && (
          <FormError error={errors.numberOfDigitsPerEquation.message} />
        )}
      </div>
      <div className="field-group">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="includeAnswers"
            className="mr-2"
            value={state.optionsState.includeAnswers}
            onChange={(e) =>
              dispatch({
                type: "answerSheet",
                payload: e.target.checked,
              })
            }
          />
          <p className="font-bold">Include answer sheet?</p>
        </div>
      </div>
    </>
  );
};

export default CommonForm;
