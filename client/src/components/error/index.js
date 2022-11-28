import React from 'react';

import './style.css';

const Error = ({ errorText }) => {
  return (
    <div className='error-container'>
      <h2>{errorText || 'Something went wrong'}</h2>
    </div>
  );
};

export default Error;
