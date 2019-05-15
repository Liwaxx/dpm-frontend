import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Month from '../Month';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="modal">
        <Button id="modal-pertahun-open" onClick={this.handleOpen} className={classes.text}>Oktober 2018</Button>
        <Modal open={this.state.open}>
          <div className={classes.paper}>
            <div className={classes.header}>
              <Month />
              <Button id="modal-pertahun-close" onClick={this.handleClose} className={classes.close}>
                <img src={IMAGES.CLOSE} className={classes.closeImage} />
              </Button>
            </div>
            <div className={classes.line1}>
              <Button> Jan </Button>
              <Button> Feb </Button>
              <Button> Mar </Button>
              <Button> Apr </Button>
            </div>
            <div className={classes.line2}>
              <Button> Mei </Button>
              <Button> Jun </Button>
              <Button> Jul </Button>
              <Button> Aug </Button>
            </div>
            <div className={classes.line3}>
              <Button> Sep </Button>
              <Button> Okt </Button>
              <Button> Nop </Button>
              <Button> Des </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};
