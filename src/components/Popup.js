class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleCloseWithEscape = this._handleCloseWithEscape.bind(this);
    this._closeButton = this._popupElement.querySelector(".modal__close");
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleCloseWithEscape);
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleCloseWithEscape);
  }
  _handleCloseWithEscape(evt) {
    const ESC_CODE = 27;
    if (evt.which === ESC_CODE) {
      const activeModal = document.querySelector(".modal_opened");
      this.close(activeModal);
    }
  }
  _handleCloseOnClickOverlay(evt) {
    if (evt.target.classList.contains("modal_opened")) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
    this._popupElement.addEventListener("mousedown", (evt) =>
      this._handleCloseOnClickOverlay(evt)
    );
  }
}
export default Popup;
