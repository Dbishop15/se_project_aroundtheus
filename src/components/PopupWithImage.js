import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._imageTitle = this._popupElement.querySelector(".modal__image-title");
    this._image = this._popupElement.querySelector(".modal__image");
  }
  open(cardImage, cardTitle) {
    super.open();

    this._image.src = cardImage.src;
    this._image.name = cardImage.alt;
    this._imageTitle.textContent = cardTitle.textContent;
  }
}
export default PopupWithImage;
