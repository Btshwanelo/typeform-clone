import React from 'react';
import './style.css';

const QuizComponent = () => {
  return (
    <div>
      <h2>
        <span>1 :</span> Which famous con-artist's life is the film Catch Me If
        You Can based on?
      </h2>
      <div>
        <div>
          <div>
            <div>A</div>
            <p>
              <strong>Gregor MacGregor</strong>
            </p>
          </div>
          <span>check</span>
        </div>
      </div>
      <div>
        <button>Submit</button>
        <span>time</span>
      </div>
    </div>
  );
};

export default QuizComponent;
