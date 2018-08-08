import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SurveyBody extends Component {
  deleteSurvey() {
    console.log(this.props.survey._id);
    this.props.deleteSurvey(this.props.survey._id);
  }
  render() {
    const { _id, title, body, yes, no, dateSent } = this.props.survey;
    return (
      <div className="card darken-1" key={_id} style={cardStyle}>
        <div className="card-content text-white">
          <span className="card-title" style={cardTitleStyle}>
            {title}
          </span>
          <p>{body}</p>
          <p className="right">
            Sent On: {new Date(dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a>Yes: {yes}</a>
          <a>No: {no}</a>

          <FontAwesomeIcon
            icon={faTimesCircle}
            className="right"
            color="red"
            style={{ margin: 5, cursor: 'pointer' }}
            onClick={this.deleteSurvey.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const cardStyle = {
  backgroundColor: '#455268',
  color: 'white',
  textAlign: 'left',
  marginTop: '10px'
};

const cardTitleStyle = {
  color: '#FF8000'
};

export default connect(
  null,
  actions
)(SurveyBody);
