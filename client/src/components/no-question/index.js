import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

const NoQuestion = ({ addQuestionText }) => {
  const navigate = useNavigate();

  return (
    <div className='no-question-container'>
      <h2>
        {addQuestionText || 'Sorry, no questions found, please add questions.'}
      </h2>
      <button onClick={() => navigate('/add-question')}>Add Question</button>
    </div>
  );
};

export default NoQuestion;
