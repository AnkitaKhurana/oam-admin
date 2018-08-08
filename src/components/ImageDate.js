import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Image from './Image';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 'inherit'
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
    props.imageFilterCalled('2017-05-24');
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.props.imageFilterCalled(event.target.value);
  }

  render() {
    const { classes, images } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <form noValidate>
            <TextField
              id="date"
              label="Uploaded After (mm/dd/yyyy)"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
              shrink: true
            }}
              onChange={this.handleOnChange}
            />
          </form>
        </div>
        {images.map(image => <Image key={image._id} image={image} />)}
      </React.Fragment>
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
