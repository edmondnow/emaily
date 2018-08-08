import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import Dimensions from 'react-dimensions';

const getStyle = width => {
  return {
    position: width <= 760 ? 'relative' : 'absolute',
    bottom: 10,
    paddingTop: 0,
    width: width
  };
};

const renderContent = icons => {
  return icons.map(icon => (
    <a
      href="https://github.com/edmondnow"
      style={anchorStyle}
      key={icon.iconName}
    >
      <FontAwesomeIcon icon={icon} size="3x" style={iconStyle} />
    </a>
  ));
};

const anchorStyle = {
  border: 'none',
  outline: 'none',
  textDecoration: 'none',
  color: 'black'
};

const iconStyle = { margin: '10px 20px 10px 0px' };

class Footer extends Component {
  render() {
    return (
      <footer
        className="page-footer z-depth-1"
        style={getStyle(this.props.containerWidth)}
      >
        <div className="center-align">
          {renderContent([faGithub, faLinkedin, faTwitter])}
        </div>
      </footer>
    );
  }
}

export default Dimensions()(Footer);
