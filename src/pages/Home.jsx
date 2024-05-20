import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header';

function Home() {
  const navigate = useNavigate();

  return (
    <div id='app'>
      <Header />
      <button onClick={()=>{
        navigate("/signin")
      }}>Sign in</button>
    </div>
  )    
}

export default Home;