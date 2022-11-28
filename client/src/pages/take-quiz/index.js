import React, { useState } from 'react';

import './style.css';
import EndQuiz from '../../components/quiz-end-component';
import BadgeComponent from '../../components/badge-component';
import QuizComponent from '../../components/question-component';
import { useGetQuestionsQuery } from '../../redux/services/quizCore';
import Loader from '../../components/loader';
import Error from '../../components/error';

const TakeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');

  const { data: questions, isFetching, error } = useGetQuestionsQuery();


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
  if (isFetching) return <Loader />;

  // if error
  if (error) return <Error />;

  // if there are no questions
  if (questions?.length[0]) return <Loader />;
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
