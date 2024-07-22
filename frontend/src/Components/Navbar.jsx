import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import logo from "../assets/logo.png";
import { FiPhone, FiUsers, FiGift } from 'react-icons/fi'; // Import new icons

const Navbar = () => {
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

  return (
    <div className='m-10 md:ml-40 md:mr-40'>
      <div className="navbar bg-base-300 flex p-4 ml-32 shadow rounded-full shadow-cyan-500 shadow-lg justify-between">
        <div className="flex-none pl-16">
          <Link to="/">
            <img src={logo} alt="Logo" className='h-22 w-28 shadow shadow-md rounded-2xl shadow-cyan-500' />
          </Link>
        </div>
        <div className="flex-none flex items-center">
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
      <div className="fixed inset-y-0 rounded-3xl outline outline-cyan-500 top-1 bottom-1 shadow shadow-xl ml-1 shadow-cyan-500 left-0 z-50 pr-20 p-4">
        <ul className='pt-48  pl-8'>
          <li className="flex items-center  pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer">
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
    </div>
  );
};

export default Navbar;
