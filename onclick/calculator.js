
function cal() {

    let opr1 = document.getElementById("opr1").value;
    let opr2 = document.getElementById("opr2").value;
    let ope = document.getElementsByClassName("ope")[0].value;

    let res;
    if (ope == "+") {
        res = parseInt(opr1) + parseInt(opr2);
    }

    if (ope == "-") {
        res = parseInt(opr1) - parseInt(opr2);
    }

    if (ope == "*") {
        res = parseInt(opr1) * parseInt(opr2);
    }

    if (ope == "/") {
        res = parseInt(opr1) / parseInt(opr2);
    }

    if (ope == "%") {
        res = parseInt(opr1) % parseInt(opr2);
    }

    document.getElementById("res").value = res;

}
