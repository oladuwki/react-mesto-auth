export default class Api {
  constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
  }

  _handleResponse(res) {
    if (!res.ok ) {
        return Promise.reject(console.log(`Что-то пошло не так. Ошибка ${res.status}`));
    }
    return res.json();
  }

  getInitalCards(){
      return fetch(`${this._url}cards`, {
          method: "GET",
          headers: this._headers
        })
        .then(this._handleResponse)
  }

  addCard({name, link}) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._handleResponse)
  }

  
  deleteCard(cardId){
    return fetch(`${this._url}cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
    })
    .then(this._handleResponse)
  }

  putLikes(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
        method: "PUT",
        headers: this._headers
    })
    .then(this._handleResponse)
  }

  deleteLikes(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this._headers
    })
    .then(this._handleResponse)
  }

  getProfileInfo() {
    return fetch(`${this._url}users/me`, {
        method: "GET",
        headers: this._headers
      })
      .then(this._handleResponse)
  }

  getInitialData() {
    return Promise.all([this.getProfileInfo(), this.getInitialCards()]);
  }

  saveProfileInfo({name, description}) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description
      })
    })
    .then(this._handleResponse)
  }

  saveAvatar({avatar}) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
      avatar: avatar
      })
    })
    .then(this._handleResponse)
  }  

}

 export const api = new Api({
  url:"https://mesto.nomoreparties.co/v1/cohort-21/",
  headers: {
      'Content-Type': 'application/json',
      authorization: 'a8225bf7-b253-4907-b1a0-ba222b85105e',
  }
});

