import React from "react";

export const Equation = ({ numOfQuestions, setOfIntegers, setValues }) => {
  const results = [];

  for (let i = 0; i < numOfQuestions; i++) {
    results.push(<p>{setValues}</p>);
  }

  return <div> {results.map((r) => r)}</div>;
};
