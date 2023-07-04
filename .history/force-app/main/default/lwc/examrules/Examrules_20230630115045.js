import { LightningElement,track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import { FlowNavigationMixin } from 'lightning/navigation';
export default class Examrules extends FlowNavigationMixin (LightningElement) {
    @track agreeChecked = false;

    handleAgreeChange(event) {
        this.agreeChecked = event.target.checked;
    }

    get isRegisterButtonDisabled() {
        return !this.agreeChecked;
    }

    handleRegisterNow() {
        if (this.agreeChecked) {
            // Navigate to the Signup_Form flow component
           /* this[NavigationMixin.Navigate]({
                type: 'standard__flow',
                attributes: {
                    flowApiName: 'Signup_Form' // Replace with the API name of your flow component
                }
            });*/
            // Use the flow navigation methods to start the flow
    this[NavigationMixin.Navigate]({
        type: 'standard__flow',
        attributes: {
          flowApiName: 'Your_Flow_Name' // Replace with the API name of your flow
        },
        state: {
          // Provide any state variables if required by your flow
          // Example: variableName: 'variableValue'
        }
      });
    }
        }
    }
    
