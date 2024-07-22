import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './style.css'; // Make sure to import the styles for the circular chart
import GrowthTrainers from './GrowthTrainers';

import Calender from './Calender';

const data = [
  { month: 'Jan', previous: 3, present: 5 },
  { month: 'Feb', previous: 4, present: 6 },
  { month: 'Mar', previous: 3, present: 5 },
  { month: 'Apr', previous: 4, present: 6 },
  { month: 'May', previous: 4, present: 7 },
  { month: 'Jun', previous: 3, present: 5 },
  { month: 'Jul', previous: 4, present: 6 },
  { month: 'Aug', previous: 3, present: 5 },
  { month: 'Sep', previous: 4, present: 6 },
  { month: 'Oct', previous: 4, present: 7 },
  { month: 'Nov', previous: 3, present: 5 },
  { month: 'Dec', previous: 4, present: 6 },
];

const Dashboard = () => {
  return (
    <>
    <div className="text-center p-8 mb-5 ml-40 hover:text-5xl hover:mb-0 text-cyan-500 hover:text-white text-7xl">
        <h1>Dashboard</h1>
      </div>
    <div className="p-8 min-h-screen">

      <div className="flex justify-between">
        <div className="ml-80 pt-20 w-2/6 mr-8 bg-white shadow shadow-xl shadow-cyan-500 p-6 rounded-lg">
          <h2 className="text-xl text-black font-semibold mb-4">Quick Stats</h2>
          <div className="flex justify-between mb-6">
            <div className="text-center">
              <div className="relative inline-block w-24 h-24">
                <svg viewBox="0 0 36 36" className="circular-chart blue">
                  <path
                    className="circle-bg "
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle "
                    strokeDasharray="70, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl text-black font-semibold">70%</span>
                </div>
              </div>
              <p className="mt-2 text-black">Monthly Income</p>
            </div>
            <div className="text-center">
              <div className="relative inline-block w-24 h-24">
                <svg viewBox="0 0 36 36" className="circular-chart green">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray="85, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl text-black font-semibold">85%</span>
                </div>
              </div>
              <p className="mt-2 text-black">Yearly Income</p>
            </div>
          </div>
          <div>
            <div className="flex  text-black justify-between mb-2">
              <span>Pending Amount</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <div className="flex text-black justify-between mb-2">
              <span>Pending Users</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
        <div className="w-4/6 mr-10 bg-white text-black pt-10 pb-20 pl-5 rounded-lg shadow shadow-xl shadow-cyan-500">
          <h2 className="text-xl text-black font-semibold mb-4">Growth Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="present" stroke="#8884d8" fillOpacity={1} fill="url(#colorPresent)" />
              <Area type="monotone" dataKey="previous" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPrevious)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <GrowthTrainers/>
    </div>
    <Calender/>
    </>
  );
};

export default Dashboard;
