export default class UserInfo {
  constructor(ProfileName,ProfileDescription) {
    this._profileName = document.querySelector(ProfileName);
    this._profileDescription = document.querySelector(ProfileDescription);
  }

  getUserInfo() {
    this._infoUser = {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent,
    }
    return this._infoUser;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileDescription.textContent = data.description;
  }
}