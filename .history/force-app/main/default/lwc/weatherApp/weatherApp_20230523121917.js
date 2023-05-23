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


import { LightningElement, track } from 'lwc';
import getWeatherData from '@salesforce/apex/WeatherController.getWeatherData';

export default class WeatherApp extends LightningElement {
    @track city = '';
    @track weatherData = null;
    @track errorMessage = null;
    @track isLoading = false;

    handleCityChange(event) {
        this.city = event.target.value;
    }

    getWeather() {
        this.isLoading = true;
        this.weatherData = null;
        this.errorMessage = null;

        getWeatherData({ city: this.city })
            .then(result => {
                if (result) {
                    this.weatherData = result;
                } else {
                    this.errorMessage = 'No weather data found for the specified city.';
                }
                this.isLoading = false;
            })
            .catch(error => {
                this.errorMessage = 'An error occurred while fetching weather data: ' + error.message;
                console.error(error);
                this.isLoading = false;
            });
    }
}