import Popup from "./Popup.js";
class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });

    this._confirmDeleteButton =
      this._popupElement.querySelector("#delete-card-btn");
  }
  setSubmitAction(action) {
    this._handleDeleteSubmit = action;
  }
  renderLoading(isLoading, text) {
    if (isLoading) {
      this._confirmDeleteButton.textContent = "Deleting...";
    } else {
      this._confirmDeleteButton.textContent = text;
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
