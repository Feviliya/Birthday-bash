import { Dashboard } from "../../components/admin/Dashboard"
import { useEffect,useState } from "react";
import '../../assets/css/admin/AdminDash.css'
import axios from "axios";
export const Customers = () => {
  const [user,setUser]=useState([]);
  const token=localStorage.getItem('token')
  const fetchDetails = async() =>{
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/auth/getUsersDetails`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "cache-control": 'no-cache'
        }
      });
      setUser(response.data)
    console.log(response.data)
  }catch(error){
    console.log(error)
  }
}

  useEffect(() => {
    fetchDetails()
  }, []);

  const DisplayData = user.map(
    book => {
      return(
      <div className="admin-contents " key={book.booking_id}>
        <p>User ID    : {book.userid}</p>
        <p>Name          : {book.username}</p>
        <p>Address       : {book.address}</p>
        <p>Age         : {book.age}</p>
        <p>Phone          : {book.phone}</p>
    </div>
    )
        
    }
  )

  return (
    <div className="admin-comps">
        <Dashboard></Dashboard>
        {DisplayData}
    </div>
  )
}
