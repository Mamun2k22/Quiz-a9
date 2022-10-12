import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlequestions from './Singlequestions';

const QuestionsDetail = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    const { id, name, questions } = quiz
    return (
        <div className='w-8/12 mx-auto my-5'>
            <h1 className='text-3xl font-bold text-amber-400 text-center mb-7 underline'>Quiz of {name}</h1>
            <div>
                {
                    questions.map(qs => <Singlequestions
                        questions={qs}
                    >
                    </Singlequestions>)
                }
            </div>
        </div>
    );
};

export default QuestionsDetail;