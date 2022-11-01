 function attachEvents() {
    const degreeIcon = "&#176";
  function weatherIcons (condition) {
    if (condition === 'Sunny') {
        return "&#x2600";
    }else if (condition === 'Partialy sunny') {
        return "&#x26C5";
    }else if (condition === 'Overcast') {
        return "&#x2601";
    }else if (condition === 'Rain') {
        return "&#x2614";
    }
  };

  document.getElementById('submit').addEventListener('click',getWeather);

  async function getWeather() {

    //Barcelona
    let cityNameInput = document.getElementById("location").value;
    

    const url = "http://localhost:3030/jsonstore/forecaster/locations";

    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error("Error");
    }

    //List of objects(cityCode,cityName)
    const listOfCitiesInfo = await response.json();

    let searchedCity = listOfCitiesInfo.find(c => c.name === cityNameInput);

    getCurrentCondition(searchedCity.code);
    

  }

  //Current city code: barcelona
  async function getCurrentCondition(cityCode){
    const url = `http://localhost:3030/jsonstore/forecaster/today/${cityCode}`;

    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error("Error");
    }

    const currentCityTodayWeatherInfo = await response.json();

    let currentConditionDiv = document.getElementById('forecast');
    currentConditionDiv.style.display = 'block';

    let current = document.getElementById('current');
    
    let weatherCondition = weatherIcons(currentCityTodayWeatherInfo.forecast.condition);

    let forcastsDiv = document.createElement('div');
    forcastsDiv.classList.add('forecasts');

    let conditionSymbolSpan = document.createElement('span');
    conditionSymbolSpan.classList.add('condition');
    conditionSymbolSpan.classList.add('symbol');
    conditionSymbolSpan.innerHTML = weatherCondition;

    let conditionSpan = document.createElement('span');
    conditionSpan.classList.add('condition');

    let span1 = document.createElement('span');
    span1.classList.add('forecast-data');
    span1.innerText = currentCityTodayWeatherInfo.name;


    let span2 = document.createElement('span');
    span2.classList.add('forecast-data');
    let lowTemp = currentCityTodayWeatherInfo.forecast.low;
    let highTemp = currentCityTodayWeatherInfo.forecast.high;
    span2.innerHTML = `${lowTemp}${degreeIcon}/${highTemp}${degreeIcon}`;

    let span3 = document.createElement('span');
    span3.classList.add('forecast-data');
    span3.innerText = currentCityTodayWeatherInfo.forecast.condition;

    conditionSpan.appendChild(span1);
    conditionSpan.appendChild(span2);
    conditionSpan.appendChild(span3);

    forcastsDiv.appendChild(conditionSymbolSpan);
    forcastsDiv.appendChild(conditionSpan);

    current.appendChild(forcastsDiv);
    
  }
}

attachEvents();
