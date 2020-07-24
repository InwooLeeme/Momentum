
var weather = document.querySelector('.js-weather'),
    locate = document.querySelector('.js-place'),
    weatherIcon = document.querySelector('#weather-icon');
var API_KEY = "bb407ffd7cb86483d91e304b88d5db02";
var COORDS = 'coords';

function getWeather(lat, lon){
fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        var temperature = json.main.temp,
            place = json.name,
            icon = json.weather[0].main;
        weather.innerText = `${temperature}`;
        locate.innerText = `${place}`;
        if(icon === 'Clouds'){
            weatherIcon.className += "fas fa-cloud fa-2x";
        }
        /* console.log(json.weather[0].main);
        console.log(weatherIcon); */
    });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(poistion){

    var latitude = poistion.coords.latitude,
    longitude = poistion.coords.longitude,
    coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}



function loadCoords(){
    var loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        var parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }

}


function init(){
    loadCoords();
}

init();