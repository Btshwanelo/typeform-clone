import React from 'react';

const Error = ({ errorText }) => {
  return <div>{errorText || 'Something went wrong'}</div>;
};

export default Error;
