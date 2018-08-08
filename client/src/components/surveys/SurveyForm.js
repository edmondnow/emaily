//survey form shows a form  for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {formFields.map(({ label, name }) => (
          <Field
            key={name}
            type="text"
            component={SurveyField}
            name={name}
            label={label}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        style={formStyle}
      >
        {this.renderFields()}
        <div style={{ paddingTop: '40px' }}>
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');
  formFields.forEach(({ name, label }) => {
    if (!values[name]) {
      errors[name] = `You must provide a '${label}'.`;
    }
  });
  return errors;
}

const formStyle = {
  backgroundColor: '#455268',
  textAlign: 'left',
  padding: 20
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
