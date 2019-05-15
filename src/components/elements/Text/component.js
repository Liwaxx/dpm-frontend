import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default class Component extends React.Component {
  render() {
    const { children, classes, className, type, ...rest } = this.props;
    const customClass = `${classes.text} ${classes[type]} ${className}`;

    return (
      <Typography className={customClass} {...rest}>
        {children}
      </Typography>
    );
  }
}

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  classes: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
};