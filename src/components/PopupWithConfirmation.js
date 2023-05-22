import Popup from "./Popup.js";
class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, buttonText, loadingButtonText }) {
    super({ popupSelector });

    this._confirmDeleteButton =
      this._popupElement.querySelector("#delete-card-btn");
    this._submitButton = this._popupElement.querySelector(".modal__submit");
    this._buttonText = buttonText;
    this._loadingButtonText = loadingButtonText;
  }

  setSubmitAction(action) {
    this._handleDeleteSubmit = action;
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = this._loadingButtonText;
    } else {
      this._submitButton.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmDeleteButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleDeleteSubmit();
    });
  }
}
export default PopupWithConfirmation;
