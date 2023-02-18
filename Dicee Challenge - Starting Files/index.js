var n=(Math.floor(Math.random()*6)+1);
var randimg="images/dice"+n+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimg);

var n1=Math.floor((Math.random()*6)+1);
var randimg1="images/dice"+n1+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randimg1);

if(n>n1){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(n===n1){
    document.querySelector("h1").innerHTML="It's a Draw";
}else{
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}