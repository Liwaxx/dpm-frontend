import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

export default class Component extends React.Component {
  render() {
    const { children, classes, className } = this.props;
    const customClass = className ? `${classes.card} ${className}` : classes.card;

    return (
      <Card className={customClass}>
        {children}
      </Card>
    );
  }
}

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
  classes: PropTypes.object,
  className: PropTypes.string,
};