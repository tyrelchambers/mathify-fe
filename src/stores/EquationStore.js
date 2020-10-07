const { decorate, observable, action } = require("mobx");

class EquationStore {
  digitValue = [];
  numberOfDigits = [];
  operation = "";

  addDigitValue(digitValue) {
    this.digitValue = [...this.digitValue, digitValue];
  }

  addNumberOfDigits(number) {
    this.numberOfDigits = [...this.numberOfDigits, number];
  }

  addOperation(operation) {
    this.operation = operation;
  }

  getEquation() {
    return {
      operation: this.operation,
      values: [],
    };
  }
}

decorate(EquationStore, {
  digitValue: observable,
  numberOfDigits: observable,
  operation: observable,
  addDigitValue: action,
  addNumberOfDigits: action,
  addOperation: action,
});

export default new EquationStore();
