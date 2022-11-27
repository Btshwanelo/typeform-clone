import React from 'react';

import './style.css';

const BadgeComponent = props => {
  const { handleNextQuestion, congretsText } = props;

  return (
    <div className='container'>
      <h2>{congretsText || 'Congratulations you have unlocked a badge'}</h2>
      <img
        src='/golden-badge.png'
        alt='badge-image'
        width='150px'
        height='150px'
      />
      <button onClick={() => handleNextQuestion()}>Next</button>
    </div>
  );
};

export default BadgeComponent;
