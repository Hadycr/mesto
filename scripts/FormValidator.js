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
  
  enableButtonState() {
    this._buttonElement.classList.remove(this._validation.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _showInputError (formElement, inputElement) {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.add(this._validation.errorClass);
    this._errorElement.textContent  = inputElement.validationMessage;
    inputElement.classList.add(this._validation.inputErrorClass);
  }

  _hideInputError (formElement, inputElement) {  // находиться класс определенны и убрается класс из валидатион и наооборот выше
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove(this._validation.errorClass);
    this._errorElement.textContent  = '';
    inputElement.classList.remove(this._validation.inputErrorClass);
  }

  _checkInputValidity(inputElement, formElement) {  //если InputElemnt валидный то убрать надпись ошибки
    if(inputElement.validity.valid) {
      this._hideInputError(formElement, inputElement);
    } else {
      this._showInputError(formElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid); //если инпут валидный первый попавшийся вернет первый Iputelement
  }

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) { // если все все правильно
      this.disableSubmitButton();  
    } else {
      this.enableButtonState();
    }
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._validation.inputSelector));//находим popup input
    this._buttonElement = formElement.querySelector(this._validation.submitButtonSelector);//находим кнопку кнопку у formElement
    inputList.forEach((inputElement) => {   //каждый инпут этого элемента перебираем  и добавяем обработичк input  и добавлем методы
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement, formElement);
        this._toggleButtonState(inputList);
      })
    })
  }
  
  enableValidation()  {
    const formList = Array.from(document.querySelectorAll(this._validation.formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement);
    });
  }





  hideErrors(popup) {
    const formList = Array.from(popup.querySelectorAll(this._validation.formSelector));
    formList.forEach((formElement) => {
      this._inputList = Array.from(formElement.querySelectorAll(this._validation.inputSelector));
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      })
    })
  }
}
/*const disableSubmitButton  = (buttonElement, validation) => {
  buttonElement.classList.add(validation.inactiveButtonClass);
  buttonElement.disabled = true;
}

const enableButtonState = (buttonElement, validation) => {
  buttonElement.classList.remove(validation.inactiveButtonClass);
  buttonElement.disabled = false;
}
*/
/*const showInputError = (formElement, inputElement, validation) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(validation.errorClass);
  errorElement.textContent  = inputElement.validationMessage;
  inputElement.classList.add(validation.inputErrorClass);
}*/

/*const hideInputError = (formElement, inputElement, validation) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(validation.errorClass);
  errorElement.textContent  = '';
  inputElement.classList.remove(validation.inputErrorClass);
}*/
/*
const checkInputValidity = (formElement, inputElement, validation) => {
  if(inputElement.validity.valid) {
    hideInputError(formElement, inputElement, validation);
  } else {
    showInputError(formElement, inputElement, validation);
  }
}
*/
/*
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}
*/
/*const toggleButtonState = (inputList, buttonElement, validation) => {
  if(hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, validation);
  } else {
    enableButtonState(buttonElement, validation);
  }
}*/

/*const setEventListeners = (formElement, validation) => {
  const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
  const buttonElement = formElement.querySelector(validation.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validation);
      toggleButtonState(inputList, buttonElement, validation);
    })
  })
}*/

/*const enableValidation = (validation) => {
  const formList = Array.from(document.querySelectorAll(validation.formSelector));
  formList.forEach((formElement) => {
    setEventListeners (formElement, validation);
  });
}*/
/*
const hideErrors = (popup, validation) => {
  const formList = Array.from(popup.querySelectorAll(validation.formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, validation);
    })
  })
}*/
export {FormValidator, validation};