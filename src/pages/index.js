import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const editProfileButton = document.querySelector("#edit-profile");
const addCardProfileButton = document.querySelector(".profile__add-button");
const editProfilePopup = document.querySelector("#edit-modal");
const addProfilePopup = document.querySelector("#add-modal");
const imageModalPopup = document.querySelector("#image-modal");
const profileEditForm = document.querySelector("#edit-form");
const profileAddForm = document.querySelector("#add-form");
const closeEditModalButton = editProfilePopup.querySelector("#close-modal");
const closeAddModalButton = addProfilePopup.querySelector("#close-add-modal");
const closeImageModalButton =
  imageModalPopup.querySelector("#close-image-modal");
const cardFormSubmitButton = addProfilePopup.querySelector(".modal__submit");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const imagePicute = document.querySelector(".modal__image");
const imageTitle = document.querySelector(".modal__image-title");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);
const inputTitle = document.querySelector(".modal__input_type_title");
const inputImageLink = document.querySelector(".modal__input_type_image-link");
const cardList = document.querySelector(".gallery__cards");

const setting = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
  cardSectionClass: ".gallery__cards",
};
const editFormElement = editProfilePopup.querySelector("#edit-form");
const editFormValidator = new FormValidator(setting, editFormElement);
editFormValidator.enableValidation();

const addFormElement = addProfilePopup.querySelector("#add-form");
const addFormValidator = new FormValidator(setting, addFormElement);
addFormValidator.enableValidation();

// create card section + image popup

const editModalPopup = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: handleEditFormSubmit,
});
editModalPopup.setEventListeners();

function handleEditFormSubmit(formValues) {
  userInfo.setUserInfo(formValues);
  editModalPopup.close();
}

const newCardPopup = new PopupWithForm({
  popupSelector: "#add-modal",
  handleFormSubmit: handleAddFormSubmit,
});
newCardPopup.setEventListeners();

function handleAddFormSubmit(formValues) {
  renderCard(formValues);
  newCardPopup.close();
}
function renderCard(data) {
  const card = new Card(
    {
      name: data.name,
      link: data.link,
    },
    "#card-templete",
    handleImageClick
  );
  section.addItem(card.getView(data));
}

function handleImageClick(cardImage, cardTitle) {
  imagePopup.open(cardImage, cardTitle);
}

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      return renderCard(item, cardList);
    },
  },
  setting.cardSectionClass
);
section.renderItems();

const imagePopup = new PopupWithImage("#image-modal");
imagePopup.setEventListeners();

editProfileButton.addEventListener("click", handleEditProfileForm);

function handleEditProfileForm() {
  const currentUser = userInfo.getUserInfo();
  inputName.value = currentUser.userName;
  inputDescription.value = currentUser.userJob;
  editFormValidator.disableButton();
  editModalPopup.open();
}
const userInfo = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__subtitle",
});
function handleAddCardProfileForm() {
  addFormValidator.disableButton();
  newCardPopup.open();
}
addCardProfileButton.addEventListener("click", handleAddCardProfileForm);
