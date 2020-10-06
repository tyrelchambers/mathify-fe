import React from "react";

export const Equation = ({
  numberOfQuestions,
  numberOfDigitsPerEquation,
  digitValues,
}) => {
  const results = [];

  for (let i = 0; i < numberOfQuestions; i++) {
    results.push(<p>{digitValues}</p>);
  }

  return <div> {results.map((r) => r)}</div>;
};
