//survey form shows a form  for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    );
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        <SurveyField />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
