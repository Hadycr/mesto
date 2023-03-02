export default class UserInfo {
  constructor(profileName,profileDescription, profileAvatar) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    this._infoUser = {
      name: this._profileName.textContent,
      about: this._profileDescription.textContent,
      avatar: this._profileAvatar.src,
    }
    return this._infoUser;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileDescription.textContent = data.about;
    this._profileAvatar.src = data.avatar; 
  }
}