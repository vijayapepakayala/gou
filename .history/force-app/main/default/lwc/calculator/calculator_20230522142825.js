import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
  @track resultvalue
  number1;
  number2;
  callme(event){
    //name of the element where the event has occured
    const evtname = event.target.name;
    if(evtname == 'A'){
        this.number1= event.target.value;//get value A and assign to variable num1
    }
    else
    {
        this.number2 = event.target.value;//get value A and assign to variable num1
    }
  }
  show(){
    const n1 = parseInt(this.number1);
    const n2 = parseInt(this.number2);
    this.resultvalue = 'sum of A:' + n1 + 'and  B:' +n2 +'is :'+(n1+n2);
  }
}