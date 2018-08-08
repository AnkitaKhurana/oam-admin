import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Image from './Image';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 'inherit'
  },
  button: {
    backgroundColor: '#2e7031',
    margin: 2,
    '&:hover': {
      background: '#8bc34a'
    }
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class ImageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    props.imageFilterCalled('-');
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.imageFilterCalled(this.state.userName);
  }
  render() {
    const { classes, images } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <form onSubmit={this.onSubmit}>
            <TextField
              name="userName"
              type="text"
              label="User Name"
              className={classes.textField}
              onChange={this.onChange}
              value={this.state.userName}
            />
            <Button
              variant="contained"
              size="small"
              color="primary"
              type="submit"
              className={classes.button}
              onSubmit={this.login}
            >  Search
            </Button>
          </form>
        </div>
        {images.map(image => <Image key={image._id} image={image} />)}
      </React.Fragment>
    );
  }
}

ImageUser.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  imageFilterCalled: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(ImageUser);
