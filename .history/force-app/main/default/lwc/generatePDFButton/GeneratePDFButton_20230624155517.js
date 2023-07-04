import { LightningElement, track } from 'lwc';
import generateAccountPDF from '@salesforce/apex/GeneratePDFButtonController.generateAccountPDF';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript } from 'lightning/platformResourceLoader';
import pdfMake from '@salesforce/resourceUrl/pdfMake';

export default class GeneratePDFButton extends LightningElement {
    @track recordId;

    async connectedCallback() {
        await loadScript(this, pdfMake);
    }

    generatePDF() {
        this.generateAccountPDF(this.recordId)
            .then((pdfData) => {
                this.saveAsPDF(pdfData);
            })
            .catch((error) => {
                this.showToast('Error', 'An error occurred while generating the PDF.', 'error');
                console.error('Error generating PDF:', error);
            });
    }

    generateAccountPDF(accountId) {
        return new Promise((resolve, reject) => {
            // Query the necessary Account record(s) and generate the tabular PDF report
            // You can customize the query and report generation logic as per your requirements
            // Here's a simplified example:

            const columns = [
                { header: 'Account Name', field: 'Name' },
                { header: 'Industry', field: 'Industry' },
                { header: 'Phone', field: 'Phone' }
            ];

            // Query the Account record
            const recordData = [
                { Name: 'Test Account', Industry: 'Technology', Phone: '1234567890' }
            ];

            const reportData = {
                columns: columns,
                data: recordData
            };

            const documentDefinition = {
                content: [
                    { text: 'Account Report', style: 'header' },
                    {
                        table: {
                            headerRows: 1,
                            widths: ['*', '*', '*'],
                            body: [
                                columns.map((column) => column.header),
                                ...recordData.map((record) => columns.map((column) => record[column.field]))
                            ]
                        }
                    }
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        alignment: 'center',
                        margin: [0, 0, 0, 10]
                    }
                }
            };

            const pdfData = pdfMake.createPdf(documentDefinition);

            resolve(pdfData);
        });
    }

    saveAsPDF(pdfData) {
        pdfData.download('AccountReport.pdf');
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
