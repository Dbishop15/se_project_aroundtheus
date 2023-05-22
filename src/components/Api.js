class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
  }

  //GET https://around.nomoreparties.co/v1/group-12/users/me
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  //GET https://around.nomoreparties.co/v1/group-12/cards
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  getApiInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  //PATCH https://around.nomoreparties.co/v1/group-12/users/me
  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  //POST https://around.nomoreparties.co/v1/group-12/cards
  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  //DELETE https://around.nomoreparties.co/v1/group-12/cards/cardId
  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  //PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify({
        cardId,
      }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify({
        cardId,
      }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }
  //changeLikeCardStatus(cardId, like){}

  //PATCH https://around.nomoreparties.co/v1/group-12/users/me/avatar
  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }
}
export default Api;
