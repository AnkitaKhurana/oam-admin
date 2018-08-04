import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const User = (props) => {
  if (props.currentuser._id !== undefined) {
    return (
      <Paper elevation={1}>
        <Typography variant="headline" component="h3">
          {props.currentuser.name}
        </Typography>
      </Paper>
    );
  }
  return (<p />);
};

User.propTypes = {
  currentuser: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default User;
