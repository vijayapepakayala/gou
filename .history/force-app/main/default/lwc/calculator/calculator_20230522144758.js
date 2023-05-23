import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    @track resultvalue;
    number1;
    number2;
  
    callme(event) {
      const evtname = event.target.name;
      if (evtname === 'A') {
        this.number1 = event.target.value;
      } else {
        this.number2 = event.target.value;
      }
    }
  
    show() {
      const n1 = parseInt(this.number1);
      const n2 = parseInt(this.number2);
      this.resultvalue = 'Sum of A:' +n1+ 'and B:' +n2+ 'is: '+n1 + n2;
    }
}