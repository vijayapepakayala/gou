import { LightningElemen } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class Loginformparent extends LightningElement {
  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    // Perform a check here to determine if the user is logged in
    // You can use any logic you want to validate the user's login status
    // For example, you can check if a session variable is set or if there's a specific user context available
    
    const isLoggedIn = /* Add your login check logic here */;

    if (!isLoggedIn) {
      this.redirectToLoginPage();
    }
  }

  redirectToLoginPage() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'Loginpage__c',
        actionName: 'home'
      },
    });
  }
}
