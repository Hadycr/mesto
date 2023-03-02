import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSumbit) {
    super(popupSelector);
    this._handleFormSumbit = handleFormSumbit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
    this._submitButton = this._popupForm .querySelector('.popup__save');
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
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
    });
  }

  loading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...'
    } else {this._submitButton.textContent = this._submitButtonText};
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}