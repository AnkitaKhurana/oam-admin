import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import Delete from '@material-ui/icons/Delete';
import Open from '@material-ui/icons/OpenInNew';

import { withStyles } from '@material-ui/core/styles';
import User from './User';

const styles = theme => ({
  listItem: {
    fontHeight: 20,
  },
  toolbar: theme.mixins.toolbar,
  rightButton: {
    flexGrow: 1,
    textAlign: 'right',
  }
});

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { currentuser: {} };
    this.gotoUser = this.gotoUser.bind(this);
    this.deleteUserFunction = this.deleteUserFunction.bind(this);
  }

  deleteUserFunction(event) {
    if (event.target.tagName === 'path') {
      event.stopPropagation();
      return 0;
    }
    event.preventDefault();
    this.props.deleteUser(JSON.parse(event.target.dataset.currentuser)._id);
    return 0;
  }

  gotoUser(event) {
    if (event.target.tagName === 'path') {
      event.stopPropagation();
      return 0;
    }
    event.preventDefault();
    this.setState({ currentuser: JSON.parse(event.target.dataset.currentuser) });
    return 0;
  }

  render() {
    const { classes, users } = this.props;
    if (users !== null && users !== undefined) {
      return (
        <React.Fragment >
         <User currentuser={this.state.currentuser} />
          <List component="nav">
            {users.map(item =>
              (
                <div
                  key={item._id}
                  data-currentuser={JSON.stringify(item)}
                >
                  <ListItem>
                    <PersonIcon />
                    <div className={classes.listItem} >
                      {item.name}
                    </div>
                    <div className={classes.rightButton}>
                      <Open data-currentuser={JSON.stringify(item)} onClick={this.gotoUser} />
                      <Delete
                        data-currentuser={JSON.stringify(item)}
                        onClick={this.deleteUserFunction}
                      />
                    </div>
                  </ListItem>
                  <Divider />
                </div>
              ))
            }
          </List>
        </React.Fragment>
      );
    }
    return (<p>No Users Found</p>);
  }
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
    listItem: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired
  }).isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default withStyles(styles)(Users);
