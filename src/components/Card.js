class Card {
  constructor(
    { data },
    userId,
    cardSelector,
    handleCardClick,
    handleDeleteCardClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeClick = handleLikeClick;
  }

  _handleDeleteIcon() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _addLikes() {
    this._likeButton.classList.add("card__like-button_active");
  }
  _removeLikes() {
    this._likeButton.classList.remove("card__like-button_active");
  }
  setLikes(likes) {
    this._likes = likes;
    this._renderLikes();
  }
  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }
  _renderLikes() {
    this._cardLikes.textContent = this._likes.length;
    if (this.isLiked()) {
      return this._addLikes();
    } else {
      return this._removeLikes();
    }
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this._id);
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCardClick(this._id);
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
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    this._cardLikes = this._cardElement.querySelector(".card__like-count");
    this._renderLikes();

    if (this._userId != this._ownerId) {
      this._deleteButton.remove();
    }
    return this._cardElement;
  }
}

export default Card;
