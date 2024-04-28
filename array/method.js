
// const fruits = ["Mango", "Banana", "Orange", "Apple"];
// const veg = ["Patoto", "Onion", "Tamoto", "LadyFinger"];

// // const shop = fruits.concat(veg);
// // const shop = fruits.valueOf();
// // const shop = Array.isArray(veg);
// const shop = veg.indexOf("Banana");                //   Nagative value means this Item is not available in the Array.

// document.write(shop);




const fruits = ["Mango", "Banana", "Orange", "Apple"];
document.getElementById("original").innerHTML = fruits;

function pop(){

    const fun = fruits.pop();
    document.getElementById("operand").innerHTML = fun;
    document.getElementById("result").innerHTML = fruits;

}

function push(){

    let input = prompt("Please enter fruit name whom you want to add.", "");
    const fun = fruits.push(input);
    document.getElementById("operand").innerHTML = fun;
    document.getElementById("result").innerHTML = fruits;

}

function join(){

    let input = prompt("Please enter value which you want to seperate all value.", "");
    const fun = fruits.join(input);
    document.getElementById("operand").innerHTML = fun;

}

function slicePo(){

    let start = prompt("Please enter number which you want to start.", "");
    let end = prompt("Please enter number which you want to end.", "");
    const fun = fruits.slice(parseInt(start), parseInt(end));
    document.getElementById("operand").innerHTML = fun;

}



function reverse(){

    const result = fruits.reverse();
    document.getElementById("operand").innerHTML = result;

}

function shift(){

    const fun = fruits.shift();
    document.getElementById("operand").innerHTML = fun;
    document.getElementById("result").innerHTML = fruits;

}
