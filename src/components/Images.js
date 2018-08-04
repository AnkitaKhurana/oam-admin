import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Image from './Image';

const styles = theme => ({
  container: {
    paddingTop: 20,
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  }
});

const Images = (props) => {
  const { classes, images } = props;
  if (images !== undefined) {
    return (
      <List component="nav">
        <Grid className={classes.container} container spacing={24}>
          {images.map(image =>
            <Image key={image._id} image={image} />)}
        </Grid>
      </List>
    );
  }
  return (<p>No images Found</p>);
};

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
  }).isRequired,
};

export default withStyles(styles)(Images);
