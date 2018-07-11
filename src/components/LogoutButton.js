import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default LogoutButton;
