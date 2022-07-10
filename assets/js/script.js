// this variable stores the city input name
var cityName = document.querySelector("#city-input");

// this variable watches the search button
var citySearch = document.querySelector("#city-search");

// current weather
var currentCityWeather = [];

// Use city input name to get Lat & Lon coordinates
var getCity = function (city) {
    var apiLatLonUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=386d421121bbbad42dc1ad82319e7fc0";

    fetch(apiLatLonUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                // console.log(data);

                // store Lat & Lon:
                cityLat = data[0].lat;
                // console.log(cityLat, 'lat');

                cityLon = data[0].lon;
                // console.log(cityLon, 'lon');
                weatherData(cityLat, cityLon);
            })
        }
    })
};

// get the weather
var weatherData = function(cityLat, cityLon) {
    var getTheWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial&exclude=minutely&appid=386d421121bbbad42dc1ad82319e7fc0";
    fetch(getTheWeather).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                // console.log(data);
                // console.log(data.current.temp);
                // console.log(data.current.humidity);
                // console.log(data.current.wind_speed);
                // console.log(data.current.uvi);

                cityTemp = data.current.temp;
                cityHumidity = data.current.humidity;
                cityWind = data.current.wind_speed;
                cityUVI = data.current.uvi;
                currentCityWeather.push({Temperature, cityTemp}, {Humidity, cityHumidity}, {WindSpeed, cityWind}, {UVI, cityUVI});
                
                console.log(currentCityWeather);
            })
        }
    })
};

var cityFormSubmitEl = function (event) {
    event.preventDefault();
    // console.log(event);
    var cityNameEl = cityName.value.trim();
    // console.log(cityNameEl);

    if (cityNameEl) {
        getCity(cityNameEl);

        // blank out search bar
        cityName.value = "";

    }
};

citySearch.addEventListener("click", cityFormSubmitEl);