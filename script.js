document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    var locationInput = document.getElementById('location');
    var location = locationInput.value.trim();

    if (location === '') {
        alert('Please enter a city name.');
        return;
    }

    var apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    var apiUrl = '`https://goweather.herokuapp.com/weather/' + location + '&appid=' + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                showWeatherError(data.message);
            } else {
                var temperature = data.main.temp;
                var description = data.weather[0].description;
                var weatherInfo = 'Temperature: ' + temperature + '°C<br>' + 'Description: ' + description;
                showWeatherInfo(weatherInfo);
            }
        })
        .catch(error => {
            showWeatherError('An error occurred while fetching weather data.');
        });

    locationInput.value = '';
}

function showWeatherInfo(info) {
    var weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.innerHTML = info;
}

function showWeatherError(message) {
    var weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.innerHTML = 'Error: ' + message;
}
