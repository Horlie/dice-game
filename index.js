function GenerateNumber(){
    return Math.floor(Math.random() * 6)+1;
}

document.querySelector("button").addEventListener("click", function(){
    let randomNumber1 = GenerateNumber();
    let randomNumber2 = GenerateNumber();
    document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");
    document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}

document.querySelector("button").classList.add("pressed");
setTimeout(function(){
    document.querySelector("button").classList.remove("pressed")
}, 100);
});