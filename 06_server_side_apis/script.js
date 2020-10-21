

$(".weatherBtn").on("click", function(event){
    event.preventDefault();

    var city = $(".weatherSearch").val();
    var queryURL = "https://api.openweathermap.org/data/2.5//weather?q=" + city + "&units=imperial/uvi?lat={lat}&lon={lon}&appid=64dc0b69587cedd5ecde3512a843d7c5";


    // Ajax call
    $.ajax({
    url: queryURL,
    method: "GET"

    }).then(function(response) {

        var cityName = $("<h1>").html(response.name);
        var temp = $("<p>").html("Temperature: " + response.main.temp);
        var humid = $("<p>").html("Humidity: " + response.main.humidity);
        var windSpeed = $("<p>").html("Windspeed: " + response.wind.speed);
        var uvIndex1 = $("<p>").html(response.coord.lat);
        var uvIndex2 = $("<p>").html(response.coord.lon);

        console.log(response);

        $(".weatherCity").append(cityName, temp, humid, windSpeed, uvIndex1, uvIndex2);
        
        localStorage.setItem("city", JSON.stringify(response));

        // Creates button list on left side page.
        var cityBtn = $("<li>").html(response.name);

        cityBtn.addClass("btn btn-outline-secondary");
        $(".btnList").append(cityBtn);
        localStorage.setItem("list", JSON.stringify(response));
    })
    
})

