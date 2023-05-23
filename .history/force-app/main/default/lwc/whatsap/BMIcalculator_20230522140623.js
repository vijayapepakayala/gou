import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
  @track height;
  @track weight;
  @track bmi;

  handleHeightChange(event) {
    this.height = event.target.value;
  }

  handleWeightChange(event) {
    this.weight = event.target.value;
  }

  calculateBMI() {
    if (this.height && this.weight) {
      const heightInMeters = this.height / 100;
      this.bmi = (this.weight / (heightInMeters * heightInMeters)).toFixed(2);
    } else {
      this.bmi = '';
    }
  }
}
