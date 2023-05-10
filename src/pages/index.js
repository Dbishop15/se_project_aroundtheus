import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import {
  initialCards,
  editProfileButton,
  addCardProfileButton,
  cardList,
  setting,
  editFormElement,
  addFormElement,
  inputName,
  inputDescription,
} from "../utils/constants.js";

const editFormValidator = new FormValidator(setting, editFormElement);
editFormValidator.enableValidation();

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
//function creating a card to DOM
function createCard(data) {
  const card = new Card(
    {
      name: data.name,
      link: data.link,
    },
    "#card-templete",
    handleImageClick
  );
  return card.getView();
}
//function adding a card to DOM
function renderCard(data) {
  const card = createCard(data);
  section.addItem(card);
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
  editModalPopup.open();
  editFormValidator.resetValidation();
}
const userInfo = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__subtitle",
});
function handleAddCardProfileForm() {
  newCardPopup.open();
  addFormValidator.resetValidation();
}
addCardProfileButton.addEventListener("click", handleAddCardProfileForm);
