var randomNumber1 = Math.floor(Math.random() * 6)+1;
document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");
console.log(randomNumber2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"
}