import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  heading: {
    fontSize: 25,
    backgroundColor: theme.palette.background.default,
  }
});


const AdminPage = (props) => {
  const { classes } = props;
  return (
    <Typography className={classes.heading} variant="title" noWrap>Admin</Typography>
  );
};

AdminPage.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(AdminPage);
