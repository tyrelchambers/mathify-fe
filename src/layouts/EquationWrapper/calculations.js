import React from "react";

// returns a random min and max of integers if type === range else it returns an array of randoms
const randomizeIntegers = ({ min = 0, max = 1000, type, loopCount } = {}) => {
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
    const results = [];

    for (let i = 0; i < loopCount; i++) {
      results.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return results;
  }
};

// creates the individual equations give a range of integers
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

export { randomizeIntegers, createIntegerSet };
