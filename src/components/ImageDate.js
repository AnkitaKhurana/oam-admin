import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Image from './Image';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class ImageDate extends Component {
  constructor(props) {
    super(props);
    props.imageFilterCalled(24, 5, 2017);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    const date = event.target.value.split('-');
    const day = date[2];
    const month = [1];
    const year = [0];
    this.props.imageFilterCalled(day, month, year);
  }

  render() {
    const { classes, images } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Images After"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            onChange={this.handleOnChange}
          />
        </form>
        <React.Fragment>
          {' '}
          {images.map(image => <Image key={image._id} image={image} />)}
        </React.Fragment>
      </div>
    );
  }
}


ImageDate.propTypes = {
  classes: PropTypes.shape({
  }).isRequired,
  imageFilterCalled: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default withStyles(styles)(ImageDate);
