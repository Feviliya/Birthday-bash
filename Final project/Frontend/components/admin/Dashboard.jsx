import { Link } from "react-router-dom"
import '../../assets/css/admin/AdminDash.css'
import balloons from '../../assets/balloons.png'
export const Dashboard = () => {
  return (
    <div className="admin-dash">
        <img src="https://img.freepik.com/premium-photo/birthday-cake-with-candle-centerpiece-birthday-parties-ancient-greece-when-birth-artemis-goddess-moon-hunting-was-celebrated-time-they-prepared-round-cake_695181-1393.jpg" ></img>
        <img id="balloon" src={balloons}></img>
        <div className="side-nav">
            <Link to='/Customers'>Customers</Link>
            <Link to='/bookings'>Bookings</Link>
            <Link to='/admin'>Logout</Link>
        </div>
    </div>
  )
}
