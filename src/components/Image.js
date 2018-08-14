import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 265,
    margin: 10
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
  },
  deleteBox: {
    flexGrow: 1,
    textAlign: 'right',

  }
});


class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.deleteImageFunction = this.deleteImageFunction.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  deleteImageFunction(event) {
    this.handleClose();
    if (event.target.tagName === 'SPAN') {
      event.stopPropagation();
      this.props.deleteImage(event.target.parentNode.dataset.imagetodelete);
      return 0;
    }
    event.preventDefault();
    this.props.deleteImage(event.target.dataset.imagetodelete);
    return 0;
  }
  render() {
    const { image, classes } = this.props;
    if (image !== undefined) {
      return (
        <div className={classes.root}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <p className={classes.deleteBox}>
                <Delete
                  data-imagetodelete={image._id}
                  onClick={this.handleClickOpen}
                />
              </p>
              <Typography className={classes.title} noWrap>{image.title}</Typography>
              <img className={classes.image} src={image.properties.thumbnail} alt="" />
              <div className={classes.details}>
                <Typography noWrap><b>Provider : </b> {image.provider}</Typography>
                <Typography noWrap><b>Platform :</b> {image.platform}</Typography>
              </div>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">Delete Image ?</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                        You cannot undo this deletion.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                          No
                  </Button>
                  <Button onClick={this.deleteImageFunction} data-imagetodelete={image._id} color="primary" autoFocus>
                          Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </Grid>
        </div>
      );
    }
    return (<p />);
  }
}

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
  }).isRequired,
  deleteImage: PropTypes.func.isRequired
};

export default withStyles(styles)(Image);
