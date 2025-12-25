// CLOCK + DAY + DATE
function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    document.getElementById("clock").innerText = `${h}:${m}:${s}`;
    document.getElementById("dayDate").innerText =
        `${days[now.getDay()]}, ${now.toDateString()}`;
}

setInterval(updateClock, 1000);
updateClock();


// WEATHER SECTION
const apiKey = "94042cf4177692f9039feb1cf19272cb";   // MUST be real
const city = "Kadapa";

async function getWeather() {
    try {
        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather API error");
        }

        const data = await response.json();

        document.getElementById("city").innerText =
            "City: " + data.name;

        document.getElementById("temperature").innerText =
            "Temperature: " + data.main.temp + " °C";

        document.getElementById("condition").innerText =
            "Condition: " + data.weather[0].main;

    } catch (error) {
        document.getElementById("condition").innerText =
            "Weather data not available";
        console.error(error);
    }
}

getWeather();
