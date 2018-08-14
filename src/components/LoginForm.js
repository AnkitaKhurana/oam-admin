import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  textField: {
    marginTop: theme.spacing.unit,
    width: 400
  },
  toolbar: theme.mixins.toolbar
});

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
    const { classes } = this.props;
    return (
      <form className={classes.container} onSubmit={this.onSubmit}>
        <div className={classes.toolbar} />
        <TextField
          name="email"
          type="email"
          label="Email"
          className={classes.textField}
          onChange={this.onChange}
          value={this.state.email}
        />
        <br />
        <TextField
          name="password"
          type="password"
          label="Password"
          className={classes.textField}
          onChange={this.onChange}
          value={this.state.password}
        />
        <br />
        <Button
          variant="contained"
          size="small"
          color="primary"
          type="submit"
          className={classes.textField}
          onSubmit={this.login}
        >
        Login
        </Button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(LoginForm);
