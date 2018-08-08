import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Payments from './Payments';

class Header extends Component {
  state = { openSidenav: false };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ openSidenav: window.innerWidth <= 760 });
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  showSettings(event) {
    event.preventDefault();
  }
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
          <li>
            <a href="/surveys">Dashboard</a>
          </li>,
          <li>
            <a href="/surveys/new">New Survey</a>
          </li>,
          <li key={1}>
            <Payments
              text={this.state.openSidenav ? 'Credits' : 'Add Credits'}
            />
          </li>,
          <li key={3} style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key={2}>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <header
          className="nav-wrapper"
          style={{ color: 'black', marginBottom: '5px' }}
        >
          <div>
            <Link
              className="brand-logo"
              to={this.props.auth ? '/surveys' : '/'}
              style={{
                margin: '0px 10px',
                color: 'white',
                fontFamily: 'Do Hyeo'
              }}
            >
              Emaily
            </Link>
          </div>
          {this.state.openSidenav ? (
            <Menu width={'80%'} isOpen={false} styles={styles} noOverlay>
              <ul
                id="nav-mobile"
                className="right"
                key="left"
                style={
                  this.state.openSidenav
                    ? { color: 'black', padding: '50px' }
                    : { padding: 0 }
                }
              >
                {this.renderContent()}
              </ul>
            </Menu>
          ) : (
            <ul
              id="nav-mobile"
              className="right"
              key="left"
              style={
                this.state.openSidenav
                  ? { color: 'black', padding: '50px' }
                  : { padding: 0 }
              }
            >
              {this.renderContent()}
            </ul>
          )}
        </header>
      </nav>
    );
  }
}

const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    left: '0px',
    top: '15px'
  },
  bmBurgerBars: {
    background: 'black'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmMenu: {
    background: '#d4e157',
    padding: '0',
    fontSize: '1em'
  },
  bmCross: {
    background: 'black'
  },
  bmMorphShape: {
    fill: '#d4e157'
  },
  bmItemList: {
    color: '#d4e157',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  }
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
