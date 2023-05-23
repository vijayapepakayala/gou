import { LightningElement, track } from 'lwc';

export default class CurrencyConverter extends LightningElement {
    @track fromCurrency = 'USD';
    @track toCurrency = 'INR';
    @track amount = '';
    @track convertedAmount = '';

    currencyOptions = [
        { label: 'USD', value: 'USD' },
        { label: 'INR', value: 'INR' },
        { label: 'EUR', value: 'EUR' },
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

        // Example: Using arbitrary conversion rates for USD, INR, and EUR
        const usdToInr = 75.0;
        const inrToUsd = 1 / usdToInr;
        const usdToEur = 0.85;
        const eurToUsd = 1 / usdToEur;
        const inrToEur = inrToUsd * usdToEur;
        const eurToInr = 1 / inrToEur;

        if (this.fromCurrency === 'USD' && this.toCurrency === 'INR') {
            this.convertedAmount = (parseFloat(this.amount) * usdToInr).toFixed(2) + ' INR';
        } else if (this.fromCurrency === 'INR' && this.toCurrency === 'USD') {
            this.convertedAmount = (parseFloat(this.amount) * inrToUsd).toFixed(2) + ' USD';
        } else if (this.fromCurrency === 'USD' && this.toCurrency === 'EUR') {
            this.convertedAmount = (parseFloat(this.amount) * usdToEur).toFixed(2) + ' EUR';
        } else if (this.fromCurrency === 'EUR' && this.toCurrency === 'USD') {
            this.convertedAmount = (parseFloat(this.amount) * eurToUsd).toFixed(2) + ' USD';
        } else if (this.fromCurrency === 'INR' && this.toCurrency === 'EUR') {
            this.convertedAmount = (parseFloat(this.amount) * inrToEur).toFixed(2) + ' EUR';
        } else if (this.fromCurrency === 'EUR' && this.toCurrency === 'INR') {
            this.convertedAmount = (parseFloat(this.amount) * eurToInr).toFixed(2) + ' INR';
        } else {
            // Handle other currency conversions
        }
    }
}
