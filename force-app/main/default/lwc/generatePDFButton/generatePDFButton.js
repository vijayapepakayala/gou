import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import jsPDF from '@salesforce/resourceUrl/jsPDF';

// Define the Account fields to retrieve
const FIELDS = ['Account.Name', 'Account.Industry', 'Account.Phone'];

export default class AccountPDFButton extends LightningElement {
    @track recordId;
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    account;

    async connectedCallback() {
        await loadScript(this, jsPDF);
        await loadStyle(this, jsPDF + '/jspdf.css');
    }

    downloadPDF() {
        const accountData = this.account.data;
        if (accountData) {
            const doc = new jsPDF();
            const { Name, Industry, Phone } = accountData.fields;
            const pdfContent = `Account Name: ${Name.value}\nIndustry: ${Industry.value}\nPhone: ${Phone.value}`;

            doc.text(pdfContent, 10, 10); // Customize the positioning of the content

            doc.save('AccountRecord.pdf');

            this.showToast('Success', 'PDF downloaded successfully.', 'success');
        } else {
            this.showToast('Error', 'Account data is not available.', 'error');
        }
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}
