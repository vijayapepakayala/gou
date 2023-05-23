import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    @track displayValue = '';

  handleButtonPress(event) {
    const buttonValue = event.target.label;
    this.displayValue += buttonValue;
  }

  handleOperatorPress(event) {
    const operator = event.target.label;
    this.displayValue += operator;
  }

  calculateResult() {
    try {
      // Evaluate the expression
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clearDisplay() {
    this.displayValue = '';
  }
}