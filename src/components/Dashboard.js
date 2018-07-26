import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import UsersIcon from '@material-ui/icons/People';
import Users from './Users';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 300
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  heading: {
    fontSize: 25,
  }
});

const PlaceHolder = 'PlaceHolder';
const UsersBar = 'Users';

const Dashboard = (props) => {
  const {
    classes, activePageChanged, activePage, users, deleteUser
  } = props;
  let activePageContent;
  switch (activePage) {
    case PlaceHolder:
      activePageContent = <Typography className={classes.heading} variant="title" noWrap>PlaceHolder</Typography>;
      break;
    case UsersBar:
      activePageContent = <div><Typography className={classes.heading} variant="title" noWrap>Users</Typography><Users users={users} deleteUser={deleteUser} /></div>;
      break;
    default:
      activePageContent = <Typography noWrap>PlaceHolder</Typography>;
  }

  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem
            button
            divider
            onClick={() => {
              activePageChanged(PlaceHolder);
            }}
          >
            <ListItemText primary={PlaceHolder} />
          </ListItem>
          <ListItem
            button
            divider
            onClick={() => {
              activePageChanged(UsersBar);
            }}
          >
            <UsersIcon />
            <ListItemText primary={UsersBar} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {activePageContent}
      </main>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePageChanged: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    drawerPaper: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Dashboard);
