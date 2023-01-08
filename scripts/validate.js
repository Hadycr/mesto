const showInputError = (formElement, inputElement, validation) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(validation.errorClass);
  errorElement.textContent  = inputElement.validationMessage;
  inputElement.classList.add(validation.inputErrorClass);
}

const hideInputError = (formElement, inputElement, validation) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(validation.errorClass);
  errorElement.textContent  = '';
  inputElement.classList.remove(validation.inputErrorClass);
}

const checkInputValidity = (formElement, inputElement, validation) => {
  if(inputElement.validity.valid) {
    hideInputError(formElement, inputElement, validation);
  } else {
    showInputError(formElement, inputElement, validation);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, validation) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(validation.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validation.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

const setEventListeners = (formElement, validation) => {
  const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
  const buttonElement = formElement.querySelector(validation.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validation);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validation);
      toggleButtonState(inputList, buttonElement, validation);
    })
  })
}

const enableValidation = (validation) => {
  const formList = Array.from(document.querySelectorAll(validation.formSelector));
  formList.forEach((formElement) => {
    setEventListeners (formElement, validation);
  });
}