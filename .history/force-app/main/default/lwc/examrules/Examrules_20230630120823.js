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
            // Navigate to the Signup_Form flow component
            this[NavigationMixin.Navigate]({
                type: 'standard__Webpage',
                attributes: {
                    url: 'https://oscarit-e1-dev-ed.develop.lightning.force.com/lightning/r/Examination_Sighnup__c/a065i00000LuuxjAAB/view' // Replace with the API name of your flow component
                }
            });
        }
    }
    
}