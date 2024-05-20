


import React, { useState } from 'react';
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [role, setRole] = useState('user'); 
  const handleChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsValid(validatePassword(value));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(password)) {
      setMessage("");
      return true;
    } else if (!regex.test(password) && password !== "") {
      setMessage("Password is Incorrect");
      return false;
    }
  };

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}/g;
    if (regEx.test(email)) {
      setMessage("");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is not valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = () => {
   
    setEmail("");
    setPassword("");

    if (role === 'admin') {
      navigate('/admin.jsx'); 
    } else {
      navigate('/user.jsx');
    }
  };

  return (
    <div>
      <Header />
      <input 
        type='email' 
        placeholder='email' 
        value={email} 
        onChange={handleOnChange} 
        onBlur={emailValidation} 
      />
      <input 
        type="password" 
        placeholder="password" 
        value={password} 
        onChange={handleChange} 
      />
      <br></br>
      <select value={role} onChange={handleRoleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <p>{message}</p>
      <button onClick={handleSubmit} className="btn1">Submit</button><br/>
      <button onClick={() => navigate("/")} className="btn2">Back</button>
    </div>
  );
}
