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

const cardUnit = document.querySelector('.elements');

/*
delButton.addEventListener('click', function () {
    const delCard = delButton.closest('.elements__card');
    delCard.remove();
  });*/

const newCard = card => {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardContent =  cardTemplate.cloneNode(true);
    cardContent.querySelector('.elements__card-image').src = card.link;
    cardContent.querySelector('.elements__card-image').alt = card.name;
    cardContent.querySelector('.elements__card-title').textContent = card.name;
    
    cardContent.querySelector('.elements__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('elements__like_liked');
    });

    
    cardContent.querySelector('.elements__delete').addEventListener('click', function() {
        const delButton = document.querySelector('.elements__delete');
        const toDel = delButton.closest('.elements__card');
        toDel.remove();
    });

    
    cardUnit.append(cardContent);
};

initialCards.forEach(newCard);

