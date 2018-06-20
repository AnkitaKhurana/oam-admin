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
  componentWillReceiveProps(props) {
    if (props.validAdmin === false) {
      this.setState({ show: 'Invalid Username or Password' });
    }
    if (props.validAdmin === true) {
      this.setState({ show: `Welcome ${this.state.name}` });
    }
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.state.name === '' || this.state.password === '') {
      this.setState({ show: 'Name or Password cannot be Blank' });
    } else if (this.state.name.length < 3) { this.setState({ show: 'Name must have mimimum 3 characters' }); } else if (this.state.password.length < 3) { this.setState({ show: 'Password must have mimimum 3 characters' }); } else {
      this.props.submitForm({
        name: this.state.name,
        password: this.state.password,
      });
      if (this.props.validAdmin === false) {
        this.setState({ show: 'Invalid Username or Password' });
      }
      if (this.props.validAdmin === true) {
        this.setState({ show: `Welcome ${this.state.name}` });
      }
    }
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
  validAdmin: PropTypes.bool,
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
