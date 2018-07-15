import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from './Title';
import LoginForm from './LoginForm';
import UsersList from './UsersList';
// import LoggedIn from './LoggedIn';
import { getToken } from '../utils/token';
import { login, tokenExpired, tokenValidated, fetchAuthor, getUsers }
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
  componentDidMount() {
    this.props.fetchAuthor();
    this.props.getUsers();
  }

  render() {
    let authenticatedContent;
    if (this.props.authenticated === false) {
      authenticatedContent = <LoginForm login={this.props.login} />;
    } else {
      authenticatedContent = (
        <div>
          <UsersList users={this.props.users} />
          <div>Authenticated</div>
        </div>);
    }
    return (
      <div>
        <header className="App-header">
          <div><Title name={this.props.author} /></div>
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
  getToken: PropTypes.func.isRequired,
  fetchAuthor: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.admin.authenticated,
  getToken,
  author: state.admin.author,
  users: state.admin.users
});

const mapDispatchToProps = {
  login,
  tokenExpired,
  tokenValidated,
  fetchAuthor,
  getUsers
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

