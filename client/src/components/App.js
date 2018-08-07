import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container" style={style}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const style = { background: 'linear-gradient(to top, #06beb6, #48b1bf)' };

export default connect(
  null,
  actions
)(App);
