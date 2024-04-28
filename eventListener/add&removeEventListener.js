
var x = 0;

document.getElementsByTagName("button")[0].addEventListener("click", counter);

function counter(){

    document.getElementsByTagName("h1")[0].innerText = x;
    x++;

}

document.getElementsByTagName("button")[0].addEventListener("mouseenter", function(){
    document.getElementsByTagName("h1")[0].style.fontSize = "50px";
    document.getElementsByTagName("h1")[0].style.color = "green";
    document.getElementsByTagName("h1")[0].style.fontWeight = "800";
});

function stop(){

    document.getElementsByTagName("button")[0].removeEventListener("click", counter);

}
