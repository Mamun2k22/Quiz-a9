import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlequiz from './Singlequiz/Singlequiz';
const Quiz = () => {
    const quiz = useLoaderData();
    const quizs = quiz.data;
    // const [id, name, logo, total] = quiz;
    return (
        <div>

            <div className='grid grid-cols-4'>
                {
                    quizs.map(qz => <Singlequiz
                        key={qz.id}
                        qz={qz}
                    >
                    </Singlequiz>)
                }


            </div>
        </div>
    );
};

export default Quiz;
