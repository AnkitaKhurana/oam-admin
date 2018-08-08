import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Image from './Image';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class ImagePlatform extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
    props.imageFilterCalled('satellite');
  }
  handleChange(event, value) {
    let filterBy = '';
    switch (value) {
      case 0: filterBy = 'satellite';
        break;
      case 1: filterBy = 'aircraft';
        break;
      case 2: filterBy = 'uav';
        break;
      case 3: filterBy = 'balloon';
        break;
      case 4: filterBy = 'kite';
        break;
      default: filterBy = 'satellite';
        break;
    }
    this.setState({ value });
    this.props.imageFilterCalled(filterBy);
  }
  render() {
    const { classes, images } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="satellite" />
            <Tab label="aircraft" />
            <Tab label="uav" />
            <Tab label="balloon" />
            <Tab label="kite" />
          </Tabs>
        </div>
        {images.map(image =>
          <Image key={image._id} image={image} />)}
      </React.Fragment>
    );
  }
}

ImagePlatform.propTypes = {
  classes: PropTypes.shape({
  }).isRequired,
  imageFilterCalled: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(ImagePlatform);
