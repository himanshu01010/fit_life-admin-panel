import React, { useState } from 'react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`${menuItem} clicked`);
    // Handle the click event for each menu item here
    // For example, navigate to different pages or perform specific actions
  };

  return (
    <div className="navbar bg-base-100 p-4 shadow-md">
      <div className="flex-1">
        <div onClick={toggleDrawer} className="btn btn-ghost btn-circle cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleDrawer}></div>
      <div className={`fixed inset-y-0 left-0 bg-black z-50 w-64 transform transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <ul>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('Inbox')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v11H4V5z"/></svg>
              <span>Inbox</span>
            </li>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('Starred')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2v7a2 2 0 002 2h6a2 2 0 002-2v-7a2 2 0 002-2V5a2 2 0 00-2-2H5zm4 2h2v2H9V5zm-3 4h10v7H6v-7z"/></svg>
              <span>Starred</span>
            </li>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('Send email')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.3 6.7a1 1 0 011.4 0L10 12.3l6.3-5.6a1 1 0 111.4 1.4l-7 6.3a1 1 0 01-1.4 0l-7-6.3a1 1 0 010-1.4z"/></svg>
              <span>Send email</span>
            </li>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('Drafts')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v11H4V5z"/><path d="M4 7h12v2H4V7zm0 4h8v2H4v-2z"/></svg>
              <span>Drafts</span>
            </li>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('All mail')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v11H4V5z"/><path d="M5 8h10v2H5V8z"/></svg>
              <span>All mail</span>
            </li>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('Trash')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v11H4V5z"/><path d="M5 8h10v2H5V8z"/><path d="M5 10h10v2H5v-2z"/></svg>
              <span>Trash</span>
            </li>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('Spam')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a1 1 0 100 2h1v8a2 2 0 002 2h8a2 2 0 002-2V7h1a1 1 0 100-2h-1V4a2 2 0 00-2-2h-6a2 2 0 00-2 2v1H3zm3-1v1h8V4H6z"/></svg>
              <span>Spam</span>
            </li>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('Plans')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8V4m0 0L8 8m4-4l4 4m-4 4v12"/></svg>
              <span>Plans</span>
            </li>
            <li className="flex items-center py-2 cursor-pointer" onClick={() => handleMenuItemClick('Contact Us')}>
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/></svg>
              <span>Contact Us</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
