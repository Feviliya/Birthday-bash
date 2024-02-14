import '../../assets/css/user/Myevents.css'
import { useEffect, useState } from 'react';
import { MDBBadge,MDBTableHead,MDBTable,MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Button } from '@mui/material';

export const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [bookingDetails, setBookingDetails] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const userid = localStorage.getItem('user');
  const[bookId,setBookid]=useState();
  let token=localStorage.getItem('token')
  const fetchBookings = async () => {
    try {
      const bookingResponse = await axios.get(`http://localhost:8080/api/v1/auth/getbooking/${userid}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "cache-control": 'no-cache'
        }
      });
      
      const bookingData = bookingResponse.data || [];
      setBookingDetails(bookingData);
      let showButton = true; 
      
      if (Array.isArray(bookingData) && bookingData.length === 0) {
        showButton = false;
      } else if (Object.keys(bookingData).length === 0 && bookingData.constructor === Object) {
        showButton = false;
      }
      
      setBookid(showButton ? bookingData.booking_id : null); 
      setShowButton(showButton);
      
      console.log(bookingData);
    } catch (error) {
      setBookingDetails("None");
      setBookid(null);
      setShowButton(false); 
      console.error(error);
    }
  };
  
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/auth/getUserDetail/${userid}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "cache-control": 'no-cache'
        }
      });
  
      
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  

  const deleteBooking = async () =>{
    try {
      const confirmRefresh = window.confirm("Are you sure you want to cancel the booking?");
      if (confirmRefresh) {
    const response = await axios.delete(`http://localhost:8080/api/v1/auth/deleteBooking/${bookId}`,{
      headers:{
        "Authorization":`Bearer ${token}`,
        "cache-control":'no-cache'
      }

    })
    window.location.reload(); 
    console.log(response)
  }
    } catch (error) {
      console.log(error)
    }
  }
  const [username,setName]=useState();
  const [address,setAddress]=useState();
  const [phone, setPhone]=useState();
  const [age,setAge]=useState();


  const handleSubmit = async(e) =>{
    e.preventDefault();
    let token=localStorage.getItem('token');
    let userid=localStorage.getItem('user');
    try{
      const response=await axios.post(`http://localhost:8080/api/v1/auth/updateUser`,
      {
        userid:userid,
        age:age,
        address:address,
        phone:phone,
        username:username
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }
      )
      console.log(response)
      window.location.reload(); 
    }catch(error){
      console.log(error);
    }
  }
    
  const [edit,setEdit]=useState(false);
  const handleEdit = (e) =>{
    e.preventDefault();
    if(edit==false)
    setEdit(true);
    else  setEdit(false)
  }

  useEffect(() => {
    fetchBookings();
    fetchUserDetails();
  }, []);


  return (
    <div className='my-profile-events'>
      <div className='profile'>
        <h3>Profile</h3>
      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>User Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Age</th>
          <th scope='col'>Address</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td className='fw-bold mb-1'>{userid}</td>
          <td>
            <div className='d-flex align-items-center'>
              
              <div>
              {edit ? (<input className='profile-input' value={username || ''} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Enter username'></input>) : (<p className='fw-bold mb-1'>{userDetails.username}</p>)}
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{edit ? (<input className='profile-input' value={phone} onChange={(e)=>setPhone(e.target.value)} type='number' placeholder='Enter phone'></input>) : (<p className='fw-bold mb-1'>{userDetails.phone}</p>)}</p>
          </td>
          <td>
          {edit ? (<input value={age} onChange={(e)=>setAge(e.target.value)} type='number' className='profile-input' placeholder='Enter age'></input>) : (<p className='fw-bold mb-1'>{userDetails.age}</p>)}
          </td>
          <td>{edit ? (<input value={address} onChange={(e)=>setAddress(e.target.value)} type='text' className='profile-input' placeholder='Enter address'></input>) : (<p className='fw-bold mb-1'>{userDetails.address}</p>)}</td>
          <td>
          {edit ? (
            <div>
            <Button color='primary' onClick={handleSubmit}>
              Submit
            </Button>
            <Button color='primary' onClick={handleEdit}>Cancel</Button>
            </div>
            
                
              ) : (
                
                <Button color='secondary' onClick={handleEdit}>
            Edit
          </Button>
              )}
          </td>
        </tr>
        
      </MDBTableBody>
    </MDBTable>
      </div>
      <br></br><br></br>
      <div className='bookings'>
        <h3>My Bookings</h3>
        <hr></hr>
        {!showButton && <p>No bookings yet</p>}
      {showButton && 
      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Booking id</th>
          <th scope='col'>Package</th>
          <th scope='col'>Venue</th>
          <th scope='col'>Members</th>
          <th scope='col'>Food</th>
          <th scope='col'>Events</th>
          <th scope='col'>Actions</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
      <tr>
          <td>
            <div className='d-flex align-items-center'>
              
              <div>
                <p className='fw-bold mb-1'>{bookingDetails.name}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{bookingDetails.booking_id}</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
            {bookingDetails.package_name}
            </MDBBadge>
          </td>
          <td>{bookingDetails.venue}</td>
          <td>{bookingDetails.members}</td>
          <td>{bookingDetails.food}</td>
          <td>{bookingDetails.events}</td>
          <td>
            <Button color='secondary' onClick={deleteBooking} >
              Cancel
            </Button>
          </td>
        </tr>
        

        
      </MDBTableBody>
    </MDBTable>}
    </div>
      
    <br></br>
    
    </div>
  );
}
