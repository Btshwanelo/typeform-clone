import React, { useEffect, useRef, useState } from 'react';

import './style.css';

const QuizComponent = props => {
  const {
    currentQuestion,
    questions,
    selectedRadio,
    answer,
    handleAnswerOptionClick,
    handleRadioClick,
    handleNextQuestion,
  } = props;

  const startingMinutes = 2;
  const startingSeconds = 0;

  const [seconds, setSeconds] = useState(startingSeconds);
  const [minutes, setMinutes] = useState(startingMinutes);
  const timer = useRef();
  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    timer.current = setInterval(() => {
      setSeconds(seconds - 1);
      if (minutes === 0 && seconds === 0) {
        setSeconds(startingSeconds);
        setMinutes(startingMinutes);
        handleNextQuestion();
      }
  
=======
    timer.current = setInterval(() => {
      setSeconds(seconds - 1);
      if (minutes === 0 && seconds === 0) {
        setSeconds(startingMinutes);
        setMinutes(startingMinutes);
        handleNextQuestion();
      }

>>>>>>> parent of 9989181 (added loader and error component)
      if (minutes > 0 && seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
<<<<<<< HEAD
  
=======

>>>>>>> parent of 9989181 (added loader and error component)
      if (minutes === 0 && seconds === 1) {
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer.current);
<<<<<<< HEAD
  }, []);
=======
    countDownTimer(
      startingSeconds,
      startingMinutes,
      timer,
      seconds,
      minutes,
      setSeconds,
      setMinutes,
      handleNextQuestion,
    );
=======
>>>>>>> parent of 9989181 (added loader and error component)
  });
>>>>>>> parent of ab5ef1b (updated readme file)

  return (
    <div className='quiz-container slide-in-bottom'>
      <div className='quiz-wrapper'>
        <h2>
          <span>{currentQuestion + 1}&#8594; </span>
          {questions[currentQuestion].questionText}
        </h2>
        <div className='question-wrapper'>
          {questions[currentQuestion].options.map((option, i) => (
            <div
              key={i}
              className={`btn-answer ${
                selectedRadio === option.answer && 'btn-answer-active'
              }`}
              onClick={() => handleRadioClick(option.answer)}
            >
              <div
                className={`btn-tag ${
                  selectedRadio === option.answer && 'btn-tag-active'
                }`}
              >
                {i + 1}
              </div>
              <p>{option.answer}</p>
            </div>
          ))}
        </div>
        <div className='btn-wrapper'>
          {answer && (
            <button
              onClick={() => {
                setMinutes(startingMinutes);
                setSeconds(startingSeconds);
                handleAnswerOptionClick(answer);
              }}
            >
              OK
            </button>
          )}
          <h2>{`${minutes} : ${seconds}`}</h2>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
