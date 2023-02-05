const validation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

class FormValidator {
  constructor(validation, formElement) {
    this._validation = validation;
    this._formElement = formElement;
  }

  disableSubmitButton() {
    this._buttonElement.classList.add(this._validation.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  
  _enableButtonState() {
    this._buttonElement.classList.remove(this._validation.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.add(this._validation.errorClass);
    this._errorElement.textContent  = inputElement.validationMessage;
    inputElement.classList.add(this._validation.inputErrorClass);
  }

  _hideInputError (inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove(this._validation.errorClass);
    this._errorElement.textContent  = '';
    inputElement.classList.remove(this._validation.inputErrorClass);
  }

  _checkInputValidity(inputElement) {
    if(inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableButtonState();
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validation.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validation.submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  }

  hideErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
  }

  enableValidation()  {
    this._setEventListeners();
  }
}

export {FormValidator, validation};