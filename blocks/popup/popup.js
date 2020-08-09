let popup = document.querySelector(".popup");
let editPopup = document.querySelector(".profile__edit-button");
let closePopup = document.querySelector(".popup__container-cross");

function popupOpen() {
    popup.classList.toggle('popup_opened');
}

editPopup.addEventListener('click', popupOpen);
closePopup.addEventListener('click', popupOpen);

let name = document.querySelector(".profile__title");
let description = document.querySelector(".profile__subtitle");
let formName = document.querySelector(".form-edit__name");
let formDescription = document.querySelector(".form-edit__description");

function getName() {
    formName.setAttribute('placeholder', `${name.textContent}`);
    formDescription.setAttribute('placeholder', `${description.textContent}`);
};

getName();