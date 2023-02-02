
const popupPicture = document.querySelector('.popup_type_picture');
const popupPicturePhoto = popupPicture.querySelector('.popup__photo');
const popupPictureTitle = popupPicture.querySelector('.popup__title-photo');

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

const closePopupEsc = (evt) => {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openPopup); 
  } 
}

const closePopup = (popup) => { 
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  /*formElementImg.reset();*/
 /* validOfDescription.hideErrors();
  validOfImg.hideErrors();*/
}

export {openPopup, closePopupEsc, closePopup, popupPicture, popupPicturePhoto, popupPictureTitle};