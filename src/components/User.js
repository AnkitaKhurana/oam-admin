import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  avatar: {
    margin: 10,
    borderRadius: 10,
    maxHeight: 50,
    maxWidth: 50
  },
  content: {
    textAlign: 'left',
    padding: 20
  },
  name: {
    size: 2
  }
};

const User = (props) => {
  const { classes } = props;
  if (props.currentuser._id !== undefined) {
    return (
      <Paper elevation={1}>

        <Typography variant="title" className={classes.name} component="h3">
          <img alt="" className={classes.avatar} src={props.currentuser.profile_pic_uri} />
          {props.currentuser.name}
        </Typography>
        <div className={classes.content}>
          <Typography variant="subheading" component="h2">
            <b>Website : </b>{props.currentuser.website}
          </Typography>
          <Typography variant="subheading" component="h2">
            <b>Bio: </b>{props.currentuser.bio}
          </Typography>
          <Typography variant="subheading" component="h2">
            <b>Contact: </b>{props.currentuser.contact_email}
          </Typography>
        </div>
      </Paper>
    );
  }
  return (<p />);
};

User.propTypes = {
  currentuser: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    profile_pic_uri: PropTypes.string,
    website: PropTypes.string,
    bio: PropTypes.string,
    contact_email: PropTypes.string
  }).isRequired,
  classes: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    content: PropTypes.string,
  }).isRequired
};

export default withStyles(styles)(User);
