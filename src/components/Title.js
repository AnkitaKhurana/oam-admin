import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNow } from '../actions/oam';

class Title extends Component {
  componentWillMount() {
    this.props.fetchNow();
  }
  render() {
    return (
      <div>
        <h1>{this.props.res}</h1>
      </div>
    );
  }
}

Title.propTypes = {
  fetchNow: PropTypes.func.isRequired,
  res: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  res: state.temp.items
});


export default connect(mapStateToProps, { fetchNow })(Title);
