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
    // this._isLikedbyUser = data.likes.some((like) => like._id === userId);
  }
  // getId() {
  //   return this._id;
  // }
  // _handleLikeIcon() {
  //   const isLiked = this._likeButton.classList.contains(
  //     "card__like-button_active"
  //   );
  //   this._handleLikeClick(this._cardId, isLiked)
  //     .then((updatedCard) => {
  //       this._likes = updatedCard.likes.length;
  //       this._cardElement.querySelector(".card__like-count").textContent =
  //         this._likes;
  //       this._likeButton.classList.toggle("card__like-button_active");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
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
    //likebutton
    //deletebutton
    //viewpicture
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

    this._cardLikes = this._cardElement.querySelector(".card__like-count");
    this._renderLikes();

    if (this._userId != this._ownerId) {
      this._deleteButton.remove();
    }
    if (this._isLikedbyUser) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
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
    this._cardElement.querySelector(".card__like-count").textContent =
      this._likes;

    this._setEventListeners();
    return this._cardElement;
  }
}

export default Card;
