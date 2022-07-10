// this variable stores the city input name
var cityName = document.querySelector("#city-input");

// this variable watches the search button
var citySearch = document.querySelector("#city-search");

// current weather
var currentCityWeather = [];

// future forecast
var dayOneForecast = [];
var dayTwoForecast = [];
var dayThreeForecast = [];
var dayFourForecast = [];
var dayFiveForecast = [];

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
                
                console.log(currentCityWeather, "Current Weather");

                dayOneTemp = data.daily[0].temp.day;
                dayOneHumidity = data.daily[0].humidity;
                dayOneWindSpeed = data.daily[0].wind_speed;
                dayOneUVI = data.daily[0].uvi;
                dayOneForecast.push({dayOneTemp}, {dayOneHumidity}, {dayOneWindSpeed}, {dayOneUVI});
                console.log(dayOneForecast, "Day 1");

                dayTwoTemp = data.daily[1].temp.day;
                dayTwoHumidity = data.daily[1].humidity;
                dayTwoWindSpeed = data.daily[1].wind_speed;
                dayTwoUVI = data.daily[1].uvi;
                dayTwoForecast.push({dayTwoTemp}, {dayTwoHumidity}, {dayTwoWindSpeed}, {dayTwoUVI});
                console.log(dayTwoForecast, "Day 2");

                dayThreeTemp = data.daily[2].temp.day;
                dayThreeHumidity = data.daily[2].humidity;
                dayThreeWindSpeed = data.daily[2].wind_speed;
                dayThreeUVI = data.daily[2].uvi;
                dayThreeForecast.push({dayThreeTemp}, {dayThreeHumidity}, {dayThreeWindSpeed}, {dayThreeUVI});
                console.log(dayThreeForecast, "Day 3");

                dayFourTemp = data.daily[3].temp.day;
                dayFourHumidity = data.daily[3].humidity;
                dayFourWindSpeed = data.daily[3].wind_speed;
                dayFourUVI = data.daily[3].uvi;
                dayFourForecast.push({dayFourTemp}, {dayFourHumidity}, {dayFourWindSpeed}, {dayFourUVI});
                console.log(dayFourForecast, "Day 4");

                dayFiveTemp = data.daily[4].temp.day;
                dayFiveHumidity = data.daily[4].humidity;
                dayFiveWindSpeed = data.daily[4].wind_speed;
                dayFiveUVI = data.daily[4].uvi;
                dayFiveForecast.push({dayFiveTemp}, {dayFiveHumidity}, {dayFiveWindSpeed}, {dayFiveUVI});
                console.log(dayFiveForecast, "Day 5");
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