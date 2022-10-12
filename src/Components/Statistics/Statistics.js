import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const chart = useLoaderData();
    const chartData = chart.data;
    return (
        <div >
            <div className='mt-10 '>
                <LineChart width={500}
                    height={300}
                    data={chart.data}>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />

                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />


                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;