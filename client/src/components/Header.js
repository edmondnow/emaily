import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <ul
            className="left navbar"
            key="left"
            style={{ margin: '0px 100px', color: 'black' }}
          >
            <li>
              <a href="/surveys">Dashboard</a>
            </li>
            <li>
              <a href="/surveys/new">New Survey</a>
            </li>
          </ul>,
          <ul className="right" key="right">
            <li key={1}>
              <Payments />
            </li>
            <li key={3} style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>
            <li key={2}>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        ];
    }
  }
  render() {
    return (
      <nav>
        <header className="nav-wrapper lime" style={{ color: 'black' }}>
          <div>
            <Link
              className="left brand-logo"
              to={this.props.auth ? '/surveys' : '/'}
              style={{
                margin: '0px 10px',
                color: '#FF8000',
                fontFamily: 'Do Hyeo',
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: 'black'
              }}
            >
              Emaily
            </Link>
          </div>
          <div>{this.renderContent()}</div>
        </header>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
