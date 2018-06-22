import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAdmin } from '../actions/logout';


class Screen extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.props.logoutAdmin();
  }
  render() {
    return (
      <div>
        <p>Hi Admin</p>
        <button onClick={this.onSubmit}>Logout</button>
      </div>
    );
  }
}

Screen.propTypes = {
  logoutAdmin: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ logoutAdmin }, dispatch)
  };
}


export default connect(null, mapDispatchToProps)(Screen);

