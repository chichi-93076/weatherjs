class Weather {
    constructor(city) {
        this.apiKey = '359876f2e9d003a5895e5e7b29ec41af';
        this.city = city;
    }


    // Fetch weather from API
    async getWeather() {
        const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();

        return  responseData;

    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }

}