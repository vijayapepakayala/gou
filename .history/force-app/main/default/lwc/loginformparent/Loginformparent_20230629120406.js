import { LightningElement,track } from 'lwc';

export default class Loginformparent extends LightningElement {
    @track loggedIn = false;

  handleLogin() {
    this.loggedIn = true;
  }
}