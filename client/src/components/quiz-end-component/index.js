import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const EndQuiz = ({ endText }) => {
  <div className='container'>
    <h2>{endText || 'You have finished the quiz, Thank you'}</h2>
    <Link to='/'>Home</Link>
  </div>;
};

export default EndQuiz;
