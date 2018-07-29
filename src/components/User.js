import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UserImages from './UserImages';

const User = (props) => {
  if (props.currentuser._id !== undefined) {
    return (
      <React.Fragment>
        <Paper elevation={1}>
          <Typography variant="headline" component="h3">
            {props.currentuser.name}
          </Typography>
          <UserImages currentImages={props.currentImages} />
        </Paper>
      </React.Fragment>
    );
  }
  return (<p />);
};

User.propTypes = {
  currentImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentuser: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default User;
