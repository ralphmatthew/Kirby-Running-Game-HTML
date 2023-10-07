var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    
        setTimeout(function () {
            character.classList.remove("animate");
        }, 300);
    }
}

let isAlive = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        alert("Boo! ლ(́◉◞౪◟◉‵ლ) You lose. ");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
  });