import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Image from './Image';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 'inherit'
  },
  tabs: {
    width: 250
  }
});

let alphabets = [];
function Initialise() {
  alphabets = [];
  for (let i = 0; i < 26; i += 1) {
    alphabets.push(String.fromCharCode(65 + i));
  }
}

class ImageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
    Initialise();
    props.imageFilterCalled('A');
  }
  handleChange(event) {
    const filterBy = String.fromCharCode(65 + event.target.value);
    this.setState({ value: event.target.value });
    this.props.imageFilterCalled(filterBy);
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const { classes, images } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <form autoComplete="off">
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="filter-required">Filter</InputLabel>
              <Select
                value={value}
                onChange={this.handleChange}
                name="filter"
                inputProps={{
                id: 'filter-required'
              }}
                className={classes.selectEmpty}
              >
                {alphabets.map(letter => (
                  <MenuItem key={letter.charCodeAt(0)} value={letter.charCodeAt(0) - 65}>
                    {letter}
                  </MenuItem>
              ))}
              </Select>
              <FormHelperText>Select via Title Name</FormHelperText>
            </FormControl>
          </form>
        </div>
        {images.map(image => <Image key={image._id} image={image} />)}
      </React.Fragment>
    );
  }
}

ImageTitle.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  imageFilterCalled: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(ImageTitle);
