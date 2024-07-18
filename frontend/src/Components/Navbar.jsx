// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import logo from "../assets/logo.png";
// import { FiPhone } from 'react-icons/fi'; // Import FiPhone for the contact icon
// import { HiOutlineHome } from 'react-icons/hi'; // Import HiOutlineHome for the home icon

// const Navbar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const url = import.meta.env.VITE_BACKEND_URL;
//   const navigate = useNavigate();

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const handleMenuItemClick = (menuItem) => {
//     console.log(`${menuItem} clicked`);
//     // Handle the click event for each menu item here
//     // For example, navigate to different pages or perform specific actions
//   };

//   const logout = async () => {
//     try {
//       await axios.get(`${url}/api/user/logout`, {
//         withCredentials: true,
//       });
//       navigate('/logout');
//       navigate(0);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const navigateToContact = () => {
//     navigate('/contact');
//   };

//   return (
//     <div className='m-10 ml-40 mr-40'>
//       <div className="navbar bg-base-300 flex p-4 shadow rounded-full shadow-cyan-500 shadow-lg justify-between">
//         <div className="flex-none pl-5">
//           <div onClick={toggleDrawer} className="btn btn-ghost btn-circle outline outline-cyan-500 shadow shadow-lg shadow-cyan-500 cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-cyan-500" // Setting cyan color for home icon
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h7" />
//             </svg>
//           </div>
//         </div>
//         <div className="flex justify-center pl-1">
//           <Link to="/"><img src={logo} alt="Logo" className='h-22 w-28 shadow shadow-md rounded-2xl shadow-cyan-500' /></Link>
//         </div>
//         <div className="flex-none flex items-center">
//           <div className="dropdown dropdown-end pr-10">
//             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//               <div className="h-12 rounded-full outline outline-cyan-500 shadow shadow-lg shadow-cyan-500">
//                 <img
//                   alt="Tailwind CSS Navbar component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 outline outline-cyan-500 shadow shadow-lg shadow-cyan-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//               <li><a>Settings</a></li>
//               <li><button onClick={logout}>Logout</button></li>
//             </ul>
//           </div>
//         </div>
//         <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleDrawer}></div>
//         <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//           <div className="p-4">
//             <ul>
//               <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => handleMenuItemClick('Inbox')}>
//                 <svg className="h-6 w-6 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M10 20V14H6V20H3V10H0L10 0L20 10H17V20H14V14H10Z" />
//                 </svg>
//                 <Link to="/"><span>Home</span></Link>
//               </li>
//               {/* <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => handleMenuItemClick('Starred')}>
//                 <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2v7a2 2 0 002 2h6a2 2 0 002-2v-7a2 2 0 002-2V5a2 2 0 00-2-2H5zm4 2h2v2H9V5zm-3 4h10v7H6v-7z"/></svg>
//                 <span>Starred</span>
//               </li>
//               <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => handleMenuItemClick('Send email')}>
//                 <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.3 6.7a1 1 0 011.4 0L10 12.3l6.3-5.6a1 1 0 111.4 1.4l-7 6.3a1 1 0 01-1.4 0l-7-6.3a1 1 0 010-1.4z"/></svg>
//                 <span>Send email</span>
//               </li>
//               <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => handleMenuItemClick('Drafts')}>
//                 <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v11H4V5z"/><path d="M4 7h12v2H4V7zm0 4h8v2H4v-2z"/></svg>
//                 <span>Drafts</span>
//               </li>
//               <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => handleMenuItemClick('All mail')}>
//                 <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v11H4V5z"/><path d="M5 8h10v2H5V8z"/></svg>
//                 <span>All mail</span>
//               </li>
//               <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => handleMenuItemClick('Trash')}>
//                 <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v11H4V5z"/><path d="M5 8h10v2H5V8z"/><path d="M5 10h10v2H5v-2z"/></svg>
//                 <span>Trash</span>
//               </li>
//               <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => handleMenuItemClick('Spam')}>
//                 <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a1 1 0 100 2h1v8a2 2 0 002 2h8a2 2 0 002-2V7h1a1 1 0 100-2h-1V4a2 2 0 00-2-2h-6a2 2 0 00-2 2v1H3zm3-1v1h8V4H6z"/></svg>
//                 <span>Spam</span>
//               </li> */}
//               <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={navigateToContact}>
//                 <FiPhone className="h-6 w-6 mr-2 text-cyan-500" /> {/* Using FiPhone icon and setting cyan color */}
//                 <span>Contact Us</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import logo from "../assets/logo.png";
import { FiPhone } from 'react-icons/fi'; // Import FiPhone for the contact icon

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`${menuItem} clicked`);
    // Handle the click event for each menu item here
    // For example, navigate to different pages or perform specific actions
  };

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

  return (
    <div className='m-10 md:ml-40 md:mr-40'>
      <div className="navbar bg-base-300 flex p-4 shadow rounded-full shadow-cyan-500 shadow-lg justify-between">
        <div className="flex-none pl-5">
          <div onClick={toggleDrawer} className="btn btn-ghost btn-circle outline outline-cyan-500 shadow shadow-lg shadow-cyan-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-cyan-500" // Setting cyan color for home icon
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center pl-1">
          <Link to="/"><img src={logo} alt="Logo" className='h-22 w-28 shadow shadow-md rounded-2xl shadow-cyan-500' /></Link>
        </div>
        <div className="flex-none flex items-center">
          <div className="dropdown dropdown-end pr-10">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="h-12 rounded-full outline outline-cyan-500 shadow shadow-lg shadow-cyan-500">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  outline outline-cyan-500 shadow shadow-lg shadow-cyan-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Link to="/profile"><li className='hover:bg-cyan-500 hover:text-black rounded-box'><a>Profile</a></li></Link>
              <li><button className='hover:bg-cyan-500 hover:text-black rounded-box' onClick={logout}>Logout</button></li>
            </ul>
          </div>
        </div>
        {/* Drawer backdrop */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleDrawer}></div>
        {/* Drawer content */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <ul>
              <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={() => handleMenuItemClick('Inbox')}>
                <svg className="h-6 w-6 mr-2 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 20V14H6V20H3V10H0L10 0L20 10H17V20H14V14H10Z" />
                </svg>
                <Link to="/"><span>Home</span></Link>
              </li>
              {/* Add more menu items here */}
              <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500 py-3 cursor-pointer" onClick={navigateToContact}>
                <FiPhone className="h-6 w-6 mr-2 text-cyan-500" /> {/* Using FiPhone icon and setting cyan color */}
                <span>Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
