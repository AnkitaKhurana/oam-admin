import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  return (
    <div>
      {props.name}
    </div>
  );
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Title;
