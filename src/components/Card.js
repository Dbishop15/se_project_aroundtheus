class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }
  _handleDeleteIcon() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _setEventListeners() {
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
      this._handleCardClick(this._cardImage, this._cardTitle);
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
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = `Photo of ${this._name}`;

    this._setEventListeners();
    return this._cardElement;
  }
}

export default Card;
