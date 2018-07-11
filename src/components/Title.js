import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  componentWillReceiveProps(props) {
    this.setState({ name: props.name });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}


Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
