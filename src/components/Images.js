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
      classes, images, imageFilter, imageFilterCalled, deleteImage
    } = this.props;
    const Date = 'date';
    const Platform = 'platform';
    const Title = 'title';
    const User = 'user';
    let filteredImages;
    switch (imageFilter) {
      case Title: filteredImages = (<ImageTitle
        images={images}
        imageFilterCalled={imageFilterCalled}
        deleteImage={deleteImage}
      />);
        break;

      case Platform: filteredImages = (<ImagePlatform
        images={images}
        imageFilterCalled={imageFilterCalled}
        deleteImage={deleteImage}
      />);
        break;

      case Date: filteredImages = (<ImageDate
        images={images}
        imageFilterCalled={imageFilterCalled}
        deleteImage={deleteImage}
      />);
        break;

      case User: filteredImages = (<ImageUser
        images={images}
        imageFilterCalled={imageFilterCalled}
        deleteImage={deleteImage}
      />);
        break;

      default:
        filteredImages = (
          <React.Fragment> {images.map(image =>
            <Image key={image._id} image={image} deleteImage={deleteImage} />)}
          </React.Fragment>);
    }
    let ImagesScreen;
    if (images.length !== 0) {
      ImagesScreen = (
        <React.Fragment>
          <form className={classes.root} autoComplete="off">

            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="filter-required">Filter</InputLabel>
              <Select
                value={this.state.filter}
                onChange={this.handleChange}
                name="filter"
                inputProps={{ id: 'filter-required' }}
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
    } else ImagesScreen = (<p>No images Found</p>);
    return ImagesScreen;
  }
}

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
  }).isRequired,
  imageFilterChanged: PropTypes.func.isRequired,
  imageFilterCalled: PropTypes.func.isRequired,
  imageFilter: PropTypes.string.isRequired,
  getImages: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired
};

export default withStyles(styles)(Images);
