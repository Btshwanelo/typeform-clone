import React from 'react';

const Loader = ({ loadingText }) => {
  return <div>{loadingText || 'Loade...'}</div>;
};

export default Loader;
