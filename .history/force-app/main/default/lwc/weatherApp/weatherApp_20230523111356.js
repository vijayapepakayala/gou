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
import { LightningElement, wire } from 'lwc';
import getWeatherData from '@salesforce/apex/WeatherController.getWeatherData';

export default class WeatherApp extends LightningElement {
    @wire(getWeatherData) weatherData;

    get hottestCityWeather() {
        let hottestCity = null;
        let maxTemperature = -Infinity;

        if (this.weatherData && this.weatherData.data) {
            this.weatherData.data.forEach(cityWeather => {
                if (cityWeather.currentWeather.temperature > maxTemperature) {
                    hottestCity = cityWeather;
                    maxTemperature = cityWeather.currentWeather.temperature;
                }
            });
        }

        return hottestCity;
    }
}
