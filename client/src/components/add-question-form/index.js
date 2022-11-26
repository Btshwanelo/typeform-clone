import React from 'react';
import { useFormik } from 'formik';

import './style.css';
import { useNavigate } from 'react-router-dom';

const QuestionForm = ({ addQuestion }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      questionText: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      correctAnswer: '',
    },

    validate: values => {
      const errors = {};

      if (!values.questionText) {
        errors.questionText = 'Required';
      }

      if (!values.answer1) {
        errors.answer1 = 'Required';
      }

      if (!values.answer2) {
        errors.answer2 = 'Required';
      }

      if (!values.answer3) {
        errors.answer3 = 'Required';
      }

      if (!values.answer4) {
        errors.answer4 = 'Required';
      }

      if (!values.correctAnswer) {
        errors.correctAnswer = 'Required';
      }

      return errors;
    },

    onSubmit: values => {
      // addQuestion(values);
      setTimeout(() => {
        console.log('redirect', values);
        navigate('/');
      }, 1000);
    },
  });
  return (
    <div className='form-container'>
      <form onSubmit={formik.handleSubmit}>
        <div >
          <h2>Add a question.</h2>
          {formik.errors.questionText && formik.touched.questionText && (
            <div id='feedback'>{formik.errors.questionText}</div>
          )}
          <div className='input-container'>
            <input
              className='input-field'
              type='text'
              placeholder='Enter a question'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.questionText}
              name='questionText'
            />
          </div>
        </div>
        <div>
          <h2>Answers options</h2>
          {formik.errors.answer1 && formik.touched.answer1 && (
            <div id='feedback'>{formik.errors.answer1}</div>
          )}
          <div className='input-container'>
            <i className='icon'>A</i>
            <input
              className='input-field'
              type='text'
              placeholder='Choice 1'
              name='answer1'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.answer1}
            />
          </div>

          {formik.errors.answer2 && formik.touched.answer2 && (
            <div id='feedback'>{formik.errors.answer2}</div>
          )}
          <div className='input-container'>
            <i className='icon'>B</i>
            <input
              className='input-field'
              type='text'
              placeholder='Choice 2'
              name='answer2'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.answer2}
            />
          </div>

          {formik.errors.answer3 && formik.touched.answer3 && (
            <div id='feedback'>{formik.errors.answer3}</div>
          )}
          <div className='input-container'>
            <i className='icon'>C</i>
            <input
              className='input-field'
              type='text'
              placeholder='Choice 3'
              name='answer3'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.answer3}
            />
          </div>

          {formik.errors.answer4 && formik.touched.answer4 && (
            <div id='feedback'>{formik.errors.answer4}</div>
          )}
          <div className='input-container'>
            <i className='icon'>D</i>
            <input
              className='input-field'
              type='text'
              placeholder='Choice 4'
              name='answer4'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.valuesanswer4}
            />
          </div>
        </div>
        <h2>Correct answer</h2>
        <div className='answr-containter'>
          {formik.errors.correctAnswer && formik.touched.correctAnswer && (
            <div id='feedback'>{formik.errors.correctAnswer}</div>
          )}
          <label className=''>
            A
            <input
              type='radio'
              name='correctAnswer'
              value='answer1'
              onChange={formik.handleChange}
            />
            <span className='checkmark'></span>
          </label>
          <label className=''>
            B
            <input
              type='radio'
              name='correctAnswer'
              value='answer2'
              onChange={formik.handleChange}
            />
            <span className='checkmark'></span>
          </label>
          <label className=''>
            C
            <input
              type='radio'
              name='correctAnswer'
              value='answer3'
              onChange={formik.handleChange}
            />
            <span className='checkmark'></span>
          </label>
          <label className=''>
            D
            <input
              type='radio'
              name='correctAnswer'
              value='answer4'
              onChange={formik.handleChange}
            />
            <span className='checkmark'></span>
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default QuestionForm;
