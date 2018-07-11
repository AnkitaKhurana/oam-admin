import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    event.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.show}</p>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Email : </label>
            <input
              name="email"
              type="email"
              onChange={this.onChange}
              value={this.state.email}
            />
            <br /><br />
            <label>Password : </label>
            <input
              name="password"
              type="password"
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>
          <br /><br />
          <button type="submit" onSubmit={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;
