import { LightningElement, track } from 'lwc';

export default class CurrencyConverter extends LightningElement {
    @track fromCurrency = 'INR';
    @track toCurrency = 'USD';
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

        // Example: Using a conversion rate of 0.0145 to convert Indian Rupees to USD
        const conversionRate = 0.0145;

        if (this.fromCurrency === 'INR' && this.toCurrency === 'USD') {
            this.convertedAmount = (parseFloat(this.amount) * conversionRate).toFixed(2) + ' USD';
        } else if (this.fromCurrency === 'INR' && this.toCurrency === 'EUR') {
            const conversionRate = 0.0125; // Conversion rate for INR to EUR
            this.convertedAmount = (parseFloat(this.amount) * conversionRate).toFixed(2) + ' EUR';
        } else if (this.fromCurrency === 'INR' && this.toCurrency === 'GBP') {
            const conversionRate = 0.0112; // Conversion rate for INR to GBP
            this.convertedAmount = (parseFloat(this.amount) * conversionRate).toFixed(2) + ' GBP';
        } else {
            // Handle other currency conversions
        }
    }
}
