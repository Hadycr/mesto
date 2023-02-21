import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._name = this._popup.querySelector('.popup__photo');
    this._link = this._popup.querySelector('.popup__title-photo');
  }
  
  open({data}) {
    this._name.src = data.link;
    this._name.alt = data.name;
    this._link.textContent = data.name;
    super.open();
  }
};