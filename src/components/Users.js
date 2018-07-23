import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';
import User from './User';

const styles = theme => ({
  listItem: {
    fontHeight: 20
  },
  toolbar: theme.mixins.toolbar
});

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { currentuser: {} };
    this.gotoUser = this.gotoUser.bind(this);
  }

  gotoUser(event) {
    event.preventDefault();
    this.setState({ currentuser: JSON.parse(event.target.dataset.currentuser) });
  }

  render() {
    const { classes } = this.props;
    if (this.props.users !== null && this.props.users !== undefined) {
      return (
        <React.Fragment >
          <List component="nav">
            {this.props.users.map(item =>
                (
                  <div
                    key={item._id}
                    data-currentuser={JSON.stringify(item)}
                    onClick={this.gotoUser}
                  >
                    <ListItem
                      button
                      data-currentuser={JSON.stringify(item)}
                    >
                      <PersonIcon
                        data-currentuser={JSON.stringify(item)}
                      />
                      <div
                        className={classes.listItem}
                        data-currentuser={JSON.stringify(item)}
                      >
                        {item.name}
                      </div>
                    </ListItem>
                    <Divider />
                  </div>
                ))
            }
          </List>
          <User currentuser={this.state.currentuser} />
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
  }).isRequired
};

export default withStyles(styles)(Users);
