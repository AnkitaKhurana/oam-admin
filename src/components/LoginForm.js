import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
        <Paper elevation={2} style={{ padding: 20 }}>
          <Typography variant="headline" gutterBottom align="center">
       LOGIN
          </Typography>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Email : </label>
              <TextField
                name="email"
                type="email"
                onChange={this.onChange}
                value={this.state.email}
              />
              <br /><br />
              <label>Password : </label>
              <TextField
                name="password"
                type="password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>
            <br /><br />
            <Button
              variant="contained"
              size="small"
              color="primary"
              type="submit"
              onSubmit={this.login}
            >Login
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;
