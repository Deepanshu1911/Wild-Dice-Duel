var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber1 +".png";
var radomImage="images/"+ randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", radomImage);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);
if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="🎋 Panda Won";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🍺 Bear Won";
}
else{
  document.querySelector("h1").innerHTML="👔 It's a tie";
}
