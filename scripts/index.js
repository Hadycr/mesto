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

const popupName = document.querySelector('.popup__input-name');
const popupProfession = document.querySelector('.popup__input-profession');
const popupClosed = document.querySelector('.popup__closed-description');
const popup = document.querySelector('.popup');
const profileButton = document.querySelector('.profile__button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__form-description');
const elementsContainer = document.querySelector('.elements__items');
const popupDescription = document.querySelector('.popup_description');
const popupClosedPlace = document.querySelector('.popup__closed-place');
const formElementImg =  document.querySelector('.popup__form-img');
const popupNameImg = document.querySelector('.popup__input-title');
const popupLinks = document.querySelector('.popup__input-link');
const popupPlace = document.querySelector('.popup_place');
const elementImg = document.querySelector('.elements__img');
const profileAddButton = document.querySelector('.profile__add-button');
const popupPicture = document.querySelector('.popup_picture');
const popupClosedImg = document.querySelector('.popup__closed-img');

const creatCard = (cardLink, cardName) => {
  const template = document.querySelector('#elements__item-template');
  const card = template.content.cloneNode(true);
  card.querySelector('.elements__img').src = cardLink;
  card.querySelector('.elements__img').alt = cardName;
  card.querySelector('.elements__title').textContent  = cardName;
  card.querySelector('.elements__trash').addEventListener('click', (evt) => {
     evt.target.closest('.elements__item').remove(); 
  })
  card.querySelector('.elements__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like_dark'); 
 })
 card.querySelector('.elements__img').addEventListener('click', (evt) => {
  popupPicture.querySelector('.popup__photo').src = cardLink;
  popupPicture.querySelector('.popup__photo').alt = cardName;
  popupPicture.querySelector('.popup__title-photo').textContent = cardName;
  popupOpened(popupPicture);
 });
  return card;
}

const addCard = (cardLink, cardName) => {
  elementsContainer.prepend(creatCard(cardLink, cardName));
}

initialCards.forEach((card) => {
  addCard(card.link, card.name);
})

const popupOpened = (popup) => {
  popup.classList.add('popup_opened');
}

const popupClosedFunc = (popup) => {
  popup.classList.remove('popup_opened');
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupProfession.value;
  popupClosedFunc(popupDescription); 
}

const AddNewImg = (evt) => {
  evt.preventDefault();
  const cardLink = popupLinks.value;
  const cardName = popupNameImg.value;
  addCard (cardLink, cardName);
  popupClosedFunc(popupPlace); 
}

profileButton.addEventListener('click', () => {
  popupName.textContent = profileName.value;
  popupProfession.textContent = profileDescription.value;
  popupOpened(popupDescription);
});

formElement.addEventListener('submit', handleFormSubmit); 
popupClosed.addEventListener('click', () => {
  popupClosedFunc(popupDescription);
});

profileAddButton.addEventListener('click', () => {
  popupOpened(popupPlace);
}); 

formElementImg.addEventListener('submit', AddNewImg); 
popupClosedPlace.addEventListener('click', () => {
  popupClosedFunc(popupPlace);
});

popupClosedImg.addEventListener('click', () => {
  popupClosedFunc(popupPicture);
});

