import React, { useEffect, useState } from 'react';
import Login from './Components/Login';
import Layout from './Components/Layout';
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminTable from './Components/AdminTable';
import AdminProfile from './Components/AdminProfile';
import Dashboard from './Components/Dashboard';
import Membership from './Components/Membership';

const App = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios.get(`${url}/api/user/logincheck`, { withCredentials: true })
      .then(res => {
        setAuth(res.data);
      }).catch(() => {
        setAuth(false);
      });
  }, [auth]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path='/login' element={auth ? <Navigate to='/' /> : <Login />} />
        <Route path='/logout' element={<Login />} />
        <Route element={auth ? <Layout /> : <Navigate to='/login' />}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/contact' element={<AdminTable />} />
          <Route path='/profile' element={<AdminProfile/>}/>
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/membership' element={<Membership/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
