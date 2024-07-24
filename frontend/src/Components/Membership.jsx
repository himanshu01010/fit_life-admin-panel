<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
=======
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Membership = () => {
//   const [plans, setPlans] = useState([
//     { id: 1, name: 'BASIC', price: 20, benefits: ['Gym Without Trainers', 'Unlimited Access', 'Access To All Clubs', 'Training For All Classes', 'Exclusive Studio', 'Additional Session'] },
//     { id: 2, name: 'STANDARD', price: 35, benefits: ['Gym Without Trainers', 'Unlimited Access', 'Access To All Clubs', 'Training For All Classes', 'Exclusive Studio', 'Additional Session'] },
//     { id: 3, name: 'PROFESSIONAL', price: 50, benefits: ['Gym Without Trainers', 'Unlimited Access', 'Access To All Clubs', 'Training For All Classes', 'Exclusive Studio', 'Additional Session'] }
//   ]);

//   const [isAdmin, setIsAdmin] = useState(true); // Set this based on your auth logic
//   const [editingPlan, setEditingPlan] = useState(null);

//   useEffect(() => {
//     // Fetch initial plans from the server
//     axios.get('/api/plans')
//       .then(response => setPlans(response.data))
//       .catch(error => console.error('Error fetching plans:', error));
//   }, []);

//   const handleEdit = (plan) => {
//     setEditingPlan(plan);
//   };

//   const handleSave = (plan) => {
//     axios.put(`/api/plans/${plan.id}`, plan)
//       .then(response => {
//         setPlans(plans.map(p => p.id === plan.id ? response.data : p));
//         setEditingPlan(null);
//       })
//       .catch(error => console.error('Error updating plan:', error));
//   };

//   const handleChange = (e, field) => {
//     setEditingPlan({ ...editingPlan, [field]: e.target.value });
//   };

//   return (
//     <div className="flex justify-center space-x-4 p-8">
//       {plans.map((plan) => (
//         <div key={plan.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white p-6">
//           {editingPlan && editingPlan.id === plan.id ? (
//             <div>
//               <input 
//                 type="text" 
//                 value={editingPlan.name} 
//                 onChange={(e) => handleChange(e, 'name')} 
//                 className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
//               />
//               <input 
//                 type="number" 
//                 value={editingPlan.price} 
//                 onChange={(e) => handleChange(e, 'price')} 
//                 className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
//               />
//               <textarea 
//                 value={editingPlan.benefits.join(', ')} 
//                 onChange={(e) => handleChange(e, 'benefits')} 
//                 className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
//               />
//               <button 
//                 onClick={() => handleSave(editingPlan)} 
//                 className="bg-blue-500 text-white p-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           ) : (
//             <div>
//               <h2 className="text-xl font-bold">{plan.name}</h2>
//               <p className="text-2xl text-green-400 mb-4">${plan.price}</p>
//               <ul className="text-gray-300 mb-4">
//                 {plan.benefits.map((benefit, index) => (
//                   <li key={index}>{benefit}</li>
//                 ))}
//               </ul>
//               {isAdmin && (
//                 <button 
//                   onClick={() => handleEdit(plan)} 
//                   className="bg-blue-500 text-white p-2 rounded"
//                 >
//                   Edit
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Membership;

import React, { useState } from 'react';
import "./membership.css";
>>>>>>> 1a13dabd2228eda8478e464ad0bcdbff345b4d92

const possibleBenefits = [
  'Gym Without Trainers',
  'Unlimited Access',
  'Access To All Clubs',
  'Training For All Classes',
  'Exclusive Studio',
  'Additional Session',
  'None'
];

const Membership = () => {
  const [plans, setPlans] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true); // Set this based on your auth logic
  const [editingPlan, setEditingPlan] = useState(null);
  const [newService, setNewService] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        // Update the URL to point to your backend API
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/membership/all`);
        console.log('API response:', response.data);
        if (Array.isArray(response.data)) {
          setPlans(response.data);
        } else if (response.data.message) {
          setError(response.data.message);
        } else {
          setError('Unexpected data format received from server');
        }
      } catch (error) {
        console.error('Error fetching membership plans:', error);
        setError(error.response?.data?.message || 'Failed to fetch membership plans. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleEdit = (plan) => {
    setEditingPlan(plan);
  };

  const handleSave = async (plan) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/membership/update/${plan._id}`, plan);
      if (response.data) {
        setPlans(plans.map(p => p._id === plan._id ? response.data : p));
        setEditingPlan(null);
      } else {
        console.error('API did not return updated plan data');
        setError('Failed to update the plan. Please try again.');
      }
    } catch (error) {
      console.error('Error updating membership plan:', error);
      setError('Failed to update the plan. Please try again.');
    }
  };

  const handleChange = (e, field, index = null) => {
    if (field === 'features' && index !== null) {
      const updatedFeatures = [...editingPlan.features];
      updatedFeatures[index] = e.target.value;
      setEditingPlan({ ...editingPlan, features: updatedFeatures });
    } else {
      setEditingPlan({ ...editingPlan, [field]: e.target.value });
    }
  };

  const handleAddService = () => {
    if (newService && !possibleBenefits.includes(newService)) {
      possibleBenefits.splice(possibleBenefits.length - 1, 0, newService);
    }
    if (newService && newService !== 'None' && !editingPlan.features.includes(newService)) {
      setEditingPlan({ ...editingPlan, features: [...editingPlan.features, newService] });
      setNewService('');
    }
  };

  if (loading) {
    return <div className="text-center text-white">Loading membership plans...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <>
      <div className="text-center md:ml-80 mb-5 p-8">
        <h1 className='inline-block hover:text-5xl hover:mb-0 text-cyan-500 hover:text-white text-3xl md:text-7xl'>Membership</h1>
      </div>
<<<<<<< HEAD
      {plans.length === 0 ? (
        <div className="text-center text-white">No membership plans available.</div>
      ) : (
        <div className="flex justify-center ml-40 space-x-12 p-8">
          {plans.map((plan) => (
            <div key={plan._id} className="max-w-sm px-8 shadow shadow-lg shadow-cyan-500 outline outline-cyan-500 rounded-3xl overflow-hidden shadow-lg bg-gray-800 text-white p-6 relative flex flex-col justify-between">
              {editingPlan && editingPlan._id === plan._id ? (
                <div className="flex flex-col h-full">
                  <input
                    type="text"
                    value={editingPlan.name}
                    onChange={(e) => handleChange(e, 'name')}
                    className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
                  />
                  <input
                    type="number"
                    value={editingPlan.price}
                    onChange={(e) => handleChange(e, 'price')}
                    className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
                  />
                  {editingPlan.features.map((feature, index) => (
                    <div key={index} className="mb-4">
                      <select
                        value={feature}
                        onChange={(e) => handleChange(e, 'features', index)}
                        className="bg-gray-700 text-white p-2 rounded w-full"
                      >
                        {possibleBenefits.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                  <div className="mb-4">
                    <input
                      type="text"
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      placeholder="Add new service"
                      className="bg-gray-700 text-white p-2 rounded w-full"
                    />
                  </div>
                  <div className="mt-auto flex flex-col space-y-2">
                    <button
                      onClick={handleAddService}
                      className="bg-cyan-500 font-bold hover:text-black text-white p-2 py-3 px-5 rounded-full"
                    >
                      Add Service
                    </button>
                    <button
                      onClick={() => handleSave(editingPlan)}
                      className="bg-cyan-500 font-bold hover:text-black text-white p-2 py-3 px-5 rounded-full"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h2 className="text-2xl p-5 text-white font-bold">{plan.name}</h2>
                    <p className="text-2xl pl-8 text-cyan-500 mb-4">${plan.price}</p>
                    <ul className="text-gray-300 text-lg mb-20 list-disc list-inside">
                      {plan.features.filter(f => f !== 'None').map((feature, index) => (
                        <li className='p-3' key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  {isAdmin && (
                    <button
                      onClick={() => handleEdit(plan)}
                      className="bg-cyan-500 hover:text-black font-bold text-white p-2 rounded-full py-3 px-5 mt-auto"
                    >
                      Edit
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
=======
      <div className="flex flex-wrap justify-evenly md:ml-80">
        {plans.map((plan) => (
          <div key={plan.id} className="w-full md:w-92 max-w-sm px-8 shadow shadow-lg shadow-cyan-500 outline outline-cyan-500 rounded-3xl overflow-hidden bg-gray-800 text-white p-6 relative flex flex-col align-center justify-between mb-8 membership-card"
          >
        {editingPlan && editingPlan.id === plan.id ? (
          <div className="flex flex-col h-full">
            <input
              type="text"
              value={editingPlan.name}
              onChange={(e) => handleChange(e, 'name')}
              className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
            />
            <input
              type="number"
              value={editingPlan.price}
              onChange={(e) => handleChange(e, 'price')}
              className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
            />
            {editingPlan.benefits.map((benefit, index) => (
              <div key={index} className="mb-4">
                <select
                  value={benefit}
                  onChange={(e) => handleChange(e, 'benefits', index)}
                  className="bg-gray-700 text-white p-2 rounded w-full"
                >
                  {possibleBenefits.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="mb-4">
              <input
                type="text"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                placeholder="Add new service"
                className="bg-gray-700 text-white p-2 rounded w-full"
              />
            </div>
            <div className="mt-auto flex flex-col space-y-2">
              <button
                onClick={handleAddService}
                className="bg-cyan-500 font-bold hover:text-black text-white p-2 py-3 px-5 rounded-full"
              >
                Add Service
              </button>
              <button
                onClick={() => handleSave(editingPlan)}
                className="bg-cyan-500 font-bold hover:text-black text-white p-2 py-3 px-5 rounded-full"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <h2 className="text-2xl p-5 text-white font-bold">{plan.name}</h2>
              <p className="text-2xl pl-8 text-cyan-500 mb-4">${plan.price}</p>
              <ul className="text-gray-300 text-lg mb-20 list-disc list-inside">
                {plan.benefits.filter(b => b !== 'None').map((benefit, index) => (
                  <li className='p-3' key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            {isAdmin && (
              <button
                onClick={() => handleEdit(plan)}
                className="bg-cyan-500 hover:text-black font-bold text-white p-2 rounded-full py-3 px-5 mt-auto"
              >
                Edit
              </button>
            )}
          </div>
        )}
      </div>
        ))}
    </div >
>>>>>>> 1a13dabd2228eda8478e464ad0bcdbff345b4d92
    </>
  );
};

export default Membership;