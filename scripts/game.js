const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
})

document.addEventListener("touchstart", function(event){
    jump();
})

function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setnterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        window.location.href="../index.html"
    }
}, 10 )
