import { LightningElement } from 'lwc';

export default class NewComponent extends LightningElement {
    Name1 = "joy";

    num1;
    num2;
    num3;
     Name(event){
        this.Name1= event.target.value
     }
     get Adding(){
        this.num3 = this.num1+this.num2;
     }

}