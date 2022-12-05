import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import React from 'react';
import './Question.css'

const Question = ({ questionData,handleClick }) => {
    const { question, options, correctAnswer } = questionData;
  
    const notify = () => toast.info(correctAnswer);
  
    
    return (
      <section className="question-card p-3 m-3">
        <div className="question-container">
          <div>
            <h5 className="my-3 text-center">{question}</h5>
          </div>
          <FontAwesomeIcon
            icon={faEye}
            className="my-3"
            size="xl"
            onClick={notify}
          />
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
  
          {
          options.map(option => (
            <p className="p-3 option" onClick={() => handleClick(option, correctAnswer)}>
              {option}
            </p>
          ))
          }
        </div>
      </section>
    );
};

export default Question;