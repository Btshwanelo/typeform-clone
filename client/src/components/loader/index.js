import React from 'react';

import './style.css';

const Loader = ({ loadingText }) => {
  return (
    <div className='loader-container'>
      <h2>{loadingText || 'Loade...'}</h2>
    </div>
  );
};

export default Loader;
