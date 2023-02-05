import AllCard from './AllCard.js';
import {FormValidator, validation} from './FormValidator.js';
import {initialCards} from './cards.js';
import {openPopup, closePopup, popupPicture} from './utils.js';

const profilePopupNameInput = document.querySelector('.popup__input-name');
const profilePopupProfessionInput = document.querySelector('.popup__input-profession');
const popupClosed = document.querySelector('.popup__closed-description');
const popupClosedPlace = document.querySelector('.popup__closed-place');
const popupClosedImg = document.querySelector('.popup__closed-img');
const profileButton = document.querySelector('.profile__button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElementDescription = document.querySelector('.popup__form-description');
const formElementImg =  document.querySelector('.popup__form-img');
const elementsContainer = document.querySelector('.elements__items');
const popupDescription = document.querySelector('.popup_type_description');
const popupPlace = document.querySelector('.popup_type_place');
const placePopupTitleInput = document.querySelector('.popup__input-title'); 
const placePopupLinksInput = document.querySelector('.popup__input-link'); 
const profileAddButton = document.querySelector('.profile__add-button');


const createCard = (data, cardSelector) => {
  const card = new AllCard(data, cardSelector);
  elementsContainer.prepend(card.generateCard());
}


const addCard = (name, link) => {
  const data = {
    name,
    link
  };
  createCard(data, '#elements__item-template');
}


initialCards.forEach((item) => {
  createCard(item, '#elements__item-template');
});


const validateOfDescription  = () => {
  const validOfDescription = new FormValidator(validation, formElementDescription);
  validOfDescription.enableValidation();
  validOfDescription.hideErrors();
  validOfDescription.disableSubmitButton();
}
 

const validateOfImg = () => {
  const validOfImg = new FormValidator(validation, formElementImg);
  validOfImg.enableValidation();
  validOfImg.hideErrors();
  validOfImg.disableSubmitButton();
}


const addNewImg = (evt) => {
  evt.preventDefault();
  const link = placePopupLinksInput.value;
  const name = placePopupTitleInput.value;
  addCard(name, link);
  closePopup(popupPlace); 
}


const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = profilePopupNameInput.value;
  profileDescription.textContent = profilePopupProfessionInput.value;
  closePopup(popupDescription);
}


const closePopupOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}


profileButton.addEventListener('click', () => {
  profilePopupNameInput.value  = profileName.textContent;
  profilePopupProfessionInput.value = profileDescription.textContent;
  openPopup(popupDescription);
  validateOfDescription();
});


formElementDescription.addEventListener('submit', handleFormSubmit);


popupClosed.addEventListener('click', () => {
  closePopup(popupDescription);
});


profileAddButton.addEventListener('click', () => {
  openPopup(popupPlace);
  validateOfImg();
});


formElementImg.addEventListener('submit', addNewImg);


popupClosedPlace.addEventListener('click', () => {
  closePopup(popupPlace);
});


popupClosedImg.addEventListener('click', () => {
  closePopup(popupPicture);
});


popupDescription.addEventListener('click', closePopupOverlay);
popupPlace.addEventListener('click', closePopupOverlay);
popupPicture.addEventListener('click', closePopupOverlay);