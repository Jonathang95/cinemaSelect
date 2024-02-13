let mylistButton = document.querySelector('#mylist')
let modalBg = document.querySelector('.modal-background')
let modal = document.querySelector('.modal')

mylistButton.addEventListener('click', () => {
   modal.classList.add('is-active'); 
});
modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});


let favoriteButton = document.querySelector('#scoobyDoo')

favoriteButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});
