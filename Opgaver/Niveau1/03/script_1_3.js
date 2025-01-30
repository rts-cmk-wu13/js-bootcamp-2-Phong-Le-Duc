


// function skjulElementViaCssSelector () {

//     let containerElm = document.querySelector(".container3")
//     if (containerElm) {
//         containerElm.style.display = "none";
//     }

// }

// hjælp fra emilie
function skjulElementViaCssSelector(cssSelector) {
    if (document.querySelector(cssSelector)) {
      document.querySelector(cssSelector).style.display = "none";
    }
  }
   
//   skjulElementViaCssSelector(".container2");