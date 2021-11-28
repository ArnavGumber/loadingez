/* 

LoadingEZ.js

Programmer - Arnav Gumber (https://arnavgumber.github.io/codeinfinitewitharnav)

Version - 1.1.0

*/

document.body.innerHTML = "<div id='loadingEZ_LoadScreen' style='height:100%;width:100%;background:white;position:fixed;display:flex;align-items:center;justify-content:center;z-index:100000000000;'><center><div style='height:150px;width:150px;border:solid transparent 15px;border-top:solid blue 15px;border-radius:50%;animation:loaderEZanim1 3s linear infinite;'><div style='height:100px;width:100px;border:solid transparent 15px;border-top:solid red 15px;border-radius:50%;animation:loaderEZanim2 2s linear infinite;'><div style='height:50px;width:50px;border:solid transparent 15px;border-top:solid lime 15px;border-radius:50%;animation:loaderEZanim3 1s linear infinite;'></div></div></div></center></div>" + document.body.innerHTML;
document.body.style.overflow = 'hidden';
var loadingEZlocation = document.getElementsByTagName("head");
loadingEZlocation[0].innerHTML = loadingEZlocation[0].innerHTML + '<style>@keyframes loaderEZanim1 {0% {transform:rotate(0deg);}100% {transform:rotate(360deg);}}@keyframes loaderEZanim2 {0% {transform:rotate(0deg);}100% {transform:rotate(360deg);}}@keyframes loaderEZanim3 {0% {transform:rotate(0deg);}100% {transform:rotate(360deg);}}</style>'
var loadingEZrandomNo = Math.floor(Math.random() * 1500) + 1000;
setTimeout( function() {
document.getElementById("loadingEZ_LoadScreen").style.display = 'none';
document.body.style.overflow = 'auto';
}, loadingEZrandomNo);
var loadingEZattribute = document.body.getAttribute('dark');
if (loadingEZattribute == "true") {
    document.getElementById("loadingEZ_LoadScreen").style.background = "black";
}
