import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from '../../../configs';

export default class Component extends React.Component {
  render() {
    const { classes, isActive, name, title } = this.props;
    const src = isActive ? `${name.toUpperCase()}_ACTIVE` : name.toUpperCase();

    return (
      <img className={classes.root} src={ICONS[src]} title={title} />
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  isActive: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
};