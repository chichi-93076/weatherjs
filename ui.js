class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.visibility = document.getElementById('w-visibility');
        this.feels_like = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');       
    }

    paint(Weather) {        
        this.location.textContent = Weather.name;        
        this.description.textContent = Weather.weather[0].main;
        this.string.textContent = Weather.main.temp;
        // console.log(Weather.weather[0].icon);
        const icon_url = `https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`;        
        this.icon.setAttribute('src', icon_url);        
        this.humidity.textContent = `Humidity:${Weather.main.humidity}%`;        
        this.feels_like.textContent = `Feels Like:${Weather.main.feels_like}`;
        this.visibility.textContent = `Visibility:${Weather.visibility}`;
        this.wind.textContent = `Wind speed:${Weather.wind.speed} meter/sec`;
    }

}