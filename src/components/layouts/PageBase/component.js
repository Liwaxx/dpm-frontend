import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import DrawerList from '../../elements/DrawerList';
import Text from '../../elements/Text';
import drawerListData from '../../../constants/drawerListData';

export default class Component extends React.Component {
  constructor() {
    super();

    this.state = {
      anchorEl: null,
      openDrawer: false,
    };
    this.appBarRef = React.createRef();
    this._handleMenuClick = this._handleMenuClick.bind(this);
  }

  _handleMenuClick() {
    const { openDrawer } = this.state;

    this.setState({ openDrawer: !openDrawer });
  }

  _renderDrawer() {
    const { classes } = this.props;
    const { openDrawer } = this.state;

    return (
      <div>
        <Hidden smDown>
          <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
            <div className={classes.rectangle} />
            <div className={classes.rectangle} />
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <Drawer open={openDrawer} variant="persistent" classes={{ paper: classes.drawer }}>
            <List>
              {
                drawerListData.items.map((item, idx) =>
                  <DrawerList item={item} isMiniDrawer key={idx} />
                )
              }
            </List>
          </Drawer>
        </Hidden>
      </div>
    );
  }

  _renderSidebar() {
    const { classes } = this.props;
    const { openDrawer } = this.state;

    return (
      <div>
        <Hidden smDown>
          <Drawer variant="permanent" classes={{ paper: classes.sidebar }}>
            <Text className={classes.textTitle}>Dasboard Performance</Text>
            <List>
              {
                drawerListData.items.map((item, idx) =>
                  <DrawerList item={item} key={idx} />
                )
              }
            </List>
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <Drawer open={openDrawer} variant="persistent" classes={{ paper: classes.sidebar }}>
            <List>
              {
                drawerListData.items.map((item, idx) =>
                  <DrawerList item={item} isMiniDrawer key={idx} />
                )
              }
            </List>
          </Drawer>
        </Hidden>
      </div>
    );
  }

  _renderSnackbar() {
    const { actions, message } = this.props;
    const open = message ? true : false;

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={3000}
        open={open}
        onClose={actions.hideSnackbar}
        message={<span>{message}</span>}
      />
    );
  }

  render() {
    const { children, classes } = this.props;

    return (
      <div>
        {this._renderDrawer()}
        {this._renderSidebar()}
        {this._renderSnackbar()}
        <main className={classes.content}>
          {children}
        </main>
      </div>
    );
  }
}

Component.propTypes = {
  actions: PropTypes.object,
  children: PropTypes.element,
  classes: PropTypes.object,
  message: PropTypes.string,
};
