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
import { login, tokenExpired, tokenValidated, getUsers, activePageChanged }
  from '../actions/actions';

const styles = theme => ({
  logoIcon: {
    marginLeft: -12,
    marginRight: 20,
    fontSize: 40
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  }
});

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
    const {
      classes,
      getUsers: dispatchGetUsers,
      users,
      activePageChanged: dispatchActivePageChanged,
      activePage
    } = this.props;

    let authenticatedContent;
    if (this.props.authenticated === false) {
      authenticatedContent = <LoginForm login={this.props.login} />;
    } else {
      authenticatedContent = (
        <Dashboard
          getUsers={dispatchGetUsers}
          users={users}
          activePageChanged={dispatchActivePageChanged}
          activePage={activePage}
        />
      );
    }
    return (
      <div className={classes.root}>
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <LogoIcon className={classes.logoIcon} />
            <Typography variant="title" color="inherit">
              OpenAerialMap Administration
            </Typography>
          </Toolbar>
        </AppBar>
        {authenticatedContent}
      </div>
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
  activePageChanged: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    logoIcon: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  authenticated: state.admin.authenticated,
  getToken,
  users: state.admin.users,
  activePage: state.admin.activePage
});

const mapDispatchToProps = {
  login,
  tokenExpired,
  tokenValidated,
  getUsers,
  activePageChanged,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Landing);
