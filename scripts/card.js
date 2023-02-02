import {openPopup, popupPicture, popupPicturePhoto, popupPictureTitle} from './utils.js';

class Card {
  constructor (data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);

    return cardElement;
  }

  _addLike() {
    this._likeButton.classList.toggle('element__like_dark'); 
  }

  _openPopup() {
    popupPicturePhoto.src = this._link;
    popupPicturePhoto.alt = this._name;
    popupPictureTitle.textContent = this._name;
    openPopup(popupPicture);
  }

  _setEventListeners() {
    const trashButton = this._element.querySelector('.element__trash');
    trashButton.addEventListener('click', (evt) => {
      evt.target.closest(".element__item").remove();
    })

    this._likeButton = this._element.querySelector('.element__like');
    this._likeButton.addEventListener('click', () => {
      this._addLike();
    })

    const cardImage = this._element.querySelector('.element__img');
    cardImage.addEventListener('click', () => {
      this._openPopup();
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__img').alt = this._name;
    this._element.querySelector('.element__title').textContent =  this._name;
    this._setEventListeners();

    return this._element;
  }

}


export default Card;