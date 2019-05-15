import React from 'react';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
};