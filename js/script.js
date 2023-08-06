var fans = document.querySelector(".fans");
console.log(fans);
var fish = document.querySelector(".fish");
console.log(fish);
var pets = document.querySelector(".pets");
console.log(pets);

fans.addEventListener("mouseover", function () {
    fans.innerText = "123K"
    fish.innerText = "47K"
    pets.innerText = "20K"
});
fish.addEventListener("mouseover", function () {
    fans.innerText = "123K"
    fish.innerText = "47K"
    pets.innerText = "20K"
});
pets.addEventListener("mouseover", function () {
    fans.innerText = "123K"
    fish.innerText = "47K"
    pets.innerText = "20K"
});
