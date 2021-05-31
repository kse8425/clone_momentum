const body = document.querySelector("body");
const unslashAPIkey = "KDBrxEKZBr265JRUMrMcl-7cto9DHsvgkbqZPhahSKQ";
const randomNum1 = Math.floor(Math.random() * 10);
const randomNum2 = Math.floor(Math.random() * 10);

function init() {
  fetch(
    //`https://api.unsplash.com/search/photos?page=${randomNum2}&query=lake,forest&client_id=${unslashAPIkey}` // search
    `https://api.unsplash.com/photos/random?&query=lake&orientation=landscape&client_id=${unslashAPIkey}` // random
  )
    .then(function (result) {
      return result.json();
    })
    .then((array) => {
      // const url = array.results[randomNum1].urls; //raw , full ,regular
      const img = document.createElement("img");
      const url = array.urls; //raw , full ,regular
      img.className = "bg";
      img.src = url.full;
      //img.src = "./img/1.jpg";
      img.addEventListener("load", function (a) {
        body.appendChild(img);
      });
    });
}
init();
