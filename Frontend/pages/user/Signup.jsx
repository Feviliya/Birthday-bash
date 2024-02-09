import { TextField ,Button} from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authAdmin from '../../assets/authAdmin.svg'
import '../../assets/css/user/Signup.css'
export const Signup = () => {
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpwd,setConfirmpwd]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const [name,setName]=useState("");
    const navigate=useNavigate();


    const handleMail=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handleName=(event)=>{
      event.preventDefault();
      setName(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const confirmpassword=(event)=>{
      event.preventDefault();
      setConfirmpwd(event.target.value);

    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      const errors = validate({ email, password,confirmpwd });
      setFormErrors(errors);
      if (isSubmit) {
        navigate('/landing');
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
      if(values.password != values.confirmpwd){
        errors.confirmpwd="Password does not match";
      }
      const isValid = Object.keys(errors).length === 0;
      setIsSubmit(isValid);

      return errors;
    };
    

  return (
    <div id="signup-box-main">
        <form className="signup-box" onSubmit={handleSubmit}>
                  <h1 className="ask">Sign Up</h1>
                  <br></br>
                  <TextField onChange={handleMail} value={email}  className="inp"  label="Enter email" required></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-5%"}}>{formErrors.email}</p>
                  <br></br>
                  <TextField onChange={handleName} value={name}  className="inp" type="name" label="Enter name" required></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-43%"}}>{formErrors.password}</p>
                  <br></br>
                  <TextField onChange={handlePwd} value={password}  className="inp" type="password" label="Enter new password" required></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-43%"}}>{formErrors.password}</p>
                  <br></br>
                  <TextField onChange={confirmpassword} value={confirmpwd}  className="inp" type="password" label="Confirm password" required></TextField>
                  <p  style={{color:"brown",fontSize:"13px"}}>{formErrors.confirmpwd}</p>
                  <br></br>
                  <Button type="submit"  id="login-button"  variant="contained" >
                      Log In 
                  </Button>
                
            </form>
            <img className="login-girl" height={400} width={500} src={authAdmin}></img>
    </div>
  )
}
