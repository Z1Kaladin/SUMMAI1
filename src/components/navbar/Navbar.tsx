import "./navbar.scss"
import { Users } from "../../data"
const Navbar = () => {
  return (
    
    <div className="navbar">
      <div className="logo">
        <img src="" alt="" />
        <span>SUMMAI</span>
      </div>
      <div className="icons">
        <img src="/settings.svg" alt="" className="icon" />
        {Users.map( User =>
        <div className="user">
          
          <span>{User.name}</span>
        </div>
        )}
      </div>
    </div>
  
  )
}

export default Navbar