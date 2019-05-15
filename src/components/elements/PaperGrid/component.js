import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

export default class Component extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.pembuka}>
          {children}
        </div>

        <div className={classes.add}>
          <Text className={classes.add_text}><br/>ADD TASK</Text>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object
};

