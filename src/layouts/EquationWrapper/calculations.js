import React from "react";

const randomizeIntegers = ({ min = 0, max = 1000 } = {}) => {
  let minNum = Math.floor(min);
  let minMax = Math.ceil(max);

  let num = Math.floor(Math.random() * (minMax - minNum + 1)) + minNum;

  return num < min || num > max ? randomizeIntegers() : num;
};

const createEquation = ({ digitValue, numberOfDigits, operation } = {}) => ({
  digitValue,
  numberOfDigits,
  operation,

  addDigitValue(digitValue) {
    this.digitValue = digitValue;
  },

  addNumberOfDigits(number) {
    this.numberOfDigits = number;
  },

  addOperation(operation) {
    this.operation = operation;
  },

  getEquation() {
    return {
      operation: this.operation,
      values: [],
    };
  },
});

export { randomizeIntegers, createEquation };
