export const validateForm = values => {
  const errors = {};

  if (!values.questionText) {
    errors.questionText = '*Required';
  }

  if (!values.answer1) {
    errors.answer1 = '*Required';
  }

  if (!values.answer2) {
    errors.answer2 = '*Required';
  }

  if (!values.answer3) {
    errors.answer3 = '*Required';
  }

  if (!values.answer4) {
    errors.answer4 = '*Required';
  }

  if (!values.correctAnswer) {
    errors.correctAnswer = '*Required';
  }

  return errors;
};

export const submitForm = (values, navigate, addQuestion) => {
  const formData = {
    questionText: values.questionText,
    options: [
      { answer1: values.answer1 },
      { answer2: values.answer2 },
      { answer3: values.answer3 },
      { answer3: values.answer4 },
    ],
    correctAnswer: values.correctAnswer,
  };
  addQuestion(formData);
  navigate('/');
};
