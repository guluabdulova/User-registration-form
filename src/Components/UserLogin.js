import React, { useState } from 'react';
import '../Css/userlogin.css'
const UserLogin =()=>{
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

 const handleEmailChange =(e)=>{
    setEmail(e.target.value);
    setEmailError('');
  };
const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
    setPasswordError('');
  };
const handleLogin = () =>{
    console.log('Email:', email);
    console.log('Password:', password);

    if (!email.endsWith('.com'))
    {
      setEmailError('Only .com domains are allowed.');
    }

    if (password.length<8)
    {
      setPasswordError('Password must be at least 8 characters.');
    }
  };

  return (
    <div className="container">
      <h2>User Registration</h2>
      <form>
        <div><label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
          <span className="error">{emailError}</span></div>

        <div><label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <span className="error">{passwordError}</span></div>
        <button className='button' type="button" onClick={handleLogin}>Login</button>

      </form>
    </div> );
};

export default UserLogin;
