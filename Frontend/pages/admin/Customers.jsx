import { Dashboard } from "../../components/admin/Dashboard"

import '../../assets/css/admin/AdminDash.css'
export const Customers = () => {
  return (
    <div className="admin-comps">
        <Dashboard></Dashboard>

        <div className="admin-contents">
          <p>UserId: 1001</p>
          <p>Name : Feviliya</p>
          <p>Mail-id : fevi28@gmail.com</p>
          <p>Phone number : 9876543210</p>
          <br></br>
          <p>UserId: 1002</p>
          <p>Name : Andreas</p>
          <p>Mail-id : andr@gmail.com</p>
          <p>Phone number : 9876543201</p>
          <br></br>
          <p>UserId: 1003</p>
          <p>Name : Steven</p>
          <p>Mail-id : stev@gmail.com</p>
          <p>Phone number : 8765439210</p>
        </div>
    </div>
  )
}
