
// let button = document.querySelector(".btn");

// button.addEventListener('click', function () {
//     document.querySelector("#my-button").classList.toggle(".btn");
// })




// let button = document.querySelector(".btn");

// let button = document.querySelector("#my-button")

// button.addEventListener("click", function(){
//     button.classList.toggle("click")
// })



const button = document.querySelector("#my-button");

let isSelected = false;

function toggleButton (selected) {
    if (selected) {
        button.classList.add("click")

    } else {
        button.classList.remove("click")
    }
}

button.addEventListener("click", function() {

    isSelected = !isSelected;

    toggleButton(isSelected)



})