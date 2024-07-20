import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { month: 1, enquired: 150, enrolled: 197 },
    { month: 2, enquired: 100, enrolled: 150 },
    { month: 3, enquired: 100, enrolled: 150 },
    { month: 4, enquired: 75, enrolled: 100 },
    { month: 5, enquired: 100, enrolled: 150 },
    { month: 6, enquired: 150, enrolled: 197 },
    { month: 7, enquired: 100, enrolled: 150 },
    { month: 8, enquired: 75, enrolled: 100 },
    { month: 9, enquired: 100, enrolled: 150 },
    { month: 10, enquired: 125, enrolled: 175 },
    { month: 11, enquired: 150, enrolled: 200 },
    { month: 12, enquired: 100, enrolled: 150 },
];

const trainers = [
    { id: 1, course: 'Yoga', personal: 9, general: 8, total: 17 },
    { id: 2, course: 'Aerobics', personal: 12, general: 10, total: 22 },
    { id: 3, course: 'Fitness', personal: 14, general: 12, total: 26 },
    { id: 4, course: 'Body Building', personal: 11, general: 9, total: 20 },
    { id: 5, course: 'Zumba', personal: 15, general: 12, total: 27 },
    { id: 6, course: 'Flexibility', personal: 7, general: 5, total: 12 },
];

const GrowthTrainers = () => {
    return (
        <div className='flex mt-32'>
            <div className="p-10 ml-80 bg-white rounded-xl shadow shadow-xl shadow-cyan-500">
                <h2 className="text-2xl text-black  font-bold mb-4">User Growth</h2>
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottomRight', offset: -10 }} />
                    <YAxis label={{ value: 'Users', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="enquired" stackId="a" fill="#82ca9d" name="Enquired Users" />
                    <Bar dataKey="enrolled" stackId="a" fill="#8884d8" name="Enrolled Users" />
                </BarChart>
            </div>

            <div className='bg-white rounded-xl ml-32 p-16 shadow shadow-xl shadow-cyan-500'>
                <h2 className="text-2xl text-black font-bold mt- mb-8">Trainers</h2>
                <table className="min-w bg-white rounded-xl">
                    <thead className="bg-cyan-500 rounded-xl text-white">
                        <tr>
                            <th className="w-1/6 py-1">Sl.No</th>
                            <th className="w-1/6 py-1">Course</th>
                            <th className="w-1/6 py-1">Personal Trainers</th>
                            <th className="w-1/6 py-1">General Trainers</th>
                            <th className="w-1/6 py-1">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainers.map(trainer => (
                            <tr key={trainer.id} className="text-center text-black">
                                <td className="border px-4 py-2">{trainer.id}</td>
                                <td className="border px-4 py-2">{trainer.course}</td>
                                <td className="border px-4 py-2">{trainer.personal}</td>
                                <td className="border px-4 py-2">{trainer.general}</td>
                                <td className="border px-4 py-2">{trainer.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>



        </div>

    );
}

export default GrowthTrainers;
