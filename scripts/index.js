import Card from './Card.js';
import {FormValidator, validation} from './FormValidator.js';
import {initialCards} from './cards.js';
import {openPopup, closePopupEsc, closePopup, popupPicture, popupPicturePhoto, popupPictureTitle} from './utils.js';



const profilePopupNameInput = document.querySelector('.popup__input-name');
const profilePopupProfessionInput = document.querySelector('.popup__input-profession');
const popupClosed = document.querySelector('.popup__closed-description');
const profileButton = document.querySelector('.profile__button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__form-description');
const elementsContainer = document.querySelector('.elements__items');
const popupDescription = document.querySelector('.popup_type_description');
const popupClosedPlace = document.querySelector('.popup__closed-place');
const formElementImg =  document.querySelector('.popup__form-img');
const placePopupTitleInput = document.querySelector('.popup__input-title'); 
const placePopupLinksInput = document.querySelector('.popup__input-link'); 
const popupPlace = document.querySelector('.popup_type_place');
const profileAddButton = document.querySelector('.profile__add-button');
/*const popupPicture = document.querySelector('.popup_type_picture');*/
/*const popupPicturePhoto = popupPicture.querySelector('.popup__photo');
const popupPictureTitle = popupPicture.querySelector('.popup__title-photo');*/
const popupClosedImg = document.querySelector('.popup__closed-img');
/*const template = document.querySelector('#elements__item-template');*/
const buttonOfPopup = document.querySelector('.popup__save');

/*const createCard = (cardLink, cardName) => {
  const card = template.content.cloneNode(true);
  const elementImgOfCard = card.querySelector('.element__img');
  elementImgOfCard.src = cardLink;
  elementImgOfCard.alt = cardName;
  card.querySelector('.element__title').textContent  = cardName;
  card.querySelector('.element__trash').addEventListener('click', (evt) => {
     evt.target.closest('.element__item').remove(); 
  })
  card.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_dark'); 
 })
 card.querySelector('.element__img').addEventListener('click', (evt) => {
  popupPicturePhoto.src = cardLink;
  popupPicturePhoto.alt = cardName;
  popupPictureTitle.textContent = cardName;
  openPopup(popupPicture);
 });
  return card;
}
*/
const createCard = (data, cardSelector) => {  //функция создание карточке из template
  const card = new Card(data, cardSelector);
  elementsContainer.prepend(card.generateCard());
}

const addCard = (cardLink, cardName) => {                         //функция добавления карточки пользователем
  const data = {
    cardName,
    cardLink
  };
  createCard(data, '#elements__item-template');
}


initialCards.forEach((item) => {                            //Добавление карточек из initialCards
  createCard(item, '#elements__item-template');
});

const addNewImg = (evt) => {   //добавление новой карточки пользователем
  evt.preventDefault();
  const cardLink = placePopupLinksInput.value;
  const cardName = placePopupTitleInput.value;
  addCard(cardLink, cardName);
  closePopup(popupPlace); 
  formElementImg.reset();
  
  validateOfImg();
}



/*
export const closePopupEsc = (evt) => {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openPopup); 
  } 
}*/
const validateOfDescription  = () => {
const validOfDescription = new FormValidator(validation, formElement);   //Валидация для формы описания
validOfDescription.enableValidation();
validOfDescription.hideErrors();
}

const validateOfImg = () =>{
const validOfImg = new FormValidator(validation, formElementImg);  //Валидация для формы картинки
validOfImg.enableValidation();
validOfImg.hideErrors()
}

/*const  hideErrors = () = {
  formList.forEach((form) => {
    const newElement = new FormValidator(validationSettings, form);
    newElement.clearValidation();
  })
};*/


/*initialCards.forEach((card) => {
  addCard(card.link, card.name);
})*/



/*const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}*/
/*
const closePopup = (popup) => { 
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  formElementImg.reset();
  validOfDescription.hideErrors();
  validOfImg.hideErrors();
}
*/
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = profilePopupNameInput.value;
  profileDescription.textContent = profilePopupProfessionInput.value;
  closePopup(popupDescription); 
/*  validOfImg.hideErrors();
  validOfDescription.hideErrors();*/
}



const closePopupOverlay = (evt) => {                   //функция закрытия вне зоны
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

profileButton.addEventListener('click', () => {
  profilePopupNameInput.value  = profileName.textContent;
  profilePopupProfessionInput.value = profileDescription.textContent;
  openPopup(popupDescription);
  /*validateOfImg();*/
});

formElement.addEventListener('submit', handleFormSubmit); 
popupClosed.addEventListener('click', () => {
  closePopup(popupDescription);
});

profileAddButton.addEventListener('click', () => {
  openPopup(popupPlace);
  const button = popupPlace.querySelector('.popup__save');
  validateOfImg();
}); 

formElementImg.addEventListener('submit', addNewImg);    //событие создание картинкис названием
popupClosedPlace.addEventListener('click', () => {
  closePopup(popupPlace);
  validOfImg.hideErrors();
  validOfDescription.hideErrors();
});

popupClosedImg.addEventListener('click', () => {        //событие по закрытию на крестик увеличенного изображения   
  closePopup(popupPicture);
});

popupDescription.addEventListener('click', closePopupOverlay);  //событие по закртию Наименования вне зоны
popupPlace.addEventListener('click', closePopupOverlay);          //событие по закртию Картинки  вне зоны
popupPicture.addEventListener('click', closePopupOverlay);        //событие по закртию Увеличенной картинки вне зоны

/*enableValidation(validation);*/

