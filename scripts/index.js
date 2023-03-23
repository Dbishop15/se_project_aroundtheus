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
const editModal = document.querySelector("#edit-modal");
const closeModalButton = document.querySelector("#close-modal");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputName = document.querySelector(".modal__input_type_name");
const inputDescription = document.querySelector(
  ".modal__input_type_description"
);
const profileEditForm = editModal.querySelector(".modal__form");

function closeModal() {
  editModal.classList.remove("modal_opened");
}
editProfileButton.addEventListener("click", function () {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  editModal.classList.add("modal_opened");
});
closeModalButton.addEventListener("click", closeModal);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  closeModal();
}
profileEditForm.addEventListener("submit", handleFormSubmit);

const cardTemplate =
  document.querySelector("#card-templete").content.firstElementChild;
const cardList = document.querySelector(".gallery__cards");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  return cardElement;
}
initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardList.append(cardElement);
});
