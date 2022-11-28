import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { validateForm, submitForm } from '../../utils/form-utils';
import FormInput from '../../components/form-input';
import FomrRadio from '../../components/form-radio';
import { useAddQuestionMutation } from '../../redux/services/quizCore';

const AddQuestion = () => {
  const navigate = useNavigate();
  const [addQuestion] = useAddQuestionMutation();

  const formik = useFormik({
    initialValues: {
      questionText: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      correctAnswer: '',
    },
<<<<<<< HEAD
    validate: (values) => validateForm(values),
    onSubmit: (values) => submitForm(values, navigate, addQuestion, setSubmitted),
  });

  if (submitted) {
    return (
      <div>
        <h2>Submitted...</h2>
      </div>
    );
  }

=======
    validate: values => validateForm(values),
    onSubmit: values => submitForm(values, navigate, addQuestion),
  });
>>>>>>> parent of 9989181 (added loader and error component)
  return (
    <div className='form-container'>
      <form onSubmit={formik.handleSubmit}>
        <h2>
          <span>&#8594; </span>Add a question
        </h2>
        <FormInput
          value={formik.values.questionText}
          type='text'
          placeholder='Type your question here...'
          name='questionText'
          error={formik.errors.questionText}
          touched={formik.touched.questionText}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <h2>
          <span>&#8594; </span>Answers options
        </h2>
        <FormInput
          value={formik.values.answer1}
          type='text'
          placeholder='type option 1'
          name='answer1'
          error={formik.errors.answer1}
          touched={formik.touched.answer1}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <FormInput
          value={formik.values.answer2}
          type='text'
          placeholder='type option 2'
          name='answer2'
          error={formik.errors.answer2}
          touched={formik.touched.answer2}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <FormInput
          value={formik.values.answer3}
          type='text'
          placeholder='type option 3'
          name='answer3'
          error={formik.errors.answer3}
          touched={formik.touched.answer3}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <FormInput
          value={formik.values.answer4}
          type='text'
          placeholder='type option 4'
          name='answer4'
          error={formik.errors.answer4}
          touched={formik.touched.answer4}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <h2>
          <span>&#8594; </span>Correct answer
        </h2>
        {formik.errors.correctAnswer && formik.touched.correctAnswer && (
          <div className='error'>{formik.errors.correctAnswer}</div>
        )}
        <div className='answr-containter'>
          <FomrRadio
            type='radio'
            name='correctAnswer'
            value='answer1'
            onChange={formik.handleChange}
            descp='1'
          />
          <FomrRadio
            type='radio'
            name='correctAnswer'
            value='answer2'
            onChange={formik.handleChange}
            descp='2'
          />
          <FomrRadio
            type='radio'
            name='correctAnswer'
            value='answer3'
            onChange={formik.handleChange}
            descp='3'
          />
          <FomrRadio
            type='radio'
            name='correctAnswer'
            value='answer4'
            onChange={formik.handleChange}
            descp='4'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
