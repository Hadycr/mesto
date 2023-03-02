export default class Card {
  constructor ({data, cardSelector, userId, handleCardClick, handleDeleteIconClick, handleSetLike, deleteLike}) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleSetLike = handleSetLike;
    this.deleteLike = deleteLike;
    this._handleDeleteIconClick = handleDeleteIconClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element__item')
      .cloneNode(true);

    return cardElement;
  }

  _checkWhoOwner(){
    if (this._ownerId !== this._userId) {
      this.trashButton.remove();
    }
  }

  addLike(data) {
    this._likes = data.likes;

    this._likeButton.classList.toggle('element__like_dark');
    this._elementLikeNumber.textContent  =  this._likes.length;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }
 
  _isCardLiked() {
    if(this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._likeButton.classList.add('element__like_dark')
      }
  }

  _setEventListeners() {
    this.trashButton = this._element.querySelector('.element__trash');
    this.trashButton.addEventListener('click', () => {
      this._handleDeleteIconClick(this._cardId)
    })

    this._likeButton = this._element.querySelector('.element__like');
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__like_dark')) {
        this.deleteLike(this._cardId);
      } else {
        this.handleSetLike(this._cardId);
      }
    })

    this._elementImg.addEventListener('click', this.handleCardClick);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImg = this._element.querySelector('.element__img');
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._element.querySelector('.element__title').textContent =  this._name;
    this._elementLikeNumber = this._element.querySelector('.element__count');
    this._elementLikeNumber.textContent  =  this._likes.length;
    this._isCardLiked();
    this._setEventListeners();
    this._checkWhoOwner();

    return this._element;
  }
}