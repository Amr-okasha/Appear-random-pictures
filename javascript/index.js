let imagesArea = document.getElementsByClassName("pic")[0];

array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
setInterval(function () {
  let randomNumber = Math.floor(Math.random() * array.length);
  console.log();
  imagesArea.src = `./images/${array[randomNumber]}.jpg`;
}, 1000);
