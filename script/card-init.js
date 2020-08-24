const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


/*const cardsContainer = document.querySelector('.elements');

const nameCard = initialCards.map(function (item) {
    return item.name;
});

const linkCard = initialCards.map(function (item) {
    return item.link;
});


function loadCard() {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardUnit = document.querySelector('.elements');

    const cardContent = cardTemplate.cloneNode(true);

    cardUnit.querySelector('.elements__card-image').src = linkCard;
    cardUnit.querySelector('.elements__card-title').textContent = getName;

    cardUnit.append(cardContent);
};

initialCards.forEach(loadCard);*/

const newCard = card => {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardContent =  cardTemplate.cloneNode(true);
    const cardUnit = document.querySelector('.elements');
    cardContent.querySelector('.elements__card-image').src = card.link;
    cardContent.querySelector('.elements__card-image').alt = card.name;
    cardContent.querySelector('.elements__card-title').textContent = card.name;

    cardUnit.append(cardContent);
};

initialCards.forEach(newCard);