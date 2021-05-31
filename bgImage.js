const bg = document.querySelector(".js-bg");
const img = bg.querySelector("img");

const unslashAPIkey = "KDBrxEKZBr265JRUMrMcl-7cto9DHsvgkbqZPhahSKQ";
const randomNum1 = Math.floor(Math.random() * 10);
const randomNum2 = Math.floor(Math.random() * 100);

function init() {
  fetch(
    //`https://api.unsplash.com/search/photos?page=${randomNum2}&query=lake,forest&client_id=${unslashAPIkey}` // search
    `https://api.unsplash.com/photos/random?&query=lake&orientation=landscape&client_id=${unslashAPIkey}` // random
  )
    .then(function (result) {
      return result.json();
    })
    .then((array) => {
      console.log(array);
      // const url = array.results[randomNum1].urls; //raw , full ,regular
      const url = array.urls; //raw , full ,regular
      img.src = url.full;
      img.addEventListener("load", function (a) {
        console.log(a, "loading end");
      });
      console.log(url);
    });
}
init();
