let cardAdd = document.querySelector(".card-add");
let editCardAdd = document.querySelector(".profile__add-button");
let closeCardAdd = document.querySelector(".card-add__container-cross");
//let name = document.querySelector(".profile__title");
//let description = document.querySelector(".profile__subtitle");
let cardName = document.querySelector("#card-name");
let cardLink = document.querySelector("#card-link");
let cardElement = document.querySelector("#card");

function cardAddOpen () {
    cardAdd.classList.toggle('card-add_opened');
    //if (popup.classList.contains('card-add_opened')) {
       // formName.value = name.textContent
       // formDescription.value = description.textContent
   // }
};

function cardSubmitHandler (evt) {
    evt.preventDefault(); 

    //name.textContent = formName.value;
    //description.textContent = formDescription.value;
 
    const cardTemplate = document.querySelector('#card-template').content;
    const cardContent =  cardTemplate.cloneNode(true);
    const cardUnit = document.querySelector('.elements');

    cardContent.querySelector('.elements__card-image').src = cardLink.value;
    cardContent.querySelector('.elements__card-image').alt = cardName.value;
    cardContent.querySelector('.elements__card-title').textContent = cardName.value;

    if ((cardLink.value <= 0) || (cardName.value <= 0)) {
        alert('Форма должна быть заполнена');
    }
    else {
    cardUnit.prepend(cardContent);
    }

    cardLink.value = "";
    cardName.value = "";
    cardAddOpen();
   
};

editCardAdd.addEventListener('click', cardAddOpen);
closeCardAdd.addEventListener('click', cardAddOpen);
cardElement.addEventListener('submit', cardSubmitHandler);

