import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { openModal, closeModal } from "../utils/utils.js";

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
export const imageModalPopup = document.querySelector("#image-modal");
const profileEditForm = document.querySelector("#edit-form");
const profileAddForm = document.querySelector("#add-form");
const closeEditModalButton = editProfilePopup.querySelector("#close-modal");
const closeAddModalButton = addProfilePopup.querySelector("#close-add-modal");
const closeImageModalButton =
  imageModalPopup.querySelector("#close-image-modal");
const cardFormSubmitButton = addProfilePopup.querySelector(".modal__submit");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
export const imagePicute = document.querySelector(".modal__image");
export const imageTitle = document.querySelector(".modal__image-title");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);
const inputTitle = document.querySelector(".modal__input_type_title");
const inputImageLink = document.querySelector(".modal__input_type_image-link");

const setting = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
const editFormElement = editProfilePopup.querySelector("#edit-form");
const addFormElement = addProfilePopup.querySelector("#add-form");

const editFormValidator = new FormValidator(setting, editFormElement);
const addFormValidator = new FormValidator(setting, addFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function fillProfileForm() {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
}

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  openModal(editProfilePopup);
});
addCardProfileButton.addEventListener("click", () => {
  openModal(addProfilePopup);
});

closeEditModalButton.addEventListener("click", () => {
  closeModal(editProfilePopup);
});
closeAddModalButton.addEventListener("click", () => {
  closeModal(addProfilePopup);
});
closeImageModalButton.addEventListener("click", () => {
  closeModal(imageModalPopup);
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  closeModal(editProfilePopup);
}
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: inputTitle.value,
    link: inputImageLink.value,
  };
  renderCard(cardData, cardList);
  closeModal(addProfilePopup);
  profileAddForm.reset();
  addFormValidator.toggleButtonState();
}
profileEditForm.addEventListener("submit", handleEditFormSubmit);
profileAddForm.addEventListener("submit", handleAddFormSubmit);

const cardList = document.querySelector(".gallery__cards");

function renderCard(data, cardList) {
  const card = new Card(data, "#card-templete");
  cardList.prepend(card.getView());
}
initialCards.forEach((cardData) => renderCard(cardData, cardList));
