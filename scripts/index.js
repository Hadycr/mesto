import Card from './Card.js';
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
  const card = new Card(data, cardSelector);
  return card
}

const addCard = (name, link) => {
  const data = {
    name,
    link
  };  
  elementsContainer.prepend(createCard(data, '#elements__item-template').generateCard());
}

initialCards.forEach((item) => {
  addCard(item.name, item.link);
});

const validatorEditProfile = new FormValidator(validation, formElementDescription);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validation, formElementImg);
validatorAddCard.enableValidation();

const addNewImg = (evt) => {
  evt.preventDefault();
  const link = placePopupLinksInput.value;
  const name = placePopupTitleInput.value;
  addCard(name, link);
  closePopup(popupPlace); 
}

const submitEditProfileForm = (evt) => {
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
  validatorEditProfile.hideErrors();
  validatorEditProfile.disableSubmitButton();
});

formElementDescription.addEventListener('submit', submitEditProfileForm);

popupClosed.addEventListener('click', () => {
  closePopup(popupDescription);
});

profileAddButton.addEventListener('click', () => {
  openPopup(popupPlace);
  validatorAddCard.hideErrors();
  validatorAddCard.disableSubmitButton();
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