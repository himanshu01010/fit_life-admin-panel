import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="p-4 flex justify-end pt-20 pr-20 pb-20">
      <div className="bg-white rounded-lg shadow shadow-xl shadow-cyan-500 mr-10 justify-start  p-6 mb-6 w-1/4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-blue-500 text-white rounded-lg p-4 text-center">
            <h3 className="text-lg">REGISTERED USERS</h3>
            <p className="text-3xl font-bold">8527</p>
          </div>
          <div className="bg-green-500 text-white rounded-lg p-4 text-center">
            <h3 className="text-lg">THIS MONTH</h3>
            <p className="text-3xl font-bold">1200</p>
          </div>
          <div className="bg-orange-500 text-white rounded-lg p-4 text-center">
            <h3 className="text-lg">LAST MONTH</h3>
            <p className="text-3xl font-bold">900</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg mr-16 shadow shadow-xl shadow-cyan-500 flex justify-right p-6 w-1/5">
        <Calendar
          onChange={setValue}
          value={value}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Calender;
