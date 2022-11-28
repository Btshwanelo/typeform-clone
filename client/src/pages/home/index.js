import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Home = ({ welcomeText, descriptionText, firstBtn, secondBtn }) => {
  return (
    <div className='home-container'>
      <h2>{welcomeText || 'Take a Trivia Quiz and see how good you are.'}</h2>
      <h3>
        {descriptionText || 'If you get a question correct, you unlock a badge.'}
      </h3>
      <div className='btn-group'>
        <Link to='/take-quiz'>{firstBtn || 'Take a quiz'}</Link>
        <Link to='/add-question'>{secondBtn || 'Add a question'}</Link>
      </div>
    </div>
  );
};

export default Home;
