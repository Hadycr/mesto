import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import PopupDelete from '../components/PopupDelete.js';
import Api from '../components/Api.js';
import {elementsContainer,formElementDescription,
  formElementImg, profileDescription, profileName, profileButton, 
  profilePopupNameInput, profilePopupProfessionInput, profileAvatar,
  profileAddButton,validation,profileAvatarEdirButton, template,
  formElementAvatar} from '../utils/constats.js'
import './index.css';

const validatorEditProfile = new FormValidator(validation, formElementDescription);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validation, formElementImg);
validatorAddCard.enableValidation();
console.log(validatorAddCard)

const validatorEditAvatar = new FormValidator(validation, formElementAvatar);
validatorEditAvatar.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '51242091-e279-4218-b97f-74ae7ffdb364',
    'Content-Type': 'application/json'
  }
})

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    cardList.renderCard(cardData);
    userId = userData._id;
  })
  .catch((err) => console.log(`Ошибка: ${err}`));

const popupDelete = new PopupDelete('.popup_type_delete');
popupDelete.setEventListeners();

const popupImg = new PopupWithImage('.popup_type_picture');
popupImg.setEventListeners();

const createCard = (data, cardSelector) => {
  const card = new Card({data, cardSelector, userId,
    handleCardClick: () => {
      popupImg.open({data}
    )},
    handleDeleteIconClick: (cardId) => {
      popupDelete.open();
      popupDelete.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            popupDelete.close();
            card.deleteCard();
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      })
    },
    handleSetLike: (cardId) => {
      api.addLike(cardId)
        .then((data) => {
          card.addLike(data);
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
    },
    deleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.addLike(data);
      })
        .catch((err) => console.log(`Ошибка: ${err}`));
    }
  });
  return card.generateCard()
};

const cardList = new Section({
  renderer: (item) => {
    const cards = createCard(item, template);
    cardList.addItem(cards);
  }
}, elementsContainer);

const popupFormImg = new PopupWithForm('.popup_type_place', (item) => {
  popupFormImg.loading(true);
  api.addCard(item)
    .then((item) => {
      cardList.addItem(createCard(item, template));
      popupFormImg.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupFormImg.loading(false);
    })
});
popupFormImg.setEventListeners();

const userInfo = new UserInfo(profileName, profileDescription, profileAvatar);

const popupFormProfile = new PopupWithForm('.popup_type_description', (formData) => {
  popupFormProfile.loading(true);
  api.editUserInfo(formData)
    .then ((formData) => {
      userInfo.setUserInfo(formData);
      popupFormProfile.close()
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupFormProfile.loading(false);
    })
});
popupFormProfile.setEventListeners();

const popupFormAvatar = new PopupWithForm('.popup_type_edit-avatar', (formData) => {
  popupFormAvatar.loading(true);
  api.editAvatar(formData)
    .then ((formData) => {
       userInfo.setUserInfo(formData);
       popupFormAvatar.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      popupFormAvatar.loading(false);
    })
});
popupFormAvatar.setEventListeners();

profileAvatarEdirButton.addEventListener('click', () => {
  popupFormAvatar.open();
  validatorEditAvatar.hideErrors();
  validatorEditAvatar.disableSubmitButton();
})

profileButton.addEventListener('click', () => {
  popupFormProfile.open();
  const user = userInfo.getUserInfo();
  profilePopupNameInput.value = user.name;
  console.log(profilePopupNameInput.value)
  profilePopupProfessionInput.value = user.about;
  validatorEditProfile.hideErrors();
  validatorEditProfile.disableSubmitButton();
});

profileAddButton.addEventListener('click', () => {
  popupFormImg.open();
  validatorAddCard.hideErrors();
  validatorAddCard.disableSubmitButton();
});