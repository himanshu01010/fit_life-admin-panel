// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BsFillTrashFill } from 'react-icons/bs'; // Importing icons

// const AdminTable = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     // Replace with your API endpoint
// //     axios.get('https://your-api-endpoint.com/data')
// //       .then(response => {
// //         setData(response.data);
// //       })
// //       .catch(error => {
// //         console.error('There was an error fetching the data!', error);
// //       });
// //   }, []);

//   const data=[
//       {name:"sdihvbsd",phoneNumber:"62456245685",email:"vjhbsdvsjhdvb",service:"ivhbvuwydbv0",comments:"iywvbc iyhwdcvb iwydfchjb "},
//       {name:"sdihvbsd",phoneNumber:"62456245685",email:"vjhbsdvsjhdvb",service:"ivhbvuwydbv0",comments:"iywvbc iyhwdcvb iwydfchjb "},
//       {name:"sdihvbsd",phoneNumber:"62456245685",email:"vjhbsdvsjhdvb",service:"ivhbvuwydbv0",comments:"iywvbc iyhwdcvb iwydfchjb "},
//       {name:"sdihvbsd",phoneNumber:"62456245685",email:"vjhbsdvsjhdvb",service:"ivhbvuwydbv0",comments:"iywvbc iyhwdcvb iwydfchjb "},
//   ]

//   const handleDelete = (index) => {
//     // Make API call to delete item by index or ID
//     axios.delete(`https://your-api-endpoint.com/data/${index}`)
//       .then(response => {
//         // Update state or fetch data again to reflect changes
//         // Example: fetchData();
//         console.log('Item deleted successfully!');
//       })
//       .catch(error => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <table className="min-w-full shadow shadow-lg shadow-cyan-500 rounded-xl outline outline-cyan-500">
//         <thead className="bg-base-300 text-white">
//           <tr>
//             <th className="w-1/12 px-5 py-5 text-xl">S.No</th>
//             <th className="w-2/12 px-5 py-5 text-xl">Name</th>
//             <th className="w-2/12 px-5 py-5 text-xl">Phone Number</th>
//             <th className="w-2/12 px-5 py-5 text-xl">E-mail</th>
//             <th className="w-2/12 px-5 py-5 text-xl">Service</th>
//             <th className="w-3/12 px-5 py-5 text-xl">Comments</th>
//             <th className="w-1/12 px-5 py-5 text-xl">Actions</th> {/* New column for actions */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="text-center border-b border-gray-200">
//               <td className="py-2">{index + 1}</td>
//               <td className="py-2">{item.name}</td>
//               <td className="py-2">{item.phoneNumber}</td>
//               <td className="py-2">{item.email}</td>
//               <td className="py-2">{item.service}</td>
//               <td className="py-2">{item.comments}</td>
//               <td className="py-2">
//                 <div className="flex justify-center items-center">
//                   <BsFillTrashFill
//                     className="cursor-pointer text-cyan-500 mr-2 hover:text-white"
//                     size={20}
//                     onClick={() => handleDelete(index)}
//                     onMouseDown={(e) => e.stopPropagation()} // Prevents event from bubbling to tr element
//                   />
//                   {/* Optional: Show different icon on click or hover */}
//                   {/* <BsFillTrash2Fill className="cursor-pointer text-red-500 hover:text-white" size={20} /> */}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminTable;

import React, { useState } from 'react';
import axios from 'axios';
import { BsFillTrashFill } from 'react-icons/bs'; // Importing icons

const AdminTable = () => {
  // Sample data for demonstration
  const data = [
    { name: 'John Doe', phoneNumber: '62456245685', email: 'john.doe@example.com', service: 'Service A', comments: 'Some comments' },
    { name: 'Jane Smith', phoneNumber: '62456245685', email: 'jane.smith@example.com', service: 'Service B', comments: 'More comments' },
    { name: 'Michael Johnson', phoneNumber: '62456245685', email: 'michael.johnson@example.com', service: 'Service C', comments: 'Additional comments' },
  ];

  const handleDelete = (index) => {
    // Replace with your delete logic
    console.log(`Deleting item at index ${index}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className=" ">
        <table className="min-w-full outline outline-cyan-500 divide-y divide-gray-200 shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-cyan-900 outline outline-cyan-500 text-white">
            <tr>
              <th className="hidden md:table-cell px-4 py-3">S.No</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone Number</th>
              <th className="px-4 py-3">E-mail</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Comments</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-base divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="hidden md:table-cell py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.phoneNumber}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.service}</td>
                <td className="px-4 py-2">{item.comments}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center">
                    <BsFillTrashFill
                      className="cursor-pointer text-blue-500 mr-2 hover:text-white"
                      size={20}
                      onClick={() => handleDelete(index)}
                      title="Delete"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
