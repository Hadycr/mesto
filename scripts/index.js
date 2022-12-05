let popupName = document.querySelector('.popup__input_type_name');
let popupProfession = document.querySelector('.popup__input_type_profession');
let popupClosed = document.querySelector('.popup__closed');
let popup = document.querySelector('.popup');
let profileButton = document.querySelector('.profile__button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');

function popupOpened() {
  popup.classList.add('popup_opened');
  popupName.textContent = profileName.value;
  popupProfession.textContent = profileDescription.value;
}
function popupClosedFunc() {
  popup.classList.remove('popup_opened');
}
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupProfession.value;
  popupClosedFunc(); 
}

profileButton.addEventListener('click', popupOpened); 
formElement.addEventListener('submit', handleFormSubmit); 
popupClosed.addEventListener('click', popupClosedFunc);