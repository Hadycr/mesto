let popupName = document.querySelector('.popup__input_type_name');
let popupProfession = document.querySelector('.popup__input_type_profession');
let popupClosed = document.querySelector('.popup__closed');
let popup = document.querySelector('.popup');
let profileButton = document.querySelector('.profile__button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');

profileButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
})

popupClosed.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
})



function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupProfession.value;
    popup.classList.remove('popup_opened');
    
}

formElement.addEventListener('submit', handleFormSubmit); 