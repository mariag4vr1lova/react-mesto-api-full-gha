class Api {
    constructor(options) {
      this._url = options.baseUrl;
    }
    _checkRes(res) {
      if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }}

    getInfo(token) {
      return fetch(`${this._url}/users/me`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        return this._checkRes(res);
      });
    }
    getCards(token) {
      return fetch(`${this._url}/cards`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        return this._checkRes(res);
      });
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
      .then((res) => {
        return this._checkRes(res);
      });
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
      .then((res) => {
        return this._checkRes(res);
      });
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
      .then((res) => {
        return this._checkRes(res);
      });
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
    .then((res) => {
      return this._checkRes(res);
    });
  }
  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then((res) => {
      return this._checkRes(res);
    });
  }
};
const api = new Api({
    baseUrl: 'https://api.imamova.maria.nomoredomainsrocks.ru',
})
export default api