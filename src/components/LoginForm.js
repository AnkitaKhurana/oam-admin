import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitForm } from '../actions/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      show: ''

    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    this.setState({ show: 'Logging in....' });
    event.preventDefault();
    this.props.submitForm({
      name: this.state.name,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.show}</p>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name : </label>
            <input name="name" type="text" onChange={this.onChange} value={this.state.name} /><br /><br />
            <label>Password : </label>
            <input name="password" type="text" onChange={this.onChange} value={this.state.password} />
          </div><br /><br />
          <button type="submit" onSubmit={this.onSubmit}>Login</button>
        </form>
      </div>
    );
  }
}


LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    submitForm: details => dispatch(submitForm(details))
  };
}


export default connect(null, mapDispatchToProps)(LoginForm);
