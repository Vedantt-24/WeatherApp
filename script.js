const apiKey= "7477e43632a36e7ae1f5af30ffdfe10c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=banglore";


async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
}