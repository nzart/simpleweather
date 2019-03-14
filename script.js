"use strict";


// Display Weather    
var cond = document.querySelector('#cond');
var high = document.querySelector('#high');
var low = document.querySelector('#low');

function displayWeather(weatherData, tempMax, tempMin) {
   cond.textContent = weatherData; 
   high.textContent = tempMax; 
   low.textContent = tempMin; 
}

var city = document.querySelector('#city');
function searchCity() {
    var cityname = city.value;

    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&appid=5328bb99fc309788816fd9447e0a2cc7&units=imperial';


    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.send();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE && request.status === 200){
            var data = JSON.parse(this.responseText);
            var weatherData = (cityname, data.weather[0].main);
            var tempMax = data.main.temp_max;
            var tempMin = data.main.temp_min;
            searchCity();
            displayWeather(weatherData, tempMax, tempMin);
            
        } else if (request.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong!');
        }
    }
};


// Return event listener

document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                searchCity();
            }
        });
