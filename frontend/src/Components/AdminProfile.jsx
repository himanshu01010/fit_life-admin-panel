import React, { useState } from 'react';
// You can use any icon library, here we are using an SVG for the pencil icon
import { FaPencilAlt } from 'react-icons/fa';

const AdminProfile = () => {
  // Initial state for admin details
  const [admin, setAdmin] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    password: '********', // Initial password, replace with appropriate handling for security
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg', // Placeholder image URL
  });

  // State to manage editable fields
  const [name, setName] = useState(admin.name);
  const [email, setEmail] = useState(admin.email);
  const [password, setPassword] = useState(admin.password);
  const [image, setImage] = useState(admin.image);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update admin state with new name, email, password, and image
    setAdmin({ ...admin, name, email, password, image });
    // Here you would typically also send this data to your server
    console.log('Updated admin details:', { name, email, password, image });
  };

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center p-20 items-center">
      <div className="bg-cyan-300 p-10 pt-10 rounded-3xl outline outline-4 bg-opacity-50 outline-cyan-500 shadow shadow-lg shadow-cyan-500 h-full w-full max-w-xl">
        <div className="relative flex flex-col items-center">
          <img className="w-40 h-40 rounded-full object-cover mb-4" src={image} alt="Admin" />
          <label className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer">
            <FaPencilAlt className="text-gray-700" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          <h2 className="text-xl font-semibold text-gray-800">{admin.name}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-lg font-medium text-black">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-5 block w-full rounded-3xl border-base-300 p-2 shadow-2xl focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            />
          </div>
          <div className="mt-4">
            <label className="block text-lg font-medium text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-5 block w-full rounded-3xl border-base-300 p-2 shadow-2xl focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            />
          </div>
          <div className="mt-4">
            <label className="block text-lg font-medium text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-5 block w-full rounded-3xl border-base-300 p-2 shadow-2xl focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            />
          </div>
          <button
            type="submit"
            className="mt-6 ml-40 bg-base-300 hover:bg-cyan-500 hover:text-black text-white font-bold py-2 px-4 rounded-3xl"
          >
            Save & Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
