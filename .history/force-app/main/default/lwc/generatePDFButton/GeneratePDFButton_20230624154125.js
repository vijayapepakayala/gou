import { LightningElement, api } from 'lwc';
import generateAccountPDF from '@salesforce/apex/GeneratePDFButtonController.generateAccountPDF';

export default class GeneratePDFButton extends LightningElement {
    @api recordId;

    generatePDF() {
        generateAccountPDF({ accountId: this.recordId })
            .then(result => {
                // PDF generation successful
                // You can perform further actions, like opening the PDF or showing a success message
            })
            .catch(error => {
                // Handle error states
                console.error('Error generating PDF:', error);
            });
    }
}
