
let toDat = new Date();

function date(){

    document.getElementById("res").innerText = toDat;

}

function year(){

    document.getElementById("res").innerText = toDat.getFullYear();

}

function month(){

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] ;

    document.getElementById("res").innerText = month[toDat.getMonth()];

}

function toDate(){

    document.getElementById("res").innerText = toDat.getDate();

}

function day(){

    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("res").innerText = day[toDat.getDay()];
}

function hours(){

    document.getElementById("res").innerText = toDat.getHours();

}

function minutes(){
    
    document.getElementById("res").innerText = toDat.getMinutes();
    
}

function seconds(){
    
    document.getElementById("res").innerText = toDat.getSeconds();
    
}

function time(){
    
    document.getElementById("res").innerText = toDat.getTime();
    
}

function miliseconds(){
    
    document.getElementById("res").innerText = toDat.getMilliseconds();
    
}
