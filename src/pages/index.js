import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards, elementsContainer,formElementDescription,
  formElementImg, profileDescription, profileName, profileButton, 
  profilePopupNameInput, profilePopupProfessionInput, 
  profileAddButton,validation} from '../utils/constats.js'
import './index.css';

const validatorEditProfile = new FormValidator(validation, formElementDescription);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validation, formElementImg);
validatorAddCard.enableValidation();

const popupImg = new PopupWithImage('.popup_type_picture');
popupImg.setEventListeners();

const createCard = (data, cardSelector) => {
  const card = new Card(data, cardSelector, () => {
    popupImg.open({data});
  });
  return card.generateCard()
}

const newCard = new Section({       
  data: initialCards,
  renderer: (item) => {
    const cards = createCard(item, '#elements__item-template');
    newCard.addItem(cards);
  }
},elementsContainer);

newCard.renderCard();

/*const popupAddCardForm = new PopupWithForm('.popup_cards', (item) => {

	cardElementList.addItem(createdCard({ name: item.inputNameCard, link: item.inputUrlCard }));
	popupAddCardForm.close();
});
*/


//не рабрает карточка добовляется но без рисунка
const popupFormImg = new PopupWithForm('.popup_type_place', 
(item) => {
const value = {name: item.name, link: item.link}
 newCard.addItem(createCard(value, '#elements__item-template'));
 console.log(item)
});
popupFormImg.setEventListeners();


const userInfo = new UserInfo(
  profileName, 
  profileDescription);



// не рабоатет подставление данных при самбите
/*const formData = (data) => {
  userInfo.setUserInfo(data.name, data.description);
}*/
/*
function formValues(data) {
	userInfo.setUserInfo({ name: data.inputName, info: data.inputAbout });
	popupEditProfileForm.close();
}
*/
const popupFormProfile = new PopupWithForm('.popup_type_description', (formData) => {
  userInfo.setUserInfo(formData);
  console.log(formData)
});
popupFormProfile.setEventListeners();


//правильная открытие попапа профиля - рабоатет
profileButton.addEventListener('click', () => {
  popupFormProfile.open();
  const user = userInfo.getUserInfo();
  profilePopupNameInput.value =user.name;
  profilePopupProfessionInput.value = user.description;
  validatorEditProfile.hideErrors();
  validatorEditProfile.disableSubmitButton();
});

profileAddButton.addEventListener('click', () => {
  popupFormImg.open();

  validatorAddCard.hideErrors();
  validatorAddCard.disableSubmitButton();
});