import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 230
  },
  title: {
    fontSize: 20,
    fontWeight: 500
  },
  image: {
    width: 200,
    height: 163
  },
  details: {
    textAlign: 'left'
  }
});

const Image = (props) => {
  const { image, classes } = props;
  if (props !== undefined) {
    return (
      <div className={classes.root}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography className={classes.title} noWrap>{image.title}</Typography>
            <img className={classes.image} src={image.properties.thumbnail} alt="" />
            <div className={classes.details}>
              <Typography noWrap><b>Provider : </b> {image.provider}</Typography>
              <Typography noWrap><b>Platform :</b> {image.platform}</Typography>
            </div>
          </Paper>
        </Grid>
      </div>
    );
  }
  return (<p />);
};


Image.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.shape({
    uuid: PropTypes.string,
    title: PropTypes.string,
    provider: PropTypes.string,
    platform: PropTypes.string,
    properties: PropTypes.object
  }).isRequired
};

export default withStyles(styles)(Image);
