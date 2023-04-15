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
const ESC_CODE = 27;

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleCloseWithEscape);
  document.addEventListener("mousedown", closeOnClickOverlay);
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleCloseWithEscape);
  document.removeEventListener("mousedown", closeOnClickOverlay);
}

function handleCloseWithEscape(evt) {
  if (evt.which === ESC_CODE) {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}

function closeOnClickOverlay(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(evt.target);
  }
}
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
  const { inputSelector } = options;
  const name = inputTitle.value;
  const link = inputImageLink.value;
  const modalInputs = [...addProfilePopup.querySelectorAll(inputSelector)];
  const cardElement = getCardElement({ name, link });
  cardList.prepend(cardElement);
  closeModal(addProfilePopup);
  profileAddForm.reset();
  toggleButtonState(modalInputs, cardFormSubmitButton, options);
}

profileEditForm.addEventListener("submit", handleEditFormSubmit);
profileAddForm.addEventListener("submit", handleAddFormSubmit);

const cardTemplate =
  document.querySelector("#card-templete").content.firstElementChild;
const cardList = document.querySelector(".gallery__cards");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImage.addEventListener("click", () => {
    imagePicute.src = cardImage.src;
    imagePicute.alt = cardImage.alt;
    imageTitle.textContent = cardTitle.textContent;
    openModal(imageModalPopup);
  });

  cardImage.src = data.link;
  cardImage.alt = `Photo of ${data.name}`;
  cardTitle.textContent = data.name;
  return cardElement;
}
function renderCard(data, cardList) {
  const cardElement = getCardElement(data);
  cardList.append(cardElement);
}
initialCards.forEach((data) => renderCard(data, cardList));
