
let r = prompt("Please enter number you want to print row in star pattern.", "");

for (let i = 1; i <= r; i++) {

    for (let j = 1; j <= i; j++) {

        document.write("* ");
    }

    document.write("<br/>");
}



for (let i = r; i >= 1; i--) {

    for (let j = 1; j <= i; j++) {

        document.write("* ");
    }

    document.write("<br/>");
}