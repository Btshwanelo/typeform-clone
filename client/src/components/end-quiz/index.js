import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const EndQuiz = () => {
  return (
    <div className='container'>
      <h2>You have finished the quiz, Thank you</h2> <Link to='/'>Home</Link>
    </div>
  );
};

export default EndQuiz;
