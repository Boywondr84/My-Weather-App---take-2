// this variable stores the city input name
var cityName = document.querySelector("#city-input");

// this variable watches the search button
var citySearch = document.querySelector("#city-search");
// city search history
var cityHistory = document.querySelector("#history");

// current weather
var weatherEl = document.querySelector("#current-weather");
var currentEl = document.querySelector("#current");
var cityTempEl = document.querySelector("#Temperature");
var cityHumidityEl = document.querySelector("#Humidity");
var cityWindSpeedEl = document.querySelector("#WindSpeed");
var cityUVIEl = document.querySelector("#UVI");
var cityUVIBackground = document.querySelector(".UVI");

// future forecast
var dayOneTempForecastEl = document.querySelector("#One-Temperature");
var dayOneHumidityForecastEl = document.querySelector("#One-Humidity");
var dayOneWindForecastEl = document.querySelector("#One-Wind");
var dayOneDateEl = document.querySelector("#day1");
var future1El = document.querySelector("#future1");

var dayTwoTempForecastEl = document.querySelector("#Two-Temperature");
var dayTwoHumidityForecastEl = document.querySelector("#Two-Humidity");
var dayTWoWindForecastEl = document.querySelector("#Two-Wind");
var dayTwoDateEl = document.querySelector("#day2");
var future2El = document.querySelector("#future2");

var dayThreeTempForecastEl = document.querySelector("#Three-Temperature");
var dayThreeHumidityForecastEl = document.querySelector("#Three-Humidity");
var dayThreeWindForecastEl = document.querySelector("#Three-Wind");
var dayThreeDateEl = document.querySelector("#day3");
var future3El = document.querySelector("#future3");

var dayFourTempForecastEl = document.querySelector("#Four-Temperature");
var dayFourHumidityForecastEl = document.querySelector("#Four-Humidity");
var dayFourWindForecastEl = document.querySelector("#Four-Wind");
var dayFourDateEl = document.querySelector("#day4");
var future4El = document.querySelector("#future4");

var dayFiveTempForecastEl = document.querySelector("#Five-Temperature");
var dayFiveHumidityForecastEl = document.querySelector("#Five-Humidity");
var dayFiveWindForecastEl = document.querySelector("#Five-Wind");
var dayFiveDateEl = document.querySelector("#day5");
var future5El = document.querySelector("#future5");

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
var weatherData = function (cityLat, cityLon) {
    var getTheWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial&exclude=minutely&appid=386d421121bbbad42dc1ad82319e7fc0";
    fetch(getTheWeather).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                // console.log(data.daily[1].dt);

                // weather icon
                var currentIconEl = document.createElement("img");
                var currentIcon = data.current.weather[0].icon;
                currentIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
                currentEl.appendChild(currentIconEl);

                // cityTemp = data.current.temp;
                var currentTemp = Math.round(data.current.temp);
                var currentTempEl = document.createElement("span");
                currentTempEl.textContent = currentTemp;
                cityTempEl.appendChild(document.createTextNode(currentTemp + "F"));


                // cityHumidity = data.current.humidity;
                var currentHumidity = data.current.humidity;
                var currentHumidityEl = document.createElement("span");
                currentHumidityEl.textContent = currentHumidity;
                cityHumidityEl.appendChild(document.createTextNode(currentHumidity + "%"));

                // cityWind = data.current.wind_speed;
                var currentWind = Math.round(data.current.wind_speed);
                var currentWindEl = document.createElement("span");
                currentWindEl.textContent = currentWind;
                cityWindSpeedEl.appendChild(document.createTextNode(currentWind + "MPH"));

                // cityUVI = data.current.uvi;
                var currentUVI = data.current.uvi;
                var currentUVIEl = document.createElement("span");
                currentUVIEl.textContent = currentUVI;
                cityUVIEl.appendChild(document.createTextNode(currentUVI));

                // color alert based on UVI index rating
                if (currentUVI <= 2) {
                    cityUVIBackground.style.background = "green";
                } else if (currentUVI <= 5) {
                    cityUVIBackground.style.background = "goldenrod";
                } else {
                    cityUVIBackground.style.background = "red";
                };

                // forecast data
                var future1Icon = data.daily[1].weather[0].icon;
                var future1IconEl = document.createElement("img")
                future1IconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + future1Icon + "@2x.png");
                future1El.appendChild(future1IconEl);

                var dayOneTemp = Math.round(data.daily[1].temp.day);
                var dayOneTempEl = document.createElement("span");
                dayOneTempEl.textContent = dayOneTemp;
                dayOneTempForecastEl.appendChild(document.createTextNode(dayOneTemp + "F"));

                var dayOneHumidity = data.daily[1].humidity;
                var dayOneHumidityEl = document.createElement("span");
                dayOneHumidityEl.textContent = dayOneHumidity;
                dayOneHumidityForecastEl.appendChild(document.createTextNode(dayOneHumidity + "%"));

                var dayOneWindSpeed = Math.round(data.daily[1].wind_speed);
                var dayOneWindEl = document.createElement("span");
                dayOneWindEl.textContent = dayOneWindSpeed;
                dayOneWindForecastEl.appendChild(document.createTextNode(dayOneWindSpeed + "MPH"));

                var dailyDate1 = moment.unix(data.daily[1].dt).format("dd MM DD YYYY");
                // console.log(dailyDate);
                var dailyDate1El = document.createElement("span");
                dailyDate1El.textContent = dailyDate1;
                dayOneDateEl.appendChild(document.createTextNode(dailyDate1));

                var future2Icon = data.daily[2].weather[0].icon;
                var future2IconEl = document.createElement("img");
                future2IconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + future2Icon + "@2x.png");
                future2El.appendChild(future2IconEl);

                var dayTwoTemp = Math.round(data.daily[2].temp.day);
                var dayTwoTempEl = document.createElement("span");
                dayTwoTempEl.textContent = dayTwoTemp;
                dayTwoTempForecastEl.appendChild(document.createTextNode(dayTwoTemp + "F"));

                var dayTwoHumidity = data.daily[2].humidity;
                var dayTwoHumidityEl = document.createElement("span");
                dayTwoHumidityEl.textContent = dayTwoHumidity;
                dayTwoHumidityForecastEl.appendChild(document.createTextNode(dayTwoHumidity + "%"));

                var dayTwoWindSpeed = Math.round(data.daily[2].wind_speed);
                var dayTwoWindSpeedEl = document.createElement("span");
                dayTwoWindSpeedEl.textContent = dayTwoWindSpeed;
                dayTWoWindForecastEl.appendChild(document.createTextNode(dayTwoWindSpeed + "MPH"));

                var dailyDate2 = moment.unix(data.daily[2].dt).format("dd MM DD YYYY");
                var dailyDate2El = document.createElement("span");
                dailyDate2El.textContent = dailyDate2;
                dayTwoDateEl.appendChild(document.createTextNode(dailyDate2));

                var future3Icon = data.daily[3].weather[0].icon;
                var future3IconEl = document.createElement("img");
                future3IconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + future3Icon + "@2x.png");
                future3El.appendChild(future3IconEl);

                var dayThreeTemp = Math.round(data.daily[3].temp.day);
                var dayThreeTempEl = document.createElement("span");
                dayThreeTempEl.textContent = dayThreeTemp;
                dayThreeTempForecastEl.appendChild(document.createTextNode(dayThreeTemp + "F"));

                var dayThreeHumidity = data.daily[3].humidity;
                var dayThreeHumidityEl = document.createElement("span");
                dayThreeHumidityEl.textContent = dayThreeHumidity;
                dayThreeHumidityForecastEl.appendChild(document.createTextNode(dayThreeHumidity + "%"));

                var dayThreeWindSpeed = Math.round(data.daily[3].wind_speed);
                var dayThreeWindSpeedEl = document.createElement("span");
                dayThreeWindSpeedEl.textContent = dayThreeWindSpeed;
                dayThreeWindForecastEl.appendChild(document.createTextNode(dayThreeWindSpeed + "MPH"));

                var dailyDate3 = moment.unix(data.daily[3].dt).format("dd MM DD YYYY");
                var dailyDate3El = document.createElement("span");
                dailyDate3El.textContent = dailyDate3;
                dayThreeDateEl.appendChild(document.createTextNode(dailyDate3));

                var future4Icon = data.daily[4].weather[0].icon
                var future4IconEl = document.createElement("img");
                future4IconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + future4Icon + "@2x.png");
                future4El.appendChild(future4IconEl);

                var dayFourTemp = Math.round(data.daily[4].temp.day);
                var dayFourTempEl = document.createElement("span");
                dayFourTempEl.textContent = dayFourTemp;
                dayFourTempForecastEl.appendChild(document.createTextNode(dayFourTemp + "F"));

                var dayFourHumidity = data.daily[4].humidity;
                var dayFourHumidityEl = document.createElement("span");
                dayFourHumidityEl.textContent = dayFourHumidity;
                dayFourHumidityForecastEl.appendChild(document.createTextNode(dayFourHumidity + "%"));

                var dayFourWindSpeed = Math.round(data.daily[4].wind_speed);
                var dayFourWindSpeedEl = document.createElement("span");
                dayFourWindSpeedEl.textContent = dayFourWindSpeed;
                dayFourWindForecastEl.appendChild(document.createTextNode(dayFourWindSpeed + "MPH"));

                var dailyDate4 = moment.unix(data.daily[4].dt).format("dd MM DD YYYY");
                var dailyDate4El = document.createElement("span");
                dailyDate4El.textContent = dailyDate4;
                dayFourDateEl.appendChild(document.createTextNode(dailyDate4));

                var future5Icon = data.daily[5].weather[0].icon;
                var future5IconEl = document.createElement("img");
                future5IconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + future5Icon + "@2x.png");
                future5El.appendChild(future5IconEl);

                var dayFiveTemp = Math.round(data.daily[5].temp.day);
                var dayFiveTempEl = document.createElement("span");
                dayFiveTempEl.textContent = dayFiveTemp;
                dayFiveTempForecastEl.appendChild(document.createTextNode(dayFiveTemp + "F"));

                var dayFiveHumidity = data.daily[5].humidity;
                var dayFiveHumidityEl = document.createElement("span");
                dayFiveHumidityEl.textContent = dayFiveHumidity;
                dayFiveHumidityForecastEl.appendChild(document.createTextNode(dayFiveHumidity + "%"));

                var dayFiveWindSpeed = Math.round(data.daily[5].wind_speed);
                var dayFiveWindSpeedEl = document.createElement("span");
                dayFiveWindSpeedEl.textContent = dayFiveWindSpeed;
                dayFiveWindForecastEl.appendChild(document.createTextNode(dayFiveWindSpeed + "MPH"));

                var dailyDate5 = moment.unix(data.daily[5].dt).format("dd MM DD YYYY");
                var dailyDate5El = document.createElement("span");
                dailyDate5El.textContent = dailyDate5;
                dayFiveDateEl.appendChild(document.createTextNode(dailyDate5));

            })
        }
    })
};

// get the weather icon
var weatherIcon = function (icon) {
    var getWeatherIcon = "https://openweathermap.org/img/wn/" + icon + ".png";
    fetch(getWeatherIcon).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data.current.weather[0].icon);

                cityIcon = data.current.weather[0].icon;
                console.log(cityIcon);
                weatherIcon(icon);
            })
        }
    })
};

var cityFormSubmitEl = function (event) {
    event.preventDefault();
    // console.log(event);
    var cityNameEl = cityName.value.trim();
    // console.log(cityNameEl);
    var currentCityEl = document.createElement("span");
    currentCityEl.textContent = cityNameEl;
    weatherEl.appendChild(document.createTextNode(cityNameEl));

    if (cityNameEl) {
        getCity(cityNameEl);
        var cityHistoryEl = cityNameEl;
        var cityHistoryDOMEl = document.createElement("button");
        cityHistoryDOMEl.textContent = cityHistoryEl;
        cityHistory.appendChild(cityHistoryDOMEl);

        // blank out search bar
        cityName.value = "";
    } else {
        window.alert("Enter a city");
    }function reset() {
    reset("reset-form");
    }
};

citySearch.addEventListener("click", cityFormSubmitEl);

// save to local storage
