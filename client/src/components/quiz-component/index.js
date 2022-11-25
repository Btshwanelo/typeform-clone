import React, { useState } from 'react';
import './style.css';

const QuizComponent = () => {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answer1: 'New York',
      answer2: 'London',
      answer3: 'Paris',
      answer4: 'Dublin',
      correctAnswer: 'Paris',
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answer1: 'Jeff Bezos',
      answer2: 'Elon Musk',
      answer3: 'Bill Gates',
      answer4: 'Tony Stark',
      correctAnswer: 'Elon Musk',
    },
    {
      questionText: 'The iPhone was created by which company?',
      answer1: 'Apple',
      answer2: 'Intel',
      answer3: 'Amazon',
      answer4: 'Microsoft',
      correctAnswer: 'Intel',
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answer1: '1',
      answer2: '4',
      answer3: '6',
      answer4: '7',
      correctAnswer: '4',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');

  const isRdioSelected = value => selectedRadio === value;

  const handleRadioClick = e => {
    setAnswer(e.currentTarget.value);
    setSelectedRadio(e.currentTarget.value);
  };

  const handleNextQuestion = () => {
    setAnswer('');
    setCurrentQuestion(currentQuestion + 1);
    setShowBadge(false);
  };

  const handleAnswerOptionClick = answer => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setShowBadge(true);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setAnswer('');
      setCurrentQuestion(nextQuestion);
      setShowBadge(false);
    } else {
      setAnswer('');
      setShowBadge(false);
      setCompleted(true);
    }
  };

  return (
    <>
      {showBadge && (
        <div>
          <h1>
            <strong>Congretulations, you have unlocked a new Badge</strong>
          </h1>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
      {completed && (
        <div>
          <h1>You have finshed Congretulations</h1>
        </div>
      )}
      {!showBadge && !completed && (
        <div>
          <div>{questions[currentQuestion].questionText}</div>
          <div>
            <p>{questions[currentQuestion].answer1}</p>
            <p>{questions[currentQuestion].answer2}</p>
            <p>{questions[currentQuestion].answer3}</p>
            <p>{questions[currentQuestion].answer4}</p>
            <input
              type='radio'
              name='answer1'
              value={questions[currentQuestion].answer1}
              checked={isRdioSelected(questions[currentQuestion].answer1)}
              onChange={handleRadioClick}
            />
            <input
              type='radio'
              name='answer2'
              value={questions[currentQuestion].answer2}
              checked={isRdioSelected(questions[currentQuestion].answer2)}
              onChange={handleRadioClick}
            />
            <input
              type='radio'
              name='answer3'
              value={questions[currentQuestion].answer3}
              checked={isRdioSelected(questions[currentQuestion].answer3)}
              onChange={handleRadioClick}
            />
            <input
              type='radio'
              name='answer4'
              value={questions[currentQuestion].answer4}
              checked={isRdioSelected(questions[currentQuestion].answer4)}
              onChange={handleRadioClick}
            />
          </div>
          <button onClick={() => handleAnswerOptionClick(answer)}>Ok</button>
        </div>
      )}
    </>
  );
};

export default QuizComponent;
