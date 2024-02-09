import '../../assets/css/user/Myevents.css'
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/UserSlice';
import { getBookingById, getUserDetailById } from '../../service/api';


export const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [bookingDetails,setBookingDetails] =useState({});
  const userid = localStorage.getItem('user');

  // const dispatch=useDispatch();
  const fetchBookings = async () => {
    try {
      const bookingResponse = await getBookingById(userid);
      setBookingDetails(bookingResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await getUserDetailById(userid);       //change here
      setUserDetails(response.data);
      // dispatch(login(response.data));
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  useEffect(() => {
    if (userid) {
      fetchBookings();
      fetchUserDetails();
    }
  }, [userid]);


  return (
    <div>
        <div className="profile">
            <p>Name :{userDetails.username}</p>
            <p>Email id : </p>
            <p>Age : {userDetails.age}</p>
        </div> 
        <br></br>
        <div className='bookings'>
            <p>My Bookings</p>
            <p>{bookingDetails.package_name}</p>
            <p>{bookingDetails.venue}</p>
            
        </div>
    </div>
    
  )
}
