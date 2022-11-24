import React from 'react';
import withFormikComponent from '../HOC/withFormik';
import './style.css';

const QuestionForm = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name='name'
      />
      {errors.name && touched.name && <div id='feedback'>{errors.name}</div>}
      <button type='submit'>Submit</button>
    </form>
    <form action="/action_page.php">
    <h2>Add a question to the quiz</h2>
    <div className="input-container">
      <input className="input-field" type="text" placeholder="Enter a question" name="question" />
    </div>
    <div className="input-container">
      <i className="icon">A</i>
      <input className="input-field" type="text" placeholder="Choice 1" name="Choice1" />
    </div>
    
    <div className="input-container">
      <i className="icon">B</i>
      <input className="input-field" type="text" placeholder="Choice 2" name="Choice2" />
    </div>
  
    <div className="input-container">
      <i className="icon">C</i>
      <input className="input-field" type="text" placeholder="Choice 3" name="Choice3" />
    </div>
    
    <div className="input-container">
      <i className="icon">D</i>
      <input className="input-field" type="text" placeholder="Choice 4" name="Choice4" />
    </div>
    
    <h1>Correct Choice</h1>
  
  <div className="btn-group">
    <button>A</button>
    <button>B</button>
    <button>C</button>
    <button>D</button>
  </div>
  
    <button type="submit" className="btn">Submit</button>
  </form>
  </>
  );
};

export default withFormikComponent(QuestionForm);
