let popup = document.querySelector(".popup");
let editPopup = document.querySelector(".profile__edit-button");
let closePopup = document.querySelector(".popup__container-cross");
let name = document.querySelector(".profile__title");
let description = document.querySelector(".profile__subtitle");
let formName = document.querySelector("#form-name");
let formDescription = document.querySelector("#form-description");
let formElement = document.querySelector("form");

function popupOpen () {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')) {
        formName.value = name.textContent
        formDescription.value = description.textContent
    }
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    name.textContent = formName.value;
    description.textContent = formDescription.value;
    
    popupOpen();
}

editPopup.addEventListener('click', popupOpen);
closePopup.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
