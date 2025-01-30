


// function skjulElementViaCssSelector () {

//     let containerElm = document.querySelector(".container3")
//     if (containerElm) {
//         containerElm.style.display = "none";
//     }

// }

// hjælp fra emilie
// function skjulElementViaCssSelector(cssSelector) {
//     if (document.querySelector(cssSelector)) {
//       document.querySelector(cssSelector).style.display = "none";
//     }
//   }
   
//   skjulElementViaCssSelector(".container2");



function skjulElementViaCssSelector (CssSelector) {
  let element = document.querySelector(CssSelector)
  skjulElement(element)

}

function skjulElementerViaCssSelector (CssSelector) {
  let elements = document.querySelectorAll(CssSelector)
  elements.foreach(function(element) {
    skjulElement(element)

  })
}


function skjulElement (element) {
  if (element != null) element.style.display = "none"
}

skjulElementViaCssSelector(".bodycopy")
skjulElementViaCssSelector(".headline")