import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { BsFillTrashFill } from 'react-icons/bs'; // Importing icons
import { toast } from 'react-toastify';

const AdminTable = () => {
  // Sample data for demonstration
  const [data, setData] = useState([]);

    useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/form/getcontact`)
      .then(response => {
        setData(response.data);
        toast.success("You have logged in successfully");
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);



  const handleDelete = (email) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/form/deletecontact`, {
      data: { email }
    })
      .then(response => {
        // Update the state to reflect the deleted contact
        setData(data.filter(contact => contact.email !== email));
        toast.success("Contact deleted successfully");
      })
      .catch(error => {
        console.error('Error deleting item:', error);
        toast.error("Error deleting contact");
      });
  };

  
  return (
    <> <div className="text-center p- mb-5 ml-40 hover:text-5xl hover:mb-0 text-cyan-500 hover:text-white text-7xl">
    <h1>Users</h1>
  </div>
    <div className="container mx-80 my-20 p-4">
      <table className="min-w-full outline outline-cyan-500 shadow shadow-lg shadow-cyan-500 rounded-xl overflow-hidden">
        <thead className="bg-cyan-900 text-white outline outline-cyan-500">
          <tr>
            <th className="w-1/6 px-4 py-4">S.No</th>
            <th className="w-2/6 px-4 py-4">Name</th>
            <th className="w-2/6 px-4 py-4">Phone Number</th>
            <th className="w-2/6 px-4 py-4">E-mail</th>
            <th className="w-2/6 px-4 py-4">Service</th>
            <th className="w-3/6 px-4 py-4">Comments</th>
            <th className="w-1/6 px-4 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center border-b border-gray-200">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{item.name}</td>
              <td className="py-2">{item.phone}</td>
              <td className="py-2">{item.email}</td>
              <td className="py-2">{item.service}</td>
              <td className="py-2">{item.comments}</td>
              <td className="py-2">
                <div className="flex justify-center items-center">
                  <BsFillTrashFill
                    className="cursor-pointer text-blue-500 mr-2 hover:text-white"
                    size={20}
                    onClick={() => handleDelete(item.email)}
                    onMouseEnter={(e) => e.currentTarget.classList.add('text-white')}
                    onMouseLeave={(e) => e.currentTarget.classList.remove('text-white')}
                    title="Delete"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminTable;
