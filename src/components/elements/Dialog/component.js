import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import Text from '../Text';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      scroll: 'paper',
      fullScreen: false,
    };
  }

  handleClickOpen = scroll => () => {
    this.setState({ 'open': true, scroll, fullScreen: true });
  };

  handleClose = () => {
    this.setState({ 'open': false });
  };

  render() {
    const { classes, children } = this.props;

    return (
      <div>
        <Button className={classes.bdetail}onClick={this.handleClickOpen('paper')}>Details</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          className={classes.dialog}
          fullScreen={this.state.fullScreen}
        >
          <div className={classes.button}>
            <Text className={classes.title_squad}>Squad Backlog</Text>
            <button className={classes.close} onClick={this.handleClose}>
              <img src={IMAGES.CLOSE} className={classes.closeB} />
            </button>
          </div>
          <DialogContent className={classes.content}>{children}</DialogContent>
        </Dialog>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object
};