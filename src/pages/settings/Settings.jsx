import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings_wrapper">
        <div className="settings__title">
          <span className="settings__title__update">Update Your Account</span>
          <span className="settings__title__delete">Delete Account</span>
        </div>
        <form className="settings_form">
          <label>Profile Picture</label>
          <div className="settings__pp">
            <img src="https://picsum.photos/900/600" alt="" />
            <label htmlFor="fileInput">
              <i className="settings_pp_icon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Nari Park" />
          <label>Email</label>
          <input type="email" placeholder="email@email.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings__submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
