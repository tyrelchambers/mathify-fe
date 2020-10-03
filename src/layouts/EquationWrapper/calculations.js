import React from "react";

const randomizeIntegers = ({ min = 0, max = 1000 } = {}) => {
  let minNum = Math.floor(min);
  let minMax = Math.ceil(max);

  let num = Math.floor(Math.random() * (minMax - minNum + 1)) + minNum;

  return num < min || num > max ? randomizeIntegers() : [num];
};

export { randomizeIntegers };
