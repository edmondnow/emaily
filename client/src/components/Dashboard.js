import React from 'react';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn" />
    </div>
  );
};

export default Dashboard;
