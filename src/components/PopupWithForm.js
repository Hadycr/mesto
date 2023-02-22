import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSumbit) {
    super(popupSelector);
    this._handleFormSumbit = handleFormSumbit;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _getInputValues(){
    this._formValues = {};
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;  
    });
    return this._formValues
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSumbit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}