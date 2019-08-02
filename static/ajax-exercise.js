"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  $.get('/fortune', (fortune) => {
    const fortuneDiv = document.querySelector('#fortune-text');
    fortuneDiv.innerHTML = fortune;
    }
  )

}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();


    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function(response){
        const forecast = response.forecast;
        const weatherDiv = document.querySelector('#weather-info');
        weatherDiv.innerHTML = forecast;
        }
      );


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


