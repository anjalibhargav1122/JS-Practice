
function move() {

    let red = document.getElementById("red");
    let pos = 0;

    var anim = setInterval(am, 5);

    function am() {

        if (pos == 450) {
            clearInterval(anim);
        }
        
        else {
            pos++;
            red.style.top = `${pos}px`;
            red.style.left = `${pos}px`;
        }
    }


}