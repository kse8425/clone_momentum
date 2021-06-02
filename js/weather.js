const weather = document.querySelector(".js-weather");
const wearherAPIKey = "fe19fe3fb553670422ac34a00f8e8315";
let locationObj;

function init() {
  if (localStorage.getItem("location") === null) {
    getLocation();
  } else {
    const tempObj = JSON.parse(localStorage.getItem("location"));
    const lat = tempObj.latitude;
    const lon = tempObj.longitude;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${wearherAPIKey}&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const img = document.createElement("img");
        const temp = Math.round(json.main.temp * 10) / 10;
        const icon = json.weather[0].icon;
        img.src = `http://openweathermap.org/img/wn/${icon}.png`;
        weather.innerHTML = temp;
        weather.appendChild(img);

        console.log();
      });
  }
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    locationObj = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    console.log(locationObj);
    saveLocation(locationObj);
  });
}

function saveLocation(obj) {
  localStorage.setItem("location", JSON.stringify(obj));
}
init();
