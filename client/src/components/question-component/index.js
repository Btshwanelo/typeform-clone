import React, { useEffect, useRef, useState } from 'react';
import { countDownTimer } from '../../utils';

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
  });

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
              key={option._id}
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
          <h2>{minutes + ':' + seconds}</h2>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
