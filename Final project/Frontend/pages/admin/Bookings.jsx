import { Dashboard } from "../../components/admin/Dashboard"
import '../../assets/css/admin/AdminDash.css'
import { useEffect, useState } from "react"
import axios from "axios"
export const Bookings = () => {
  const token=localStorage.getItem('token')
  const [bookings,setBookings]=useState([]);
  const fetchDetails = async() =>{
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/auth/getBookings`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "cache-control": 'no-cache'
        }
      });
      setBookings(response.data)
    console.log(response.data)
  }catch(error){
    console.log(error)
  }
}

  useEffect(() => {
    fetchDetails()
  }, []);



  const DisplayData = bookings.map(
    book => {
      return(
      <div className="admin-contents " key={book.booking_id}>
        <p>Booking id    : {book.booking_id}</p>
        <p>Name          : {book.name}</p>
        <p>Package       : {book.package_name}</p>
        <p>Venue         : {book.venue}</p>
        <p>Food          : {book.food}</p>
        <p>No of members : {book.members}</p>
        <p>Event         : {book.events}</p>
    </div>
    )
        
    }
  )


  return (
    <div>
        <Dashboard></Dashboard>
        {DisplayData}
    </div>
  )
}
