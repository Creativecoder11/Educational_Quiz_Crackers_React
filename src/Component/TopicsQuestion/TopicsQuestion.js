import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicsQuestion = () => {
    const LoadData = useLoaderData();
    const questionData = LoadData.data;
    
    const {logo, name, questions, total} = questionData;

    const [score, setScore] = useState(0);

    const handleClick = (option, correctAnswer) => {
        if (option === correctAnswer) {
          toast.success("Correct Answer!");
          let newScore = score+1;
          setScore(newScore);
        } else {
          toast.warn("Wrong Answer!");
        }
      };
      
    return (
        <section>
        <div className="d-flex align-items-center justify-content-center">
            <div>
                <img
                    src={logo}
                    alt=""
                    className="bg-dark rounded-2 m-3"
                    height="150"
                />
            </div>
            <div>
                <h1>
                    Quiz topic: <span className="highlight">{name}</span>
                </h1>
                <h4>
                    Given Question: <span className="highlight">{total}</span>
                </h4>
            </div>
        </div>
            <div className="correct-answer d-flex justify-content-center pe-5 me-3">
                <h4 className='border md:w-25 bg-dark text-center text-white p-3 rounded-5'>Your Current Score: {score}</h4>
            </div>


      <div className="m-5">
        {
        questions.map((questionData) => (
          <Question
            key={questionData.id}
            questionData={questionData}
            handleClick={handleClick}
          ></Question>
        ))
        }
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
    );
};

export default TopicsQuestion;