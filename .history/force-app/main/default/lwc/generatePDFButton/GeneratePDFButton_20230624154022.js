import { LightningElement, api } from 'lwc';

export default class GeneratePDFButton extends LightningElement {
    @api recordId;

    generatePDF() {
        // Call an Apex controller method to generate the PDF
        generateAccountPDF({ accountId: this.recordId })
            .then((result) => {
                // PDF generation successful
                // You can perform further actions, like opening the PDF or showing a success message
            })
            .catch((error) => {
                // Handle error states
                console.log('Error generating PDF:', error);
            });
    }
}
