import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Drawer variant="permanent" >
          <Button data-option={0} onClick={this.setOption}>Admin Profile</Button>
          <Divider />
          <Button data-option={1} onClick={this.setOption}>Users</Button>
          <Divider />
          <Button>item</Button>
        </Drawer>
        <main>
          <div>wat</div>
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
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dashboard;
