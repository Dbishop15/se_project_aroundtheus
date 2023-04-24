import { imageModalPopup, imagePicute, imageTitle } from "../pages/index.js";
import { openModal } from "../utils/utils.js";

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }
  _handleDeleteIcon() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _handleViewPicture() {
    imagePicute.src = this._link;
    imagePicute.alt = this._name;
    imageTitle.textContent = this._name;
    openModal(imageModalPopup);
  }
  _setEventListener() {
    //likebutton
    //deletebutton
    //viewpicture

    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardImage = this._cardElement.querySelector(".card__image");

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteIcon();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleViewPicture();
    });
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }
  getView() {
    //get card view
    //set the eventListener
    //return the card

    this._cardElement = this._getTemplate();
    this._setEventListener();
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    this._cardElement.querySelector(".card__image").alt = this.name;
    this._cardElement.querySelector(
      ".card__image"
    ).alt = `Photo of ${this._name}`;

    return this._cardElement;
  }
}

export default Card;
