import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlequiz from '../Quiz/Singlequiz/Singlequiz';
const Home = () => {
    const quiz = useLoaderData()
    const quizs = quiz.data;
    return (
        <div>
            <h2 className='text-2xl p-4 m-4'> Join to our Special Quiz 2022</h2>
            <img className='w-full h-80' src="https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=826&t=st=1665518912~exp=1665519512~hmac=7aed2e7a0d115cf247e930f91213d9045f77c500c0c47f2acc6123c1e3de347f" alt="" />

            <div className='grid grid-cols-4 mr-6 p-6'>
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

export default Home;