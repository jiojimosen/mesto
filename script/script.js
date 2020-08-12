let popup = document.querySelector(".popup");
let editPopup = document.querySelector(".profile__edit-button");
let closePopup = document.querySelector(".popup__container-cross");
let name = document.querySelector(".profile__title");
let description = document.querySelector(".profile__subtitle");
let formName = document.querySelector("#form-name");
let formDescription = document.querySelector("#form-description");
let formElement = document.querySelector("form");

function getName() {
    formName.setAttribute('value', `${name.textContent}`);
    formDescription.setAttribute('value', `${description.textContent}`);
};

function popupOpen() {
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    let nameInput = document.querySelector("#form-name"); 
    let jobInput = document.querySelector("#form-description");
    
    let selName = nameInput.value;
    let selJob = jobInput.value;

    let insName = document.querySelector(".profile__title");
    let insJob = document.querySelector(".profile__subtitle");

    insName.textContent = selName;
    insJob.textContent = selJob;
    
    popupOpen();
}

editPopup.addEventListener('click', popupOpen);
editPopup.addEventListener('click', getName);
closePopup.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);
