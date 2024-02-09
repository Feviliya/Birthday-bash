import { Link } from "react-router-dom"
import balloon from '../../assets/balloons.png'
import '../../assets/css/user/Navbar.css'
export const Navbar = () => {
  return (
    <div id="nav-bar-user">
        <div className="nav-logo">
            <img src={balloon} width={70}></img>
        </div>
        <div className="nav-links">
            <Link to='/landing'>Home</Link>
            <Link to='/about-us'>About us</Link>
            <Link to='/myevents'>Profile</Link>
            <Link className="logout" to='/'>Logout</Link>
        </div>
    </div>
  )
}
