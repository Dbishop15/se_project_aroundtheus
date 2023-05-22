import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import {
  editAvatarProfileButton,
  editProfileButton,
  addCardProfileButton,
  setting,
  editFormAvatarElement,
  editFormElement,
  addFormElement,
  inputName,
  inputDescription,
} from "../utils/constants.js";
import Api from "../utils/Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "c6f9411e-5b69-4add-bddb-37bc9aad9288",
    "Content-Type": "application/json",
  },
});
const editFormAvatarValidator = new FormValidator(
  setting,
  editFormAvatarElement
);
editFormAvatarValidator.enableValidation();

const editFormValidator = new FormValidator(setting, editFormElement);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(setting, addFormElement);
addFormValidator.enableValidation();

const editModalAvatarPopup = new PopupWithForm({
  popupSelector: "#edit-avatar-modal",
  handleFormSubmit: handleEditFormAvatarSubmit,
  buttonText: "Saving",
  loadingButtonText: "Saving...",
});
editModalAvatarPopup.setEventListeners();

const editModalPopup = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: handleEditFormSubmit,
  buttonText: "Save",
  loadingButtonText: "Saving...",
});
editModalPopup.setEventListeners();

const newCardPopup = new PopupWithForm({
  popupSelector: "#add-modal",
  handleFormSubmit: handleAddFormSubmit,
  buttonText: "Create",
  loadingButtonText: "Creating...",
});
newCardPopup.setEventListeners();

const imagePopup = new PopupWithImage({ popupSelector: "#image-modal" });
imagePopup.setEventListeners();

const deleteCardConfirmPopup = new PopupWithConfirmation({
  popupSelector: "#delete-card-modal",
  buttonText: "Delete",
  loadingButtonText: "Deleting...",
});
deleteCardConfirmPopup.setEventListeners();

function handleEditFormAvatarSubmit(formValues) {
  editModalAvatarPopup.renderLoading(true);
  api
    .setUserAvatar({ avatar: formValues.avatar })
    .then((data) => {
      userInfo.setAvatarInfo({ avatar: data.avatar });
      editModalAvatarPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editModalAvatarPopup.renderLoading(false, "Save");
    });
}

function handleEditFormSubmit(formValues) {
  editModalPopup.renderLoading(true);
  api
    .setUserInfo({ name: formValues.name, about: formValues.job })
    .then((data) => {
      userInfo.setUserInfo({ name: data.name, job: data.about });
      editModalPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editModalPopup.renderLoading(false, "Save");
    });
}

function handleAddFormSubmit(formValues) {
  newCardPopup.renderLoading(true);
  api
    .addCard(formValues)
    .then((cardData) => {
      section.addItem(createCard(cardData));
      newCardPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      newCardPopup.renderLoading(false, "Create");
    });
}

editAvatarProfileButton.addEventListener("click", handleEditAvatarProfileForm);
editProfileButton.addEventListener("click", handleEditProfileForm);
addCardProfileButton.addEventListener("click", handleAddCardProfileForm);

function handleEditAvatarProfileForm() {
  editModalAvatarPopup.open();
  editFormAvatarValidator.resetValidation();
}
function handleEditProfileForm() {
  const currentUser = userInfo.getUserInfo();
  inputName.value = currentUser.userName;
  inputDescription.value = currentUser.userJob;
  editModalPopup.open();
  editFormValidator.resetValidation();
}

function handleAddCardProfileForm() {
  newCardPopup.open();
  addFormValidator.resetValidation();
}

let section;
let userId;

const userInfo = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__subtitle",
  userAvatar: ".profile__image",
});

api
  .getApiInfo()
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
    });
    userInfo.setAvatarInfo({ avatar: userData.avatar });
    section = new Section(
      {
        items: cards,
        renderer: (cardData) => {
          section.addItem(createCard(cardData));
        },
      },
      setting.cardSectionClass
    );
    section.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });

function createCard(data) {
  const card = new Card(
    { data },
    userId,
    "#card-templete",
    (cardImage, cardTitle) => {
      imagePopup.open(cardImage, cardTitle);
    },
    (cardId) => {
      deleteCardConfirmPopup.open();
      deleteCardConfirmPopup.setSubmitAction(() => {
        deleteCardConfirmPopup.renderLoading(true);

        api
          .removeCard(cardId)
          .then(() => {
            card._handleDeleteIcon();
            deleteCardConfirmPopup.close();
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            deleteCardConfirmPopup.renderLoading(false, "Yes");
          });
      });
    },
    (cardId) => {
      if (card.isLiked()) {
        api
          .removeLike(cardId)
          .then((data) => {
            card.setLikes(data.likes);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        api
          .addLike(cardId)
          .then((data) => {
            card.setLikes(data.likes);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  );
  return card.getView();
}
