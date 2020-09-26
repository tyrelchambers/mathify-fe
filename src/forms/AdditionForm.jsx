import React from "react";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import { FormLabel } from "../components/FormLabel/FormLabel";
import "./form.css";
import { InputSelector } from "./InputSelector";
import { additionOps } from "../layouts/EquationWrapper/options";

export const AdditionForm = ({ state, setState, btnState, setBtnState }) => {
  return (
    <form className="form">
      <div className="field-group">
        <FormLabel forName="numOfQuestions" label="Number of Questions?" />
        <input
          type="number"
          className="form-input"
          name="numOfQuestions"
          placeholder="0"
          value={state.numOfQuestions}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="field-group">
        <FormLabel
          forName="setOfDigits"
          label="How many integers per question?"
        />
        <div className="flex mt-2">
          {additionOps.setOfDigits.map((op) => (
            <PrimaryButton
              onClick={() => setBtnState({ ...btnState, setOfDigits: op.name })}
              classes={`${btnState.setOfDigits === op.name ? "active" : ""}`}
              key={op.label}
            >
              {op.label}
            </PrimaryButton>
          ))}
        </div>
        <InputSelector state={btnState} stateKey="setOfDigits" />
      </div>

      <div className="field-group">
        <FormLabel
          forName="setValues"
          label="What numbers do you want to work with?"
        />

        <div className="flex mt-2">
          {additionOps.setValues.map((op) => (
            <PrimaryButton
              onClick={() => setBtnState({ ...btnState, setValues: op.name })}
              classes={`${btnState.setValues === op.name ? "active" : ""}`}
              key={op.label}
            >
              {op.label}
            </PrimaryButton>
          ))}
        </div>
        <InputSelector state={btnState} stateKey="setValues" />
      </div>
    </form>
  );
};
