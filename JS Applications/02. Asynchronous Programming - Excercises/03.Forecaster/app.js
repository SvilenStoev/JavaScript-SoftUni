function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);
}

attachEvents();

async function getWeather() {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.style.display = 'block';
    forecastDiv.textContent = 'Loading...';

    try {
        const location = document.getElementById('location').value;

        const currLocationCode = await getLocationCode(location);

        const [currentData, upcomingData] = await Promise.all([
            getCurrWeather(currLocationCode),
            getForecast(currLocationCode)
        ]);

        const degreesSym = '&#176';

        const condition = currentData.forecast.condition;
        const lowTemp = currentData.forecast.low;
        const highTemp = currentData.forecast.high;

        forecastDiv.innerHTML = `<div id="current">
    <div class="label">Current conditions</div>
    <div id="forecasts">
        <span class="condition symbol">${getSymbol(condition)}</span>
        <span class="condition">
            <span class="forecast-data">${currentData.name}</span>
            <span class="forecast-data">${lowTemp}${degreesSym}/${highTemp}${degreesSym}</span>
            <span class="forecast-data">${condition}</span>
        </span>
    </div>
</div>
<div id="upcoming">
    <div class="label">Three-day forecast</div>
    <div class="forecast-info">
        ${getForecastHTML(upcomingData, degreesSym)}
    </div>
</div>`;

    } catch (error) {
        forecastDiv.style.display = '';
        forecastDiv.innerHTML = error.message;
    }
}

async function getLocationCode(locationName) {
    const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');

    const data = await response.json();

    const currLocation = data.find(l => l.name == locationName);

    if (!currLocation) {
        throw new Error('Error');
    }

    return currLocation.code;
}

async function getCurrWeather(code) {
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);

    const data = await response.json();

    if (!data) {
        throw new Error('Error');
    }

    return data;
}

async function getForecast(code) {
    const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);

    const data = await response.json();

    if (!data) {
        throw new Error('Error');
    }

    return data;
}

function getSymbol(condition) {
    let result = '';

    switch (condition) {
        case 'Sunny': result = '&#x2600'; break;
        case 'Partly sunny': result = '&#x26C5'; break;
        case 'Overcast': result = '&#x2601'; break;
        case 'Rain': result = '&#x2614'; break;
    }

    return result;
}

function getForecastHTML(upcomingData, degreesSym) {
    let result = '';

    for (let currDay of upcomingData.forecast) {
        const conditionUpc = currDay.condition;
        const lowTempUpc = currDay.low;
        const highTempUpc = currDay.high;

        result += `            <span class="upcoming">
        <span class="symbol">${getSymbol(conditionUpc)}</span>
        <span class="forecast-data">${lowTempUpc}${degreesSym}/${highTempUpc}${degreesSym}</span>
        <span class="forecast-data">${conditionUpc}</span>
        </span>`;
    }

    return result;
};