import React from 'react';

const FormInput = (props) => {
  const {
    value,
    name,
    error,
    touched,
    handleBlur,
    handleChange,
    type,
    placeholder,
  } = props;

  return (
    <>
      {error && touched && <div className='error'>{error}</div>}
      <div className='form-input-container'>
        <input
          className='input-field'
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      </div>
    </>
  );
};

export default FormInput;
