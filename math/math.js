var show = document.getElementsByTagName("h1")[0];
let input = document.getElementsByName("usrInp")[0];

function pi(){

show.innerText = Math.PI;

}

function genratRandom(){

show.innerText = Math.random();

}

function Round() {
    
show.innerText = Math.round(input.value);

}

function Ceil() {
    
show.innerText = Math.ceil(input.value);

}

function Floor() {
    
show.innerText = Math.floor(input.value);

}

function square() {
    
show.innerText = Math.sqrt(input.value);

}

function change() {
    
show.innerText = Math.abs(input.value);

}

function power(){

let x = parseInt(prompt("Please enter value which you want to power.", ""));    
let y = parseInt(prompt("Please enter value which you want to repeat.", ""));    

show.innerText = Math.pow(x, y);

}

function otp(){

alert("You want to OTP of numbers Zeros' write with One(1) in the Input box.");

show.innerText = Math.floor(Math.random() * input.value);

}

function Min(){

let x = parseInt(prompt("Please enter value ", ""));    
let y = parseInt(prompt("Please enter value ", ""));    
let z = parseInt(prompt("Please enter value ", ""));    

show.innerText = Math.min(x, y, z);

}

function Max(){

let x = parseInt(prompt("Please enter value ", ""));    
let y = parseInt(prompt("Please enter value ", ""));    
let z = parseInt(prompt("Please enter value ", ""));    

show.innerText = Math.max(x, y, z);

}