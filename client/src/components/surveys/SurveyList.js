import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyBody from './SurveyBody';

class SurveyList extends Component {
  renderSurveys() {
    return this.props.surveys
      .reverse()
      .map(survey => <SurveyBody survey={survey} />);
  }
  componentDidMount() {
    this.props.fetchSurveys();
  }
  render() {
    if (this.props.surveys.length === 0) {
      return (
        <div
          style={{
            color: 'white',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'black',
            marginTop: '50px'
          }}
          className="card-panel teal"
        >
          <h2 className="center-align text-white">
            You have no surveys yet,{' '}
            <a href="/surveys/new" style={{ color: '#FF8000' }}>
              {' '}
              create some!
            </a>
          </h2>
        </div>
      );
    }

    return <div style={{ padding: '10px' }}>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}
export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
