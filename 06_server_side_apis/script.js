// Api call on city search
function getWeather(city){

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial/uvi?lat={lat}&lon={lon}&appid=64dc0b69587cedd5ecde3512a843d7c5";

    // Ajax call
    return $.ajax({
    url: queryURL,
    method: "GET"

    })
}
var cities = [];

cities.push(city);

for (var i = 0; i< cities.length; i++){
    var city = cities[i];
}

$(".weatherBtn").on("click", function(event){
    event.preventDefault();

    var city = $(".weatherSearch").val();

    getWeather(city).then(function(response) {

        console.log(response);

        weatherCard(response);

        $(".btnList").on("click", function(){

            var get = localStorage.getItem(city);

            document.getElementById("weatherUpdate").innerHTML = get;

            $(".weatherCity").empty();

            var cityName = $("<h1>").html(response.city.name);
            var date = $("<h1>").html(response.list[0].dt_txt);
            var temp = $("<p>").html("Temperature: " + response.list[0].main.temp);
            var humid = $("<p>").html("Humidity: " + response.list[0].main.humidity);
            var windSpeed = $("<p>").html("Windspeed: " + response.list[0].wind.speed);
            var uvIndex1 = $("<p>").html(response.city.coord.lat);
            var uvIndex2 = $("<p>").html(response.city.coord.lon);

            $(".weatherCity").append(cityName, date, temp, humid, windSpeed, uvIndex1, uvIndex2);


        })

    })
    
})
// Function to display weather information
function weatherCard(response){


    $(".weatherCity").empty();

        var cityName = $("<h1>").html(response.city.name);
        var date = $("<h1>").html(response.list[0].dt_txt);
        var temp = $("<p>").html("Temperature: " + response.list[0].main.temp);
        var humid = $("<p>").html("Humidity: " + response.list[0].main.humidity);
        var windSpeed = $("<p>").html("Windspeed: " + response.list[0].wind.speed);
        var uvIndex1 = $("<p>").html(response.city.coord.lat);
        var uvIndex2 = $("<p>").html(response.city.coord.lon);

        $(".weatherCity").append(cityName, date, temp, humid, windSpeed, uvIndex1, uvIndex2);

        localStorage.setItem("city", JSON.stringify(response));

        // Creates button list on left side page and store to local storage.
        var cityBtn = $("<li>").html(response.city.name);

        var city = cityName;

        cityBtn.addClass("btn btn-outline-secondary mt-2");

        $(".btnList").append(cityBtn);
        // empty commands to refresh page
        $(".fiveDay").empty();
        $(".sixDay").empty();
        $(".sevenDay").empty();
        $(".eightDay").empty();
        $(".nineDay").empty();

        // Displays five day forecast day 2
        var date1 = $("<h1>").html(response.list[9].dt_txt);
        var temp1 = $("<p>").html("Temperature: " + response.list[9].main.temp);
        var humid1 = $("<p>").html("Humidity: " + response.list[9].main.humidity);

        $(".fiveDay").append(date1, temp1, humid1);

        // day 3 forecast
        var date2 = $("<h1>").html(response.list[15].dt_txt);
        var temp2 = $("<p>").html("Temperature: " + response.list[15].main.temp);
        var humid2 = $("<p>").html("Humidity: " + response.list[15].main.humidity);

        $(".sixDay").append(date2, temp2, humid2);

        // day 4 forecast
        var date3 = $("<h1>").html(response.list[22].dt_txt);
        var temp3 = $("<p>").html("Temperature: " + response.list[22].main.temp);
        var humid3 = $("<p>").html("Humidity: " + response.list[22].main.humidity);

        $(".sevenDay").append(date3, temp3, humid3);

        // day 4 forecast
        var date4 = $("<h1>").html(response.list[30].dt_txt);
        var temp4 = $("<p>").html("Temperature: " + response.list[30].main.temp);
        var humid4 = $("<p>").html("Humidity: " + response.list[30].main.humidity);

        $(".eightDay").append(date4, temp4, humid4);

        // day 4 forecast
        var date5 = $("<h1>").html(response.list[39].dt_txt);
        var temp5 = $("<p>").html("Temperature: " + response.list[39].main.temp);
        var humid5 = $("<p>").html("Humidity: " + response.list[39].main.humidity);

        $(".nineDay").append(date5, temp5, humid5);

}
