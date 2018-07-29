import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const User = (props) => {
  if (props.currentuser._id !== undefined) {
    return (
      <React.Fragment>
        <Paper elevation={1}>
          <Typography variant="headline" component="h3">
            {props.currentuser.name}
          </Typography>
          <Typography component="p">
            {props.currentuser._id}
          </Typography>
        </Paper>
      </React.Fragment>
    );
  }
  return (<p />);
};

User.propTypes = {
  currentuser: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default User;
