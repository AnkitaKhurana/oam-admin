import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Title from './Title';
import LoginForm from './LoginForm';
//import LoggedIn from './LoggedIn';
import { getToken } from '../utils/token';
import { login, tokenExpired, tokenValidated, fetchAuthor }
  from '../actions/actions';

export class Dashboard extends Component {
  componentWillMount() {
    const token = this.props.getToken();
    if (token) {
      this.props.tokenValidated();
    } else {
      this.props.tokenExpired();
    }
  }
  render() {
    let authenticatedContent;
    if (this.props.authenticated === false) {
      authenticatedContent = <LoginForm login={this.props.login} />;
    } else {
      authenticatedContent = <div>Authenticated</div>;
    }
    return (
      <div>
        <header className="App-header">
          <div>Title</div>
        </header>
        <br />
        {authenticatedContent}
      </div>
    );
  }
}


Dashboard.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  tokenExpired: PropTypes.func.isRequired,
  tokenValidated: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.admin.authenticated,
  getToken
});

const mapDispatchToProps = {
  login,
  tokenExpired,
  tokenValidated,
  fetchAuthor
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

