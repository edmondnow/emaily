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
            <label>{label}</label>
            <p style={{ color: 'white' }}>{formValues[name]}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div
      style={{
        color: '#FF8000',
        backgroundColor: '#455268',
        textAlign: 'left',
        padding: 20
      }}
    >
      <h5>Please confirm your entries</h5>
      <div>{reviewFields(formValues)}</div>
      <div style={{ marginTop: '40px' }}>
        <button
          className="yellow white-text darken-3 btn-flat"
          onClick={onBack}
        >
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
