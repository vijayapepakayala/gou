// import { LightningElement, wire } from 'lwc';
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
