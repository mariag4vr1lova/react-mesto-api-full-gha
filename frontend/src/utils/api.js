class Api {
    constructor(options) {
      this._url = options.baseUrl;
    }
    _checkRes(res) {return res.ok ? res.json() : Promise.reject}
    
    getInfo(token) {
      return fetch(`${this._url}/users/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(this._checkRes)
    }
    getCards(token) {
      return fetch(`${this._url}/cards`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(this._checkRes)
    }
    setUserInfo(data, token) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          name: data.name,
          about: data.about
        }),
      })
        .then(this._checkRes)
    }
    setNewAvatar(data, token) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          avatar: data.avatar
        })
      })
        .then(this._checkRes)
    }
    addCard(data, token) {
      return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          name: data.title,
          link: data.link
        })
      })
        .then(this._checkRes)
    }
  addLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._checkRes)
  }
  deleteLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(this._checkRes)
  }
  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(this._checkRes)
  }
};
const api = new Api({
    baseUrl: 'http://api.imamova.maria.nomoredomainsrocks.ru'
})
export default api