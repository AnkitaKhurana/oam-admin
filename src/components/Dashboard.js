import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import UsersIcon from '@material-ui/icons/People';
import ImagesIcon from '@material-ui/icons/Image';
import AdminIcon from '@material-ui/icons/Face';
import Users from './Users';
import Images from './Images';
import AdminPage from './AdminPage';


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

const Admin = 'Admin';
const UsersBar = 'Users';
const ImagesBar = 'Images';

const Dashboard = (props) => {
  const {
    classes, activePageChanged, activePage, users, getImages, deleteImage,
    images, deleteUser, imageFilter, imageFilterChanged, imageFilterCalled
  } = props;
  let activePageContent;
  switch (activePage) {
    case Admin:
      activePageContent = <AdminPage />;
      break;
    case UsersBar:
      activePageContent = <div><Typography className={classes.heading} variant="title" noWrap>Users</Typography><Users users={users} deleteUser={deleteUser} /></div>;
      break;
    case ImagesBar:
      activePageContent = (
        <div>
          <Typography className={classes.heading} variant="title" noWrap>Images</Typography>
          <Images
            images={images}
            getImages={getImages}
            imageFilter={imageFilter}
            deleteImage={deleteImage}
            imageFilterChanged={imageFilterChanged}
            imageFilterCalled={imageFilterCalled}
          />
        </div>);
      break;
    default:
      activePageContent = <AdminPage />;
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
              activePageChanged(Admin);
            }}
          >
          <AdminIcon />
            <ListItemText primary={Admin} />
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
          <ListItem
            button
            divider
            onClick={() => {
              activePageChanged(ImagesBar);
            }}
          >
            <ImagesIcon />
            <ListItemText primary={ImagesBar} />
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
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePageChanged: PropTypes.func.isRequired,
  getImages: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  imageFilterChanged: PropTypes.func.isRequired,
  imageFilterCalled: PropTypes.func.isRequired,
  imageFilter: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    drawerPaper: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Dashboard);
