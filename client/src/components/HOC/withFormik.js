import { withFormik } from 'formik';

const withFormikComponent = Component =>
  withFormik({
    mapPropsToValues: () => ({ name: '' }),

    // Custom sync validation
    validate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },

    displayName: 'BasicForm',
  })(Component);

export default withFormikComponent;
