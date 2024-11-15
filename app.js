// Replace this with your OpenWeather API key
const apiKey = "1457687c876a3bb73f2d9a41bc64a5ea";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        console.log(data);

        // Check if the city is found
        if (data.cod === "404") {
            alert(data.message);
            return;
        }

        // Extract relevant weather information
        const temperature = data.main.temp;

        document.getElementById("weatherDisplay").innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${temperature} °C </p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not retrieve weather data. Please try again later.");
    }
}
