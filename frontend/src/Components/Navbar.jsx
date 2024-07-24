import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import logo from "../assets/logo.png";
import profileimg from '../assets/i22.jpg'
import { FiPhone, FiUsers, FiGift, FiMenu, FiX } from 'react-icons/fi'; // Import new icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.get(`${url}/api/user/logout`, {
        withCredentials: true,
      });
      navigate('/logout');
      navigate(0);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  const navigateToMembership = () => {
    navigate('/membership');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='mt-10 m-2 md:ml-80 md:mr-24 '>
      <div className="navbar bg-base-300 flex p-4 shadow rounded-full shadow-cyan-500 shadow-lg justify-between md:flex-row flex-col">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            className="md:hidden btn btn-ghost"
            onClick={toggleMenu}
          >
            <FiMenu className="h-6 w-6 text-cyan-500" />
          </button>
          <Link to="/" className="flex justify-center md:pl-8 w-full ml- md:w-auto">
            <img src={logo} alt="Logo" className='h-12 md:h-24 w-20 md:w-28 shadow shadow-md rounded-2xl shadow-cyan-500' />
          </Link>
          <div className="md:hidden flex items-center">
            <div className="dropdown dropdown-end pr-5">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className=" h-12  rounded-full outline outline-cyan-500 shadow shadow-lg shadow-cyan-500">
                  <img
                    alt="User Avatar"
                    src={profileimg}/>
                  
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 outline outline-cyan-500 shadow shadow-lg shadow-cyan-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <Link to="/profile"><li className='hover:bg-cyan-500 hover:text-black rounded-box'><a>Profile</a></li></Link>
                <li><button className='hover:bg-cyan-500 hover:text-black rounded-box' onClick={logout}>Logout</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-none items-center">
          <div className="dropdown dropdown-end pr-10">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="h-12 rounded-full outline outline-cyan-500 shadow shadow-lg shadow-cyan-500">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 outline outline-cyan-500 shadow shadow-lg shadow-cyan-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Link to="/profile"><li className='hover:bg-cyan-500 hover:text-black rounded-box'><a>Profile</a></li></Link>
              <li><button className='hover:bg-cyan-500 hover:text-black rounded-box' onClick={logout}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed Sidebar */}
      <div className="hidden md:block fixed inset-y-0 rounded-3xl outline outline-cyan-500 top-1 bottom-1 shadow shadow-xl ml-1 shadow-cyan-500 left-0 z-50 pr-20 p-4">
        <ul className='pt-48  pl-8'>
          <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer">
            <svg className="h-6 w-6 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 20V14H6V20H3V10H0L10 0L20 10H17V20H14V14H10Z" />
            </svg>
            <Link to="/home"><span>Dashboard</span></Link>
          </li>
          <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 px-5 cursor-pointer" onClick={navigateToMembership}>
            <FiGift className="h-6 w-6 mr-2 text-cyan-500" /> {/* Replaced FiPhone with FiGift */}
            <span>Membership</span>
          </li>
          <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={navigateToContact}>
            <FiUsers className="h-6 w-6 mr-2 text-cyan-500" /> {/* Replaced FiPhone with FiUsers */}
            <span>Users</span>
          </li>
        </ul>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 left-0 bg-base-300 z-40 p-4 bg-opacity-90 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button
          className="btn btn-ghost absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <FiX className="h-6 w-6 text-cyan-500 hover:bg-white" />
        </button>
        <ul className='pt-20 space-y-4 mt-20 mr-8 text-center'>
          <li className="flex items-center justify-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => { navigate('/home'); toggleMenu(); }}>
            <svg className="h-6 w-6 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 20V14H6V20H3V10H0L10 0L20 10H17V20H14V14H10Z" />
            </svg>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center justify-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => { navigateToMembership(); toggleMenu(); }}>
            <FiGift className="h-6 w-6 mr-2 text-cyan-500" />
            <span>Membership</span>
          </li>
          <li className="flex items-center justify-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => { navigateToContact(); toggleMenu(); }}>
            <FiUsers className="h-6 w-6 mr-2 text-cyan-500" />
            <span>Users</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
