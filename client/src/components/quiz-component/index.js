import React, { useState } from 'react';
import BadgeComponent from '../badge-component';
import EndQuiz from '../end-quiz';
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
      correctAnswer: 'Apple',
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
      return;
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
      {showBadge && <BadgeComponent handleNextQuestion={handleNextQuestion} />}
      {completed && <EndQuiz />}
      {!showBadge && !completed && (
        <div className='quiz-container slide-in-bottom'>
          <div className='quiz-wrapper'>
            <h2>{questions[currentQuestion].questionText}</h2>
            <div className='question-wrapper'>
              <p>
                <span>1 -&gt; </span> {questions[currentQuestion].answer1}
              </p>
              <p>
                <span>2 -&gt; </span>
                {questions[currentQuestion].answer2}
              </p>
              <p>
                <span>3 -&gt; </span>
                {questions[currentQuestion].answer3}
              </p>
              <p>
                <span>4 -&gt; </span>
                {questions[currentQuestion].answer4}
              </p>
            </div>
            <div className='radio-wrapper'>
              <div className='input-container'>
                <label>1</label>
                <input
                  type='radio'
                  className='checkmark'
                  name='answer1'
                  value={questions[currentQuestion].answer1}
                  checked={isRdioSelected(questions[currentQuestion].answer1)}
                  onChange={handleRadioClick}
                />
              </div>
              <div className='input-container'>
                <label>2</label>
                <input
                  type='radio'
                  name='answer2'
                  className='checkmark'
                  value={questions[currentQuestion].answer2}
                  checked={isRdioSelected(questions[currentQuestion].answer2)}
                  onChange={handleRadioClick}
                />
              </div>
              <div className='input-container'>
                <label>3</label>
                <input
                  type='radio'
                  name='answer3'
                  className='checkmark'
                  value={questions[currentQuestion].answer3}
                  checked={isRdioSelected(questions[currentQuestion].answer3)}
                  onChange={handleRadioClick}
                />
              </div>
              <div className='input-container'>
                <label>4</label>
                <input
                  type='radio'
                  name='answer4'
                  className='checkmark'
                  value={questions[currentQuestion].answer4}
                  checked={isRdioSelected(questions[currentQuestion].answer4)}
                  onChange={handleRadioClick}
                />
              </div>
            </div>
            {answer && (
              <button onClick={() => handleAnswerOptionClick(answer)}>
                Ok
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default QuizComponent;
