
let buttons = document.querySelectorAll(".btn");




buttons.forEach(function (button) {

    button.addEventListener('click', function (event) {
        console.log(event.target);

        // Fjern "btn-active" fra alle knapper
        buttons.forEach(function(btn) {
            btn.classList.remove("btn-active");
        });


        // Tilføj "btn-active" til den aktuelle knap
        button.classList.add("btn-active");

    })
})

