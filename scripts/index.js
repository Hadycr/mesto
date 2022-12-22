const profilePopupNameInput = document.querySelector('.popup__input-name');
const profilePopupProfessionInput = document.querySelector('.popup__input-profession');
const popupClosed = document.querySelector('.popup__closed-description');
const popup = document.querySelector('.popup');
const profileButton = document.querySelector('.profile__button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__form-description');
const elementsContainer = document.querySelector('.elements__items');
const popupDescription = document.querySelector('.popup_type_description');
const popupClosedPlace = document.querySelector('.popup__closed-place');
const formElementImg =  document.querySelector('.popup__form-img');
const popupNameImg = document.querySelector('.popup__input-title');
const popupLinks = document.querySelector('.popup__input-link');
const popupPlace = document.querySelector('.popup_type_place');
const elementImg = document.querySelector('.elements__img');
const profileAddButton = document.querySelector('.profile__add-button');
const popupPicture = document.querySelector('.popup_type_picture');
const popupPicturePhoto = popupPicture.querySelector('.popup__photo');
const popupPictureTitle = popupPicture.querySelector('.popup__title-photo');
const popupClosedImg = document.querySelector('.popup__closed-img');
const template = document.querySelector('#elements__item-template');


const creatCard = (cardLink, cardName) => {
  const card = template.content.cloneNode(true);
  const elementImgOfCard = card.querySelector('.elements__img');
  elementImgOfCard.src = cardLink;
  elementImgOfCard.alt = cardName;
  card.querySelector('.elements__title').textContent  = cardName;
  card.querySelector('.elements__trash').addEventListener('click', (evt) => {
     evt.target.closest('.element__item').remove(); 
  })
  card.querySelector('.elements__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like_dark'); 
 })
 card.querySelector('.elements__img').addEventListener('click', (evt) => {
  popupPicturePhoto.src = cardLink;
  popupPicturePhoto.alt = cardName;
  popupPictureTitle.textContent = cardName;
  openPopup(popupPicture);
 });
  return card;
}

const addCard = (cardLink, cardName) => {
  elementsContainer.prepend(creatCard(cardLink, cardName));
}

initialCards.forEach((card) => {
  addCard(card.link, card.name);
})

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => { 
  popup.classList.remove('popup_opened');
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = profilePopupNameInput.value;
  profileDescription.textContent = profilePopupProfessionInput.value;
  closePopup(popupDescription); 
}

const addNewImg = (evt) => {
  evt.preventDefault();
  const cardLink = popupLinks.value;
  const cardName = popupNameImg.value;
  addCard (cardLink, cardName);
  closePopup(popupPlace); 
}

profileButton.addEventListener('click', () => {
  profilePopupNameInput.textContent = profileName.value;
  profilePopupProfessionInput.textContent = profileDescription.value;
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

