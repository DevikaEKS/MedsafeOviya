
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    if (email === "") {
      setEmailError("Email is required!");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address!");
      isValid = false;
    }

    if (password === "") {
      setPasswordError("Password is required!");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must contain at least 8 characters");
      isValid = false;
    }    
    if (!isValid) {
      toast.error("Please fix the errors before submitting!");
      return;
    }                                                                                                                                                                                                                           

    axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    }).then(response => {
      if(response.data.message==="Login successful"){
        if(response.data.user.id===1){

          window.location.href='/adminview'
        }
        else if(response.data.user.id===2){
          window.location.href='/adminview'
        }
        toast.success("Login successful");
      }
    }).catch(error => {
      if (error.response) {
       toast.error("Login Failed")
        // console.error('Login failed:', error.response.data);
      } else {
        toast.error("Login Failed")
        // console.error('Error:', error.message);
      }
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card p-5 formbg rounded-5 border-0 m-3"
        style={{ borderRadius: "10px" }}
      >
        <h3 className="text-center logintext text-light">Login</h3>
        <h1
          className="text-center mb-4 loginhead py-2"
          style={{ fontSize: "1.5rem" }}
        >
          Welcome to Oviya Medsafe
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-light">Email Id</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Id"
              required
            />
            {emailError && <p className="text-danger mt-1">{emailError}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            {passwordError && <p className="text-danger mt-1">{passwordError}</p>}
          </div>
          {loginError && <p className="text-danger mt-1">{loginError}</p>}
          <button type="submit" className="logbtn btn mt-2 w-100">
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
    
  );
}

export default Login;
