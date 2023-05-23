// import { LightningElement, track } from 'lwc';
// import getWeatherData from '@salesforce/apex/WeatherController.getWeatherData';

// export default class WeatherApp extends LightningElement {
//     @track city = '';
//     @track weatherData = null;
//     @track errorMessage = null;
//     @track isLoading = false;

//     handleCityChange(event) {
//         this.city = event.target.value;
//     }

//     getWeather() {
//         this.isLoading = true;
//         this.weatherData = null;
//         this.errorMessage = null;

//         getWeatherData({ city: this.city })
//             .then(result => {
//                 this.weatherData = result;
//                 this.isLoading = false;
//             })
//             .catch(error => {
//                 this.errorMessage = 'An error occurred while fetching weather data.';
//                 this.isLoading = false;
//             });
//     }
// }
//2 type
// import { LightningElement, track } from 'lwc';
// import getWeatherData from '@salesforce/apex/WeatherController.getWeatherData';

// export default class WeatherApp extends LightningElement {
//     @track city = '';
//     @track weatherData = null;
//     @track errorMessage = null;
//     @track isLoading = false;

//     handleCityChange(event) {
//         this.city = event.target.value;
//     }

//     getWeather() {
//         this.isLoading = true;
//         this.weatherData = null;
//         this.errorMessage = null;

//         getWeatherData({ city: this.city })
//             .then(result => {
//                 if (result) {
//                     this.weatherData = result;
//                 } else {
//                     this.errorMessage = 'No weather data found for the specified city.';
//                 }
//                 this.isLoading = false;
//             })
//             .catch(error => {
//                 this.errorMessage = 'An error occurred while fetching weather data.';
//                 this.isLoading = false;
//             });
//     }
// }

//3
// import { LightningElement, track } from 'lwc';
// import getWeatherData from '@salesforce/apex/WeatherController.getWeatherData';

// export default class WeatherApp extends LightningElement {
//     @track city = '';
//     @track weatherData = null;
//     @track errorMessage = null;
//     @track isLoading = false;

//     handleCityChange(event) {
//         this.city = event.target.value;
//     }

//     getWeather() {
//         this.isLoading = true;
//         this.weatherData = null;
//         this.errorMessage = null;

//         getWeatherData({ city: this.city })
//             .then(result => {
//                 if (result) {
//                     this.weatherData = result;
//                 } else {
//                     this.errorMessage = 'No weather data found for the specified city.';
//                 }
//                 this.isLoading = false;
//             })
//             .catch(error => {
//                 this.errorMessage = 'An error occurred while fetching weather data: ' + error.message;
//                 console.error(error);
//                 this.isLoading = false;
//             });
//     }
// }
//4
// import { LightningElement, track } from 'lwc';
// import getWeatherData from '@salesforce/apex/WeatherController.getWeatherData';

// export default class WeatherApp extends LightningElement {
//     @track city = '';
//     @track weatherData = null;
//     @track errorMessage = null;
//     @track isLoading = false;

//     handleCityChange(event) {
//         this.city = event.target.value;
//     }

//     getWeather() {
//         this.isLoading = true;
//         this.weatherData = null;
//         this.errorMessage = null;

//         getWeatherData({ city: this.city })
//             .then(result => {
//                 if (result) {
//                     this.weatherData = result;
//                 } else {
//                     this.errorMessage = 'No weather data found for the specified city.';
//                 }
//                 this.isLoading = false;
//             })
//             .catch(error => {
//                 this.errorMessage = 'An error occurred while fetching weather data: ' + (error.message || JSON.stringify(error));
//                 console.error(error);
//                 this.isLoading = false;
//             });
//     }
// }
import { LightningElement } from 'lwc';
import fetchWeatherInfo from "@salesforce/apex/WeatherCtrl.fetchWeatherInfo";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 
export default class WeatherLwcComponent extends LightningElement {
    countryOptions = [
        { "label": "India", "value": "IN" },
        { "label": "USA", "value": "US" },
        { "label": "Turkey", "value": "TR" },
        { "label": "Australia", "value": "AU" }
    ];
 
    countryCode;
    zipCode;
    showSpinner = false;
    result = {};
    //check field validation
    handleCheckValidation() {
        let isValid = true;
        let inputFields = this.template.querySelectorAll('.fieldvalidate');
        inputFields.forEach(inputField => {
            if(!inputField.checkValidity()) {
                inputField.reportValidity();
                isValid = false;
            }
 
            if(inputField.name == "country"){
                this.countryCode = inputField.value;
            } else if(inputField.name == "pincode"){
                this.zipCode = inputField.value;
            }
        });
        return isValid;
    }
 
    handleValidation(event) {
        if(this.handleCheckValidation()) {
            this.handleSpinner();
            //send data to server side to check wetaher
            fetchWeatherInfo({zipCode : this.zipCode, countryCode : this.countryCode})
            .then(result => {
                //do something
                console.log(result.name);
                result.temp = (result.temp - 274.15).toFixed(2);
                result.sunset = this.convertUnixToTime(result.sunset);
                result.sunrise = this.convertUnixToTime(result.sunrise);
 
                this.result = result;
 
                this.handleSpinner();
            })
            .catch((error) => {
                //Let's send the user a toast with our custom error message
                const evt = new ShowToastEvent({
                    title: "Yikes!",
                    message: error.body.message,
                    variant: "error",
                });
                this.dispatchEvent(evt);
                this.handleSpinner();
            })
        }
    }
 
    convertUnixToTime(unixtimestamp){
        console.log(unixtimestamp);
        var dt = unixtimestamp * 1000;
        var myDate = new Date(dt);
        console.log(myDate);
        return(myDate.toLocaleString());
    }
 
    handleSpinner(){
        this.showSpinner = !this.showSpinner;
    }
}