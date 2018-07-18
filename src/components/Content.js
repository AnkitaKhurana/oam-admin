import React from 'react';
import PropTypes from 'prop-types';
import UsersList from './UsersList';

let content;
function Content(props) {
  if (props.option === 0) {
    content = (<div>Admin Content</div>);
  } else if (props.option === 1) {
    content = (<UsersList users={props.users} />);
  }
  return (
    <div>
      {content}
    </div>
  );
}

Content.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  option: PropTypes.number.isRequired
};

export default Content;
