var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var ranomDiceImage1 = "dice"+randomNumber1+".png";
var ranomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource1 = "images/"+ranomDiceImage1;
var randomImageSource2 = "images/"+ranomDiceImage2;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h3").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h3").innerHTML = "Draw";
}
else{
    document.querySelector("h3").innerHTML = "🚩Player 2 wins";
}
