import React, { useEffect, useState } from 'react'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import axios from "axios"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'


const App = () => {

  const url = import.meta.env.VITE_BACKEND_URL;

  const [auth,setAuth]= useState(false);

  useEffect(()=>{
    axios.get(`${url}/api/user/logincheck`,{withCredentials:true})
    .then(res=>{
      setAuth(res.data);
      // res.data
    }).catch(()=>{
      setAuth(false)

    })
  },[auth]);
  

  console.log(auth);


  return (
    <Router>
       <ToastContainer />
      <Routes>
        <Route path='/' element={auth ? <Navbar/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={auth ? <Navigate to='/'/>:<Login/>}/>
        <Route path='/logout' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App