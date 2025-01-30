
let divisionElm = document.querySelector(".division-result");

function divide(x, y) {
    return x / y;
    
}

let outerResult = divide(10,2);

divisionElm.innerHTML += `<p>${outerResult}</p>`;

// divide()
console.log(outerResult);