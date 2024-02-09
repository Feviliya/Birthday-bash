import { TextField,Button } from "@mui/material"
import '../../assets/css/user/Login.css'
import birthdaylogin from "../../assets/birthdaylogin.svg"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../../redux/UserSlice"
import  axios  from "axios"
import { authenticate } from "../../service/api"


export const Loginbox = () => {
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
    const handleSubmit = (event) => {
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
        navigate('/landing');
        try{
          const response=authenticate({email,password})   //change here
          let token=response.data.token;
          let user=response.data.id;
          localStorage.setItem('token',token);
          console.log(response.data)
          localStorage.setItem('user',JSON.stringify(user));
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
    <div id="log-box-main">
        <form className="emp-box" onSubmit={handleSubmit}>
                  <h1 className="ask">Sign In</h1>
                  <br></br>
                  <TextField onChange={handleMail} value={email}  className="inp"  label="Email*" ></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-5%"}}>{formErrors.email}</p>
                  <br></br>
                  <TextField onChange={handlePwd} value={password}  className="inp" type="password" label="Password*" ></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-43%"}}>{formErrors.password}</p>
                  <br></br>
                  <p>New user? Register <Link to="/signup" element>here</Link></p>
                  
                  <br></br>
                  <Button type="submit"  id="login-button"  variant="contained" >
                      Log In 
                  </Button>
                
            </form>
            <img className="login-girl" height={400} width={500} src={birthdaylogin}></img>
    </div>
  )
}
