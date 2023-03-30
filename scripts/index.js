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
const editModal = document.querySelector("#edit-modal");
const addModal = document.querySelector("#add-modal");
const imageModal = document.querySelector("#picture-modal");
const profileEditForm = document.querySelector("#edit-form");
const profileAddForm = document.querySelector("#add-form");
const closeEditModalButton = editModal.querySelector("#close-modal");
const closeAddModalButton = addModal.querySelector("#close-add-modal");
const closeImageModalButton = imageModal.querySelector("#close-picture-modal");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const imagePicute = document.querySelector(".modal__picture");
const imageTitle = document.querySelector(".modal__picuture-title");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);
const inputTitle = document.querySelector(".modal__input_type_title");
const inputImageLink = document.querySelector(".modal__input_type_image-link");

editProfileButton.addEventListener("click", function () {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  editModal.classList.add("modal_opened");
});
addCardProfileButton.addEventListener("click", function () {
  addModal.classList.add("modal_opened");
});

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

closeEditModalButton.addEventListener("click", () => {
  closeModal(editModal);
});
closeAddModalButton.addEventListener("click", () => {
  closeModal(addModal);
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  closeModal(editModal);
}
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const name = inputTitle.value;
  const link = inputImageLink.value;
  const cardElement = getCardElement({ name, link });
  cardList.append(cardElement);
  closeModal(addModal);
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
  cardImage.addEventListener("click", function () {
    imagePicute.src = cardImage.src;
    imageTitle.textContent = cardTitle.textContent;
    imageModal.classList.add("modal_opened");
  });
  closeImageModalButton.addEventListener("click", () => {
    closeModal(imageModal);
  });

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  return cardElement;
}
function renderCard(data, cardList) {
  const cardElement = getCardElement(data);
  cardList.append(cardElement);
}
initialCards.forEach((data) => renderCard(data, cardList));
