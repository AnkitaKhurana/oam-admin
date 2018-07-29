import React from 'react';
import PropTypes from 'prop-types';
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
  const { classes, currentImages } = props;
  if (currentImages !== null && currentImages !== undefined && currentImages !== []) {
    return (
      <React.Fragment >
        <Grid className={classes.container} container >

          {currentImages.map(imageElement =>
              (
                <Image key={imageElement._id} image={imageElement} />
              ))}
        </Grid>
      </React.Fragment>
    );
  }
  return (<p>No images Found</p>);
};

Images.propTypes = {
  currentImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
  }).isRequired,
};

export default withStyles(styles)(Images);
