let cardAdd = document.querySelector(".card-add");
let editCardAdd = document.querySelector(".profile__add-button");
let closeCardAdd = document.querySelector(".card-add__container-cross");
let cardName = document.querySelector("#card-name");
let cardLink = document.querySelector("#card-link");
let cardElement = document.querySelector("#card");

function cardAddOpen () {
    cardAdd.classList.toggle('card-add_opened');
};

function cardSubmitHandler (evt) {
    evt.preventDefault(); 

    const cardTemplate = document.querySelector('#card-template').content;
    const cardContent =  cardTemplate.cloneNode(true);
    const cardUnit = document.querySelector('.elements');

    cardContent.querySelector('.elements__card-image').src = cardLink.value;
    cardContent.querySelector('.elements__card-image').alt = cardName.value;
    cardContent.querySelector('.elements__card-title').textContent = cardName.value;
    
    cardContent.querySelector('.elements__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('elements__like_liked');
    });

    cardContent.querySelector('.elements__delete').addEventListener('click', function() {
        const delButton = document.querySelector('.elements__delete');
        const toDel = delButton.closest('.elements__card');
        toDel.remove();
    });

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