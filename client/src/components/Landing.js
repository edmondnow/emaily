import React from 'react';
import SurveyBody from './surveys/SurveyBody';

const Landing = props => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: props.height - 150
      }}
    >
      <div
        style={{
          color: 'white',
          WebkitTextStrokeWidth: '1px',
          WebkitTextStrokeColor: 'black',
          margin: 0
        }}
        className="card-panel teal"
      >
        <h1>Emaily</h1>
        <h3>Collect feedback about your user's via email!</h3>
      </div>
      <SurveyBody
        survey={{
          title: 'Emaily is the best survey provider!',
          id: '2313',
          body: 'Do you like Emaily?',
          dateSent: '2/2/2020',
          yes: 100,
          no: 0
        }}
      />
    </div>
  );
};

export default Landing;
