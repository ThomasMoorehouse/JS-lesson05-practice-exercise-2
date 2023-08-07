var fans = document.querySelector(".fans");
//console.log(fans);
var fish = document.querySelector(".fish");
//console.log(fish);
var pets = document.querySelector(".pets");
//console.log(pets);

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

var toggle = document.querySelector("#toggle")
var ball = document.querySelector(".ball")
var h1 = document.querySelector("h1")
var body = document.querySelector("body")
//console.log(body);
toggle.addEventListener("click", function() {
    if (body.classList.contains("light")) {
        body.classList.remove("light")
        ball.classList.remove("move-right")
        h1.innerText = "Stealth Quincy"
    } else {
        body.classList.add("light")
        ball.classList.add("move-right")
    }
})