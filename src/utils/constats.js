export const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

export const initialCards = [
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

export const elementsContainer = document.querySelector('.elements__items');
export const popupClosed = document.querySelector('.popup__closed');



export const profilePopupNameInput = document.querySelector('.popup__input-name');
export const profilePopupProfessionInput = document.querySelector('.popup__input-profession');
//const popupClosed = document.querySelector('.popup__closed-description');
const popupClosedPlace = document.querySelector('.popup__closed-place');
const popupClosedImg = document.querySelector('.popup__closed-img');
export const profileButton = document.querySelector('.profile__button');
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const formElementDescription = document.querySelector('.popup__form-description');
export const formElementImg =  document.querySelector('.popup__form-img');

//const popupDescription = document.querySelector('.popup_type_description');
//export const popupPlace = document.querySelector('.popup_type_place');
const placePopupTitleInput = document.querySelector('.popup__input-title'); 
const placePopupLinksInput = document.querySelector('.popup__input-link'); 
export const profileAddButton = document.querySelector('.profile__add-button');

//-------------
export const popupPicture = document.querySelector('.popup_type_picture');