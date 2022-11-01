 function attachEvents() {
  const wetherIcons = {
    Sunny: "&#x2600",
    PartialySunny: "&#x26C5",
    Overcast: "&#x2601",
    Rain: "&#x2614",
    Degrees: "&#176",
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
    

  }
}

attachEvents();
