import { Dashboard } from "../../components/admin/Dashboard"
import '../../assets/css/admin/AdminDash.css'
export const Bookings = () => {
  return (
    <div>
        <Dashboard></Dashboard>
        <div className="admin-contents ">
          <p>Booking id    : 1234</p>
          <p>Name          : Andreas</p>
          <p>Mail-id       : and@gmail.com</p>
          <p>Phone number  : 9876543201</p>
          <p>Event Date    : 21/02/2024</p>
          <p>Venue         : Coimbatore</p>
          <p>Package       : Silver</p>
          <p>Food          : Both veg and non-veg</p>
          <p>No of members : 15</p>
        </div>
    </div>
  )
}
