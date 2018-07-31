import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onBack, formValues, submitSurvey, history }) => {
  const reviewFields = formValues => {
    return (
      <div>
        {formFields.map(({ label, name }) => (
          <div key={name}>
            <h6>{label}</h6>
            <p>{formValues[name]}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields(formValues)}</div>
      <button className="yellow white-text darken-3 btn-flat" onClick={onBack}>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
