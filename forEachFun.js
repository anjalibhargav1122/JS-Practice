
const cars = ["car1", "car2", "car3", "car4"];
cars.forEach(fun);

function fun(item , index){

document.write(`${index} => ${item} <br/>`);

}


cars.forEach(after);
function after(item, index, array){
   
    document.write(`${array[index]} = ${item} + ${index} <br/>`)

}