import { withFormik } from 'formik';

const WithFormikComponent = (Component) => {


  withFormik({
    mapPropsToValues: () => ({
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctIndex: '',
    }),

    // Custom sync validation
    validate: values => {
      const errors = {};

      if (!values.question) {
        errors.question = 'Required';
      }

      if (!values.optionA) {
        errors.optionA = 'Required';
      }

      if (!values.optionB) {
        errors.optionB = 'Required';
      }

      if (!values.optionC) {
        errors.optionC = 'Required';
      }

      if (!values.optionD) {
        errors.optionD = 'Required';
      }

      if (!values.correctIndex) {
        errors.correctIndex = 'Required';
      }

      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
      //addQuestion(values);
    },

    displayName: 'BasicForm',
  })(Component);
};

export default WithFormikComponent;

