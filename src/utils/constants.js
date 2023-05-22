// export const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
//   },
// ];

export const editProfileButton = document.querySelector("#edit-profile");
export const editAvatarProfileButton = document.querySelector(
  ".profile__image-edit-btn"
);
export const addCardProfileButton = document.querySelector(
  ".profile__add-button"
);
export const deleteCardButton = document.querySelector("#delete-card-btn");
export const editProfilePopup = document.querySelector("#edit-modal");
export const editAvatarPopup = document.querySelector("#edit-avatar-modal");
export const addProfilePopup = document.querySelector("#add-modal");
export const imageModalPopup = document.querySelector("#image-modal");
export const deleteCardConfirmPopup =
  document.querySelector("#delete-card-modal");
export const profileEditForm = document.querySelector("#edit-form");
export const profileAddForm = document.querySelector("#add-form");
export const closeEditModalButton =
  editProfilePopup.querySelector("#close-modal");
export const closeAddModalButton =
  addProfilePopup.querySelector("#close-add-modal");
export const closeImageModalButton =
  imageModalPopup.querySelector("#close-image-modal");
export const cardFormSubmitButton =
  addProfilePopup.querySelector(".modal__submit");
export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const imagePicute = document.querySelector(".modal__image");
export const imageTitle = document.querySelector(".modal__image-title");
export const inputName = document.querySelector(".modal__input_type_name");
export const inputDescription = document.querySelector(
  ".modal__input_type_description"
);
export const inputTitle = document.querySelector(".modal__input_type_title");
export const inputImageLink = document.querySelector(
  ".modal__input_type_image-link"
);
export const cardList = document.querySelector(".gallery__cards");

export const setting = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit",
  inactiveButtonClass: "modal__submit_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
  cardSectionClass: ".gallery__cards",
};
export const editFormElement = editProfilePopup.querySelector("#edit-form");
export const addFormElement = addProfilePopup.querySelector("#add-form");
export const editFormAvatarElement =
  editAvatarPopup.querySelector("#edit-avatar-form");
