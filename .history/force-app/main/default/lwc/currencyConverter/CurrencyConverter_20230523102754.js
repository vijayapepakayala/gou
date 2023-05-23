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
    handleConvert() {
        // Perform currency conversion logic using an external API or formula
        // Update the 'convertedAmount' property with the converted value
    
        // Example: Using a conversion rate of 0.0145 to convert Indian Rupees to USD
        const conversionRate = 0.0145;
    
        if (this.fromCurrency === 'INR' && this.toCurrency === 'USD') {
            this.convertedAmount = (parseFloat(this.amount) * conversionRate).toFixed(2) + ' USD';
        } else if (this.fromCurrency === 'INR' && this.toCurrency === 'EUR') {
            // Perform conversion to EUR
        } else if (this.fromCurrency === 'INR' && this.toCurrency === 'GBP') {
            // Perform conversion to GBP
        } else {
            // Handle other currency conversions
        }
    }
    
}
