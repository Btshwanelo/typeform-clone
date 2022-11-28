import React from 'react';

const FomrRadio = (props) => {
  const { type, name, value, onChange, descp } = props;
  return (
    <label className='answer-radio'>
      {descp}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className='checkmark' />
    </label>
  );
};

export default FomrRadio;
