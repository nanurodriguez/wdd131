// JavaScript for Weather Data (using a free weather API)
const apiKey = '11e9c4b53cf2b721056b994e1c0aacee';
const city = 'Buenos Aires'; // Or another city in Argentina

const temperatureElement = document.getElementById('temperature');
const conditionsElement = document.getElementById('conditions');
const windElement = document.getElementById('wind');
const windchillElement = document.getElementById('windchill');

function calculateWindChill(temp, windSpeed) {
    if (temp < 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    } else {
        return null;
    }
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        temperatureElement.textContent = `${data.main.temp}°C`;
        conditionsElement.textContent = data.weather[0].description;
        windElement.textContent = `${data.wind.speed} m/s`;

        const windChillValue = calculateWindChill(data.main.temp, data.wind.speed);
        windchillElement.textContent = windChillValue !== null ? `${windChillValue.toFixed(2)}°C` : 'N/A';
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        temperatureElement.textContent = 'N/A';
        conditionsElement.textContent = 'N/A';
        windElement.textContent = 'N/A';
        windchillElement.textContent = 'N/A';
    });

// JavaScript for Current Year and Last Modified
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();