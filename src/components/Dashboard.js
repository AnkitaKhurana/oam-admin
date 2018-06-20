import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from './Title';
import LoginForm from './LoginForm';
import { tokenIsValid } from '../actions/checkToken';
import { getToken } from '../utils/token';


const currentTime = new Date().getTime() / 1000;

class Dashboard extends Component {
  componentWillMount() {
    const token = getToken();
    this.props.tokenIsValid(token, currentTime);
  }
  render() {
    let screen;
    if (this.props.isAuthentic === false) {
      screen = (<LoginForm />);
    } else {
      screen = (<p>Hi Admin</p>);
    }


    return (
      <div>
        <header className="App-header">
          <Title className="App-title" />
        </header>
        <p className="App-intro">
          Admin Login
        </p>
        {screen}

      </div>
    );
  }
}


Dashboard.propTypes = {
  isAuthentic: PropTypes.bool.isRequired,
  tokenIsValid: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthentic: state.temp.isAuthentic
});

export default connect(mapStateToProps, { tokenIsValid })(Dashboard);

