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

      
      
      <div className="title">Settings
      <Link to="settings/" className="listItem">
          <img src="/settings.svg" alt="" />
          <span className="listItemTitle">Keyword Settings</span>
        </Link>
        <Link to="user/" className="listItem">
          <img src="/user.svg" alt="" />
          <span className="listItemTitle">Users</span>
        </Link>
        <span></span>
      </div>
      </div>
    </div>
  )
}

export default Menu