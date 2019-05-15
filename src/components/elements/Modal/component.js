import React from 'react';
import Button from '@material-ui/core/Button';
import { TableRow, TableCell } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { IMAGES } from '../../../configs';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      open: false,
      query: '',
    };
  }

  handleIncrement() {
    if (this.state.count == 11) {
      this.setState({ count: 0 });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
  }

  handleDecrement() {
    if (this.state.count == 0) {
      this.setState({ count: 11 });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  _renderWeek() {
    const dataArray = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const { classes } = this.props;

    return (
      <TableRow className={classes.line}>
        <TableCell>
          <button id="modal-decrement" onClick={() => this.handleDecrement()} className={classes.left}>
            <img src={IMAGES.ARROW_LEFT} className={classes.closeImage} />
          </button>
        </TableCell>
        <TableCell>
          <div className={classes.tahun}>
            {dataArray[this.state.count]}
          </div>
        </TableCell>
        <TableCell>
          <button id="modal-increment" onClick={() => this.handleIncrement()} className={classes.right}>
            <img src={IMAGES.ARROW_RIGHT} />
          </button>
        </TableCell>
      </TableRow>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Modal}>
        <Button id="modal-open" onClick={this.handleOpen} className={classes.detail}>Oktober, Minggu 2</Button>
        <Modal open={this.state.open}>
          <div style={getModalStyle()} className={classes.paper}>
            <div className={classes.header}>
              <div className={classes.week}>
                {this._renderWeek()}
              </div>
              <div className={classes.close}>
                <Button id="modal-close" onClick={this.handleClose}>
                  <img src={IMAGES.CLOSE} />
                </Button>
              </div>
            </div>
            <div className={classes.line1}>
              <Button > Minggu ke 1 </Button>
              <Button > Minggu ke 2 </Button>
            </div>
            <div className={classes.line2}>
              <Button > Minggu ke 3 </Button>
              <Button > Minggu ke 4 </Button>
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