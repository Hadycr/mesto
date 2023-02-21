export default class Card {
  constructor (data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element__item')
      .cloneNode(true);

    return cardElement;
  }

  _addLike() {
    this._likeButton.classList.toggle('element__like_dark'); 
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

    this._elementImg.addEventListener('click', this._handleCardClick)
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImg = this._element.querySelector('.element__img');
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._element.querySelector('.element__title').textContent =  this._name;
    this._setEventListeners();

    return this._element;
  }
}