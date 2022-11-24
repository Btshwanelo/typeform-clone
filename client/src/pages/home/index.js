import React from 'react';
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
        <button>Let's get Started</button>
        <button>Add new question to quiz</button>
      </div>
    </div>
  );
};

export default Home;
