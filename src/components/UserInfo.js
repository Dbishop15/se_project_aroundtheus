class UserInfo {
  constructor({ userName, userJob, userAvatar }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._userAvatar = document.querySelector(userAvatar);
  }
  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
  }
  getAvatarInfo() {
    return { userAvatar: this._userAvatar.src };
  }
  setUserInfo({ name, job }) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
  setAvatarInfo({ name, avatar }) {
    this._userAvatar.alt = name;
    this._userAvatar.src = avatar;
  }
}
export default UserInfo;
