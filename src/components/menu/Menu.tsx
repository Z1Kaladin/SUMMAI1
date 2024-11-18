import { Link } from "react-router-dom"
import "./Menu.scss"

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link to="/" className="listItem">
          <img src="/home.svg" alt="" />
          <span className="listItemTitle">Homepage</span>
        </Link>
        <Link to="user/" className="listItem">
          <img src="/profile.svg" alt="" />
          <span className="listItemTitle">Profile</span>
        </Link>
        <Link to="settings/" className="listItem">
          <img src="/settings.svg" alt="" />
          <span className="listItemTitle">Settings</span>
        </Link>
      </div>
      <div className="item">Settings
        <span></span>
      </div>
    </div>
  )
}

export default Menu