import React from 'react';

const Error = ({ errorText }) => (
  <div>{errorText || 'Something went wrong'}</div>
);

export default Error;
