import React from "react";

// returns a random min and max of integers if type === range else it returns an array of randoms
const randomizeIntegers = ({ min = 0, max = 1000, type } = {}) => {
  let range = {
    min: 0,
    max: 0,
  };

  if (type === "range") {
    const calcMin = () => {
      let int = Math.floor(Math.random() * (max - min + 1) + min);

      if (int > range.max) {
        return calcMin();
      }

      return int;
    };

    range.max = Math.floor(Math.random() * (max - min + 1) + min);
    range.min = calcMin();

    return range;
  }

  if (type === "custom") {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

// creates the individual equations give a range of integers
const createIntegerSet = ({ min, max } = {}) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { randomizeIntegers, createIntegerSet };
