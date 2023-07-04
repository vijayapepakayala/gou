import { LightningElement,track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class Examrules extends NavigationMixin (LightningElement) {
    @track agreeChecked = false;

    handleAgreeChange(event) {
        this.agreeChecked = event.target.checked;
    }

    get isRegisterButtonDisabled() {
        return !this.agreeChecked;
    }

    handleRegisterNow() {
        if (this.agreeChecked) {
            class NavigationMixin {
                navigateToScreen(screenName) {
                  // Use the lightning/navigation module to navigate to the specified screen
                  this[NavigationMixin.Navigate]({
                    type: 'standard__namedPage',
                    attributes: {
                      pageName: ''
                    }
                  });
                }
            }
        }
            // Navigate to the Signup_Form flow component
            /*this[NavigationMixin.Navigate]({
                type: 'standard__flow',
                attributes: {
                    flowApiName: 'Signup_Form' // Replace with the API name of your flow component
                }
            });*/
        
    