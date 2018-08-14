import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import Delete from '@material-ui/icons/Delete';
import Open from '@material-ui/icons/OpenInNew';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
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
    this.state = { currentuser: {}, open: false };
    this.gotoUser = this.gotoUser.bind(this);
    this.deleteUserFunction = this.deleteUserFunction.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  deleteUserFunction(event) {
    this.handleClose();
    if (event.target.tagName === 'SPAN') {
      event.stopPropagation();
      this.props.deleteUser(JSON.parse(event.target.parentNode.dataset.currentuser)._id);
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
                        onClick={this.handleClickOpen}
                      />
                    </div>
                    <Dialog
                      open={this.state.open}
                      onClose={this.handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">Delete User ?</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        You cannot undo this deletion.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                          No
                        </Button>
                        <Button onClick={this.deleteUserFunction} data-currentuser={JSON.stringify(item)} color="primary" autoFocus>
                          Yes
                        </Button>
                      </DialogActions>
                    </Dialog>
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
