import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Resetpassword from './Resetpassword'; // Import the ResetPasswordModal component
import axios from "axios";
import { toast } from 'react-toastify';

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    name: '',
    email: '',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
  });

  const [name, setName] = useState(admin.name);
  const [email, setEmail] = useState(admin.email);
  const [image, setImage] = useState(admin.image);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/getuser`, { withCredentials: true });
        const userData = response.data;
        setAdmin(prevAdmin => ({
          ...prevAdmin,
          email: userData.email,
          name: userData.username,
        }));
        setName(userData.username);
        setEmail(userData.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdmin({ ...admin, name, email, image });
    console.log('Updated admin details:', { name, email, image });
  };

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

  const handleResetPassword = (newPassword) => {
    // Here you would typically also send this data to your server
    console.log('Password reset to:', newPassword);
  };

  const updateUser = async () => {
    await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/user/update`, { email, username: name }, { withCredentials: true });
    toast.success("Updated");
    fetchUser();
  };

  return (
    <div className="flex justify-center p-20 items-center">
      <div className="bg-cyan-300 p-10 pt-10 rounded-3xl outline outline-4 bg-opacity-50 outline-cyan-500 shadow shadow-lg shadow-cyan-500 h-full w-full max-w-xl">
        <div className="relative flex flex-col items-center">
          <img className="w-40 h-40 outline outline-4 outline-cyan-500 shadow shadow-xl shadow-black rounded-full object-cover mb-4" src={image} alt="Admin" />
          <label className="absolute bottom-40 right-32 bg-white p-2 rounded-full shadow-md cursor-pointer">
            <FaPencilAlt className="  text-gray-700" />
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
          <button
            onClick={updateUser}
            className="mt-6 ml-40 bg-base-300 hover:bg-cyan-500 hover:outline hover:text-xl hover:outline-white shadow-lg shadow-black hover:text-black text-white font-bold py-2 px-4 rounded-3xl"
          >
            Save & Update
          </button>
        </form>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 ml-40 bg-red-500 hover:bg-red-600 shadow-lg hover:text-xl hover:outline hover:outline-white shadow-black hover:text-black text-white font-bold py-2 px-4 rounded-3xl"
        >
          Reset Password
        </button>
      </div>
      <Resetpassword
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReset={handleResetPassword}
      />
    </div>
  );
};

export default AdminProfile;
