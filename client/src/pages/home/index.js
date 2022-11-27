import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Home = ({ minutes, seconds }) => {
  return (
    <div className='home-container'>
      <h2>
        If you get a high score, you probably spend way too much time on
        Wikipedia.
      </h2>
      <span>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </span>
      <h3>
        There are 12 questions and a break for refreshments in the middle.
      </h3>
      <div className='btn-group'>
        <Link to='/take-quiz'>Take a quiz</Link>
        <Link to='/add-question'>Add aquestion</Link>
      </div>
    </div>
  );
};

export default Home;
