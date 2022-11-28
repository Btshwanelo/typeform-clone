import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Home = (props) => {
  const { descriptionText, welcomeText } = props;
  return (
    <div className='home-container'>
      <h2>
        {welcomeText || 'If you get a high score, you probably spend way too much time on Wikipedia.'}
      </h2>
      <h3>
        {descriptionText || 'There are 12 questions and a break for refreshments in the middle.'}
      </h3>
      <div className='btn-group'>
        <Link to='/take-quiz'>Take a quiz</Link>
        <Link to='/add-question'>Add aquestion</Link>
      </div>
    </div>
  );
};

export default Home;
