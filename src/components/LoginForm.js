import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitForm } from '../actions/login';

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
  componentWillReceiveProps(props) {
    if (props.validAdmin === false) {
      this.setState({ show: 'Invalid Email or Password' });
    }
    if (props.validAdmin === true) {
      this.setState({ show: `Welcome ${this.state.email}` });
    }
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.state.email === '' || this.state.password === '') {
      this.setState({ show: 'Email or Password cannot be Blank' });
    } else if (this.state.email.length < 3) { this.setState({ show: 'Email must have mimimum 3 characters' }); } else if (this.state.password.length < 3) { this.setState({ show: 'Password must have mimimum 3 characters' }); } else {
      this.props.submitForm({
        email: this.state.email,
        password: this.state.password,
      });
      if (this.props.validAdmin === false) {
        this.setState({ show: 'Invalid Email or Password' });
      }
      if (this.props.validAdmin === true) {
        this.setState({ show: `Welcome ${this.state.email}` });
      }
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.show}</p>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Email : </label>
            <input name="email" type="email" onChange={this.onChange} value={this.state.email} /><br /><br />
            <label>Password : </label>
            <input name="password" type="password" onChange={this.onChange} value={this.state.password} />
          </div><br /><br />
          <button type="submit" onSubmit={this.onSubmit}>Login</button>
        </form>
      </div>
    );
  }
}


LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  validAdmin: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  validAdmin: state.temp.isAuthentic
});

function mapDispatchToProps(dispatch) {
  return {
    submitForm: details => dispatch(submitForm(details))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
