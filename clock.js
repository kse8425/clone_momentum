const clock = document.querySelector(".js-clock");

function init() {
  setClock();
  setInterval(setClock, 1000);
}

function setClock() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

init();
