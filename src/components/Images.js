import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Image from './Image';
import ImageTitle from './ImageTitle';
import ImagePlatform from './ImagePlatform';
import ImageDate from './ImageDate';
import ImageUser from './ImageUser';

const styles = theme => ({
  container: {
    paddingTop: 20,
    display: 'flex',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`
  }
});


class Images extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: props.imageFilter };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.imageFilterChanged(event.target.value.toString());
    if (event.target.value.toString() === '0') {
      this.props.getImages();
    }
  }

  render() {
    const {
      classes, images, imageFilter, imageFilterCalled
    } = this.props;
    const Date = 'date';
    const Platform = 'platform';
    const Title = 'title';
    const User = 'user';
    let filteredImages;
    switch (imageFilter) {
      case 'title': filteredImages = (<ImageTitle images={images} imageFilterCalled={imageFilterCalled} />);
        break;
      case 'platform': filteredImages = (<ImagePlatform images={images} imageFilterCalled={imageFilterCalled} />);
        break;
      case 'date': filteredImages = (<ImageDate images={images} imageFilterCalled={imageFilterCalled} />);
        break;
      case 'user': filteredImages = (<ImageUser images={images} imageFilterCalled={imageFilterCalled} />);
        break;
      default:
        filteredImages = (
          <React.Fragment> {images.map(image =>
            <Image key={image._id} image={image} />)}
          </React.Fragment>);
    }

    if (images !== undefined) {
      return (
        <React.Fragment>
          <form className={classes.root} autoComplete="off">

            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="filter-required">Filter</InputLabel>
              <Select
                value={this.state.filter}
                onChange={this.handleChange}
                name="filter"
                inputProps={{
              id: 'filter-required',
            }}
                className={classes.selectEmpty}
              >
                <MenuItem value={0}>
                  <em>All</em>
                </MenuItem>
                <MenuItem value={Title}>Title</MenuItem>
                <MenuItem value={Date}>Date</MenuItem>
                <MenuItem value={Platform}>Platform</MenuItem>
                <MenuItem value={User}>User</MenuItem>
              </Select>
              <FormHelperText>Filter Images By</FormHelperText>
            </FormControl>
          </form>
          <List component="nav">
            <Grid className={classes.container} container spacing={24}>
              {filteredImages}
            </Grid>
          </List>
        </React.Fragment>
      );
    }
    return (<p>No images Found</p>);
  }
}

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
  }).isRequired,
  imageFilterChanged: PropTypes.func.isRequired,
  imageFilterCalled: PropTypes.func.isRequired,
  imageFilter: PropTypes.string.isRequired,
  getImages: PropTypes.func.isRequired
};

export default withStyles(styles)(Images);
