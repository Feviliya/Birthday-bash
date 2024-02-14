import axios from "axios";

const token = localStorage.getItem('token');
const headers = {
    'Authorization':`Bearer ${token}`,
    'cache-control':'no-cache',
    'Content-Type': 'application/json'
}

const URI = 'http://localhost:8080/api/v1/auth'


const authenticate = async(user)=>{await axios.post(`${URI}/authenticate`,user)}
const register = async()=> { await axios.post(`${URI}/register`,{headers})}
const getUserDetails = async()=>{await axios.get(`${URI}/getUserDetails`,{headers})};
const addUserDetails = (details)=>{axios.post(`${URI}/addUserDetails`,details,{headers})}

const getUserDetailById = (userid) => axios.get(`${URI}/getUserDetail/${userid}`, headers);
const getBookingById = (userId) => axios.get(`${URI}/getbookings/${userId}`, headers);

const updateUserDetails = (id) =>{axios.put(`${URI}updateUserDetails/${id}`,{headers})}
const getBookings = async() =>{await axios.get(`${URI}/getBookings`,{headers})}

const addBooking = (booking)=>{ axios.post(`${URI}/addBooking`,booking,{headers});console.log(token)}

export {authenticate,register,getBookingById,getBookings,getUserDetailById,getUserDetails,updateUserDetails,addUserDetails,addBooking}
