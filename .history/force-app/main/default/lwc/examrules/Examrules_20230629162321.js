import { LightningElement,track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class Examrules extends NavigationMixin (LightningElement) {
    @track agreeChecked = false;

    handleAgreeChange(event) {
        this.agreeChecked = event.target.checked;
    }

    handleRegisterNow() {
        if (this.agreeChecked) {
            // Navigate to another component
            this[NavigationMixin.Navigate]({
                type: 'standard__component',
                attributes: {
                    componentName: 'c.someOtherComponent' // Replace with the API name or reference of the other component
                }
            });
        }
    }
}