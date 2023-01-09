const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

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
const popupPicture = document.querySelector('.popup_type_picture');
const popupPicturePhoto = popupPicture.querySelector('.popup__photo');
const popupPictureTitle = popupPicture.querySelector('.popup__title-photo');
const popupClosedImg = document.querySelector('.popup__closed-img');
const template = document.querySelector('#elements__item-template');


const createCard = (cardLink, cardName) => {
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

const addCard = (cardLink, cardName) => {
  elementsContainer.prepend(createCard(cardLink, cardName));
}

initialCards.forEach((card) => {
  addCard(card.link, card.name);
})

const closePopupEsc = (evt) => {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openPopup); 
  }
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

const closePopup = (popup) => { 
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  formElementImg.reset();
  hideErrors(popup, validation);
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = profilePopupNameInput.value;
  profileDescription.textContent = profilePopupProfessionInput.value;
  closePopup(popupDescription); 
}

const addNewImg = (evt) => {
  evt.preventDefault();
  const cardLink = placePopupLinksInput.value;
  const cardName = placePopupTitleInput.value;
  addCard (cardLink, cardName);
  closePopup(popupPlace); 
  formElementImg.reset();
  
  evt.submitter.classList.add('popup__save_disabled'); 
  evt.submitter.disabled = true;
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
});

formElement.addEventListener('submit', handleFormSubmit); 
popupClosed.addEventListener('click', () => {
  closePopup(popupDescription);
});

profileAddButton.addEventListener('click', () => {
  openPopup(popupPlace);
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

enableValidation(validation);
