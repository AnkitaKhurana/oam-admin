import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogoIcon from './LogoIcon';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { getToken } from '../utils/token';
import { login, tokenExpired, tokenValidated, getUsers }
  from '../actions/actions';

const styles = {
  logoIcon: {
    marginLeft: -12,
    marginRight: 20,
    fontSize: 40
  }
};

export class Landing extends Component {
  componentWillMount() {
    const token = this.props.getToken();
    if (token) {
      this.props.tokenValidated();
    } else {
      this.props.tokenExpired();
    }
  }

  render() {
    const { classes } = this.props;
    let authenticatedContent;
    if (this.props.authenticated === false) {
      authenticatedContent = <LoginForm login={this.props.login} />;
    } else {
      authenticatedContent = <Dashboard />;
    }
    return (
      <React.Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <LogoIcon className={classes.logoIcon} />
            <Typography variant="title" color="inherit">
              OpenAerialMap Administration
            </Typography>
          </Toolbar>
        </AppBar>
        {authenticatedContent}
      </React.Fragment>

    );
  }
}

Landing.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  tokenExpired: PropTypes.func.isRequired,
  tokenValidated: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
    logoIcon: PropTypes.string.isRequired
  }).isRequired
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
  getUsers
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Landing);
