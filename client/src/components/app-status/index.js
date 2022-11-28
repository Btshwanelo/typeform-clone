import React from 'react';

import './style.css';

const AppStatus = ({ statusMessage, children }) => {
  return (
    <div className='status-container'>
      <h2>{statusMessage}</h2>
      {children || ''}
    </div>
  );
};

export default AppStatus;
