import React from "react";

const randomizeIntegers = ({ min, max, type, loopCount } = {}) => {
  let range = {
    min: 0,
    max: 0,
  };
  let minInt = min || 0;
  let maxInt = max || 1000;

  if (type === "range") {
    const calcMin = () => {
      let int = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);

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
    const results = [];

    for (let i = 0; i < loopCount; i++) {
      results.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return results;
  }
};

const createIntegerSet = ({ min, max, intCount, int } = {}) => {
  if (min && max) {
    const range = [];
    for (let i = 0; i < intCount; i++) {
      range.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return range;
  }

  if (int) {
    let results = Math.floor(Math.random() * (max - min + 1) + min);
    return results;
  }
};

const buildEquation = ({ state, btnState }) => {};

export { buildEquation, randomizeIntegers, createIntegerSet };
