import { LightningElement, track } from 'lwc';

export default class CurrencyConverter extends LightningElement {
    @track fromCurrency = '';
    @track toCurrency = '';
    @track amount = '';
    @track convertedAmount = '';

    currencyOptions = [
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'GBP', value: 'GBP' },
        // Add more currency options as needed
    ];

    handleFromCurrencyChange(event) {
        this.fromCurrency = event.target.value;
    }

    handleToCurrencyChange(event) {
        this.toCurrency = event.target.value;
    }

    handleAmountChange(event) {
        this.amount = event.target.value;
    }

    handleConvert() {
        // Perform currency conversion logic using an external API or formula
        // Update the 'convertedAmount' property with the converted value
        // You can use JavaScript Fetch API or Apex Controller to make API calls

        // For demonstration purposes, we'll simply reverse the amount
        this.convertedAmount = this.amount.split('').reverse().join('');
    }
}
