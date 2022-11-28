import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import QuizComponent from '../../components/question-component';
import { useGetQuestionsQuery } from '../../redux/services/quizCore';
import AppStatus from '../../components/app-status';

const TakeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');
  const { data: questions, isFetching, error } = useGetQuestionsQuery();

  const navigate = useNavigate();

  // handle radio button selection"
  const handleRadioClick = value => {
    setAnswer(value);
    setSelectedRadio(value);
  };

  // handle next question
  const handleNextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      setCompleted(true);
    }
    setAnswer('');
    setCurrentQuestion(currentQuestion + 1);
    setShowBadge(false);
  };

  // handle answer
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

  // if loading questions
  if (isFetching) return <AppStatus statusMessage={'Loading...'} />;

  // if error
  if (error)
    return (
      <AppStatus statusMessage={'Something went wrong, please try again.'} />
    );

  // if there are no questions to show
  if (questions.length === 0)
    return (
      <AppStatus
        statusMessage={
          'No questions to show, please, please add some questions.'
        }
      >
        <button
          className='btn'
          onClick={() => navigate('/add-question')}
        >
          Add a question
        </button>
      </AppStatus>
    );

  return (
    <div className='quiz-container'>
      {showBadge && (
        <AppStatus statusMessage={'Congratulations you have unlocked a badge'}>
          <img
            src='/golden-badge.png'
            alt='badge'
            width='150px'
            height='150px'
          />
          <button onClick={() => handleNextQuestion()}>Next</button>
        </AppStatus>
      )}
      {completed && (
        <AppStatus statusMessage={'You have finished the quiz, Thank you'}>
          <button onClick={() => navigate('/')}>Home</button>
        </AppStatus>
      )}
      {!showBadge && !completed && (
        <QuizComponent
          currentQuestion={currentQuestion}
          questions={questions}
          selectedRadio={selectedRadio}
          answer={answer}
          handleAnswerOptionClick={handleAnswerOptionClick}
          handleRadioClick={handleRadioClick}
          handleNextQuestion={handleAnswerOptionClick}
          startingMinutes={2}
          startingSeconds={30}
        />
      )}
    </div>
  );
};

export default TakeQuiz;
