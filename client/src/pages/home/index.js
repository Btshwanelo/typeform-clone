import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <div className='home-container'>
      <h2>
        If you get a high score, you probably spend way too much time on
        Wikipedia. There are 12 questions and a break for refreshments in the
        middle.
      </h2>
      <div>
        <Link to='/quiz'>Take a quiz</Link>
        <Link to='/add'>Add aquestion</Link>
      </div>
    </div>
  );
};

export default Home;
