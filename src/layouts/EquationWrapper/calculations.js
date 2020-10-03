import React from "react";

// returns a random min and max of integers if type === range else it returns an array of randoms
const randomizeIntegers = ({ min = 0, max = 1000 } = {}) => {
  let range = [];

  const calcMin = () => {
    let int = Math.floor(Math.random() * (max - min + 1) + min);
    if (int > max || int < min) {
      return calcMin();
    }

    return int;
  };

  range.push(calcMin());

  return range;
};

export { randomizeIntegers };
