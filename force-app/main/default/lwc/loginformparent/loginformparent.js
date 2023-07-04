import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Loginformparent extends NavigationMixin(LightningElement) {
  handleLogin() {
    // Perform your login logic here

    // Assuming the login is successful, navigate to another application
    this.navigateToAnotherApplication();
  }

  navigateToAnotherApplication() {
    this[NavigationMixin.Navigate]({
      type: 'standard__webPage',
      attributes: {
        url: 'https://www.example.com' // Replace with the URL of the other application
      }
    });
  }
}
