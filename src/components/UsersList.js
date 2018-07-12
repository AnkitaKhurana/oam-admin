import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: {} };
  }
  componentWillReceiveProps(props) {
    this.setState({ users: props.users });
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.users).map(item =>
          (<div><p>{this.state.users[item].name}</p></div>))}
      </div>
    );
  }
}


UsersList.propTypes = {
  users: PropTypes.object.isRequired,
};

export default UsersList;
