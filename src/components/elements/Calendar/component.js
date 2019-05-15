import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';

export default class Component extends React.Component {

  render() {
    const { classes, onChange, value } = this.props;

    return (
      <div>
        <Calendar   
          onChange={onChange}
          value={value}
          className={classes.calendar}
        />
      </div>
    );
    
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};