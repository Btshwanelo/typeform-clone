import React, { useState } from 'react';

import './style.css';
import EndQuiz from '../../components/quiz-end-component';
import BadgeComponent from '../../components/badge-component';
import QuizComponent from '../../components/question-component';
import { useGetQuestionsQuery } from '../../redux/services/quizCore';
import AppStatus from '../../components/app-status';
import { useNavigate } from 'react-router-dom';

const TakeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');
  const { data: questions, isFetching, error } = useGetQuestionsQuery();

  const navigate = useNavigate();

  // handle radio button selection
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

  // if there are no questions
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
    <>
      {showBadge && <BadgeComponent handleNextQuestion={handleNextQuestion} />}
      {completed && <EndQuiz />}
      {!showBadge && !completed && (
        <QuizComponent
          currentQuestion={currentQuestion}
          questions={questions}
          selectedRadio={selectedRadio}
          answer={answer}
          handleAnswerOptionClick={handleAnswerOptionClick}
          handleRadioClick={handleRadioClick}
          handleNextQuestion={handleAnswerOptionClick}
        />
      )}
    </>
  );
};

export default TakeQuiz;
