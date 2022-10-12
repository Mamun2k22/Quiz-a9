import React from 'react';
import Card from '../../../Card/Card';

const Singlequiz = ({ qz }) => {
    const { id, name, logo, questions, total } = qz;
    return (

        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 bg-yellow-300" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">{total}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 bg-red-600">Quiz</button>
            </div>
        </div>

    );
};

export default Singlequiz;