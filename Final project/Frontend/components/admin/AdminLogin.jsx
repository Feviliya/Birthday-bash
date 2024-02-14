import { TextField,Button } from "@mui/material"
import adminbirthday from "../../assets/adminbirthday.svg"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"
import { login } from "../../redux/UserSlice"
export const AdminLogin = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  const navigate=useNavigate();


  const handleMail=(event)=>{
      event.preventDefault();
      setEmail(event.target.value);
  }
  const handlePwd=(event)=>{
      event.preventDefault();
      setPassword(event.target.value);
  }
  const dispatch= useDispatch();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const errors = validate({ email, password });
    setFormErrors(errors);
    dispatch(
      login(
          {
              email:email,
              password:password,
              role:"USER"
          }
      )
  )
    if (isSubmit) {
      try{
        const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
                  email,
                  password
              });
        let token=response.data.token;
        let user=response.data.id;
        localStorage.setItem('token',token);
        console.log(response.data)
        localStorage.setItem('user',JSON.stringify(user));
        navigate('/Customers');
    }catch(error){
        console.error('Error: ',error);
    }
    }
  };


  const validate = (values) => {
    const errors = {};
  
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (values.email.length < 5) {
      errors.email = "Email invalid format";
    }
  
    if (!values.password) {
      errors.password = "Password is Required";
    }
  
    const isValid = Object.keys(errors).length === 0;
    setIsSubmit(isValid);

    return errors;
  };
  

  
  return (
    <div id="log-box-main" className="admin-login-box">
        <form className="emp-box admin-box" onSubmit={handleSubmit}>
                  <h1 className="ask">Admin Sign In</h1>
                  <br></br>
                  <TextField onChange={handleMail} value={email}  className="inp"  label="Email" required></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-5%"}}>{formErrors.email}</p>
                  <br></br>
                  <TextField onChange={handlePwd} value={password}  className="inp" type="password" label="Password" required></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-43%"}}>{formErrors.password}</p>
                  
                  <br></br>
                  <Button type="submit"  id="login-button"  variant="contained" >
                      Log In 
                  </Button>
                
            </form>
            <img className="login-girl" height={400} width={500} src={adminbirthday}></img>
    </div>
  )
}
