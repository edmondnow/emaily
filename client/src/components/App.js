import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getWindowHeight() {
    return {
      minHeight: this.state.height,
      padding: '10px 20px',
      backgroundColor: '#FFCF75'
    };
  }
  render() {
    return (
      <div className="container" style={this.getWindowHeight()}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/surveys" exact component={Dashboard} />
            <Route
              path="/"
              exact
              render={props => (
                <Landing {...props} height={this.state.height} />
              )}
            />
            <Route path="/surveys/new" exact component={SurveyNew} />
            <Footer width={this.state.width} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
