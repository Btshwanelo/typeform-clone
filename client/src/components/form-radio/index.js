import React from 'react';

import './style.css';

const FomrRadio = props => {
  const { type, name, value, onChange, descp } = props;
  return (
    <>
      <label className='answer-radio'>
        {descp}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <span className='checkmark'></span>
      </label>
    </>
  );
};

export default FomrRadio;
