"use strict";

/*
function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
*/
//API DATA
//var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5328bb99fc309788816fd9447e0a2cc7&units=imperial';

/*
var city = document.querySelector('#city');
function searchCity() {
    var cityname = city.value;
}
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5328bb99fc309788816fd9447e0a2cc7&units=imperial';


var request = new XMLHttpRequest();
request.open('GET', requestURL);
//request.responseType = 'json';
request.send();

request.onload = function() {
    if (request.readyState == XMLHttpRequest.DONE && request.status === 200){
    //console.log(JSON.parse(this.responseText));
        var data = JSON.parse(this.responseText);
        var weatherData = data.weather[0].main;
        var tempMax = data.main.temp_max;
        var tempMin = data.main.temp_min;
        displayWeather(weatherData, tempMax, tempMin);
        //console.log(data);
        console.log(tempMin);
        
    } else if (request.readyState === XMLHttpRequest.DONE) {
        console.log('Something went wrong!');
    }
};
*/
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
//request.responseType = 'json';
request.send();

request.onload = function() {
    if (request.readyState == XMLHttpRequest.DONE && request.status === 200){
    //console.log(JSON.parse(this.responseText));
        var data = JSON.parse(this.responseText);
        var weatherData = (cityname, data.weather[0].main);
        var tempMax = data.main.temp_max;
        var tempMin = data.main.temp_min;
        searchCity();
        displayWeather(weatherData, tempMax, tempMin);
        //console.log(data);
        //console.log(tempMin);
        
    } else if (request.readyState === XMLHttpRequest.DONE) {
        console.log('Something went wrong!');
    }
}};