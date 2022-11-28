import React, { useState } from 'react';

import './style.css';
import EndQuiz from '../../components/quiz-end-component';
import BadgeComponent from '../../components/badge-component';
import QuizComponent from '../../components/question-component';

const TakeQuiz = () => {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      options: [
        { answer: 'New York' },
        { answer: 'London' },
        { answer: 'Paris' },
        { answer: 'Dublin' },
      ],
      correctAnswer: 'Paris',
      id: 1,
    },
    {
      questionText: 'Who is CEO of Tesla?',
      options: [
        { answer: 'Jeff Bezos' },
        { answer: 'Elon Musk' },
        { answer: 'Bill Gates' },
        { answer: 'Tony Stark' },
      ],
      correctAnswer: 'Elon Musk',
      id: 2,
    },
    {
      questionText: 'The iPhone was created by which company?',
      options: [
        { answer: 'Apple' },
        { answer: 'Intel' },
        { answer: 'Amazon' },
        { answer: 'Microsoft' },
      ],
      correctAnswer: 'Apple',
      id: 3,
    },
    {
      questionText: 'How many Harry Potter books are there?',
      options: [
        { answer: '1' },
        { answer: '4' },
        { answer: '6' },
        { answer: '7' },
      ],
      correctAnswer: '4',
      id: 4,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');

<<<<<<< HEAD
  const { data: questions, isFetching, error } = useGetQuestionsQuery();

  const handleRadioClick = (value) => {
=======
  const handleRadioClick = value => {
>>>>>>> parent of 9989181 (added loader and error component)
    setAnswer(value);
    setSelectedRadio(value);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      setCompleted(true);
    }
    setAnswer('');
    setCurrentQuestion(currentQuestion + 1);
    setShowBadge(false);
  };

  const handleAnswerOptionClick = () => {
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
