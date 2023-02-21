export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupClosed = this._popup.querySelector('.popup__closed');

  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);

  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    //document.querySelector('.popup__form-img').reset();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close(); 
    } 
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('.popup__closed')) {
      this.close();
      }
    })
    this._popupClosed.addEventListener('click', () => {
      this.close();
    })
  }
}