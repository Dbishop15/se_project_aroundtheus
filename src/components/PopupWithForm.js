import Popup from "./Popup.js";
class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._pupupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = [...this._popupElement.querySelectorAll(".modal__input")];
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._pupupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._pupupForm.reset();
  }
}
export default PopupWithForm;
