import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';


import Title from './Title';
import Content from './Content';
import LoginForm from './LoginForm';
import { getToken } from '../utils/token';
import { login, tokenExpired, tokenValidated, fetchAuthor, getUsers }
  from '../actions/actions';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  img: {
    height: 40,
    display: 'inline-block'
  },
  title: {
    display: 'inline-block',
    height: 40
  }
});
let authenticatedContent;
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { barSelected: 0 };
    this.setOption = this.setOption.bind(this);
  }
  componentWillMount() {
    const token = this.props.getToken();
    if (token) {
      this.props.tokenValidated();
    } else {
      this.props.tokenExpired();
    }
    this.props.getUsers();
  }
  componentDidMount() {
    this.props.fetchAuthor();
  }
  setOption(event) {
    this.setState({ barSelected: parseInt(event.target.dataset.option, 10) });
  }
  render() {
    if (this.props.authenticated === false) {
      authenticatedContent = <LoginForm login={this.props.login} />;
    } else {
      authenticatedContent = (
        <Content option={this.state.barSelected} users={this.props.users} />
      );
    }
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar} >
          <Toolbar>
            <a href="https://openaerialmap.org/">
              <img alt="" src="../../favicon.ico" className={classes.img} />
            </a>
            <Typography variant="display2" color="inherit" noWrap style={{ display: 'inline-flex' }}>
              <Title name={this.props.author} className={classes.title} />
            </Typography>

          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
          paper: classes.drawerPaper,
        }}
        >
          <div className={classes.toolbar} />
          <Button data-option={0} onClick={this.setOption}>Admin Profile</Button>
          <Divider />
          <Button data-option={1} onClick={this.setOption}>Users</Button>
          <Divider />
          <Button>item</Button>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {authenticatedContent}
        </main>
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
  // classes: PropTypes.arrayOf(PropTypes.object).isRequired,
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

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
