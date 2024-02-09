import axios from "axios";

const token = localStorage.getItem('token');
const headers = {
    'Authorization':`Bearer ${token}`,
    'cache-control':'no-cache',
    // 'Content-Type': 'application/json'
}

const URI = 'http://localhost:8080/api/v1/auth/'


const authenticate =(user)=>{axios.post(`${URI}authenticate`,user,{headers})}
const register = ()=> {axios.post(`${URI}register`,{headers})}
const getUserDetails = ()=>{axios.get(`${URI}getUserDetails`,{headers})};
const addUserDetails = (details)=>{axios.post(`${URI}addUserDetails`,details,{headers})}
const getUserDetailById = (id)=>{axios.get(`${URI}getUserDetail/${id}`,{headers})}
const updateUserDetails = (id) =>{axios.put(`${URI}updateUserDetails/${id}`,{headers})}
const getBookings = () =>{axios.get(`${URI}getBookings`,{headers})}
const getBookingById = (id)=> {axios.get(`${URI}getbookings/${id}`,{headers})}
const addBooking = (booking)=>{axios.post(`${URI}/addBooking`,booking,{headers})}

export {authenticate,register,getBookingById,getBookings,getUserDetailById,getUserDetails,updateUserDetails,addUserDetails,addBooking}
