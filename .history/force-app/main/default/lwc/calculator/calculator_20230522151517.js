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
      
      this.resultvalue = 'Adding of this two number2'+parseInt(number1)+ 'and'+parseInt(number2)+'The result is'+(number1 + number2);
    }
}