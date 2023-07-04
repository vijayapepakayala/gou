import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class SelectExaminationCOurse extends LightningElement {

    componentOptions = [
        { label: 'SFDC ADMIN', value: 'sfdc_admin' },
        { label: 'SFDC DEVELOPMENT', value: 'sfdc_development' },
        { label: 'SFDC LWC', value: 'sfdc_lwc' },
        { label: 'JAVA', value: 'java' }
    ];

    handleSelection(event) {
        const selectedValue = event.detail.value;
        let pageReference;

        switch (selectedValue) {
            case 'sfdc_admin':
                pageReference = {
                    type: 'standard__webPage',
                    attributes: {
                        url: 'https://example.com/sfdc_admin_exam_paper'
                    }
                };
                break;
            case 'sfdc_development':
                pageReference = {
                    type: 'standard__webPage',
                    attributes: {
                        url: 'https://example.com/sfdc_development_exam_paper'
                    }
                };
                break;
            case 'sfdc_lwc':
                pageReference = {
                    type: 'standard__webPage',
                    attributes: {
                        url: 'https://example.com/sfdc_lwc_exam_paper'
                    }
                };
                break;
            case 'java':
                pageReference = {
                    type: 'standard__webPage',
                    attributes: {
                        url: 'https://example.com/java_exam_paper'
                    }
                };
                break;
            default:
                break;
        }

        if (pageReference) {
            this[NavigationMixin.Navigate](pageReference);
        }
    }
}


