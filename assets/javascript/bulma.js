let favoriteButton = document.querySelector('#scoobyDoo')
let modalBg = document.querySelector('.modal-background')
let modal = document.querySelector('.modal')
let pokemonButton = document.querySelector('#bulbasaur');
let bozo = document.querySelector('#pikachu')

favoriteButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});
modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});


function displayMessage(message) {
    bozo.textContent = message;
};
pokemonButton.addEventListener("click", () => {
    event.preventDefault();
    var title = document.querySelector("#title").value;


    if (title === "") {
        displayMessage("Please Fill in The Blank!");
    } else {
        displayMessage("Thank You For Your Vote!");

        localStorage.setItem("votedTitle", title)
    }
});
