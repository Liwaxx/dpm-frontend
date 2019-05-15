import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 2018
    };
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <TableRow className={classes.line}>
        <TableCell>
          <button onClick={() => this.handleDecrement()} className={classes.left}>
            <img src={IMAGES.ARROW_LEFT} />
          </button>
        </TableCell>
        <TableCell>
          <div className={classes.tahun}>
            {this.state.count}
          </div>
        </TableCell>
        <TableCell>
          <button onClick={() => this.handleIncrement()} className={classes.right}>
            <img src={IMAGES.ARROW_RIGHT} />
          </button>
        </TableCell>
      </TableRow>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};