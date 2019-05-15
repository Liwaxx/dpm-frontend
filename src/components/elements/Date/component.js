import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Text from '../Text';

export default class Component extends React.Component {
  render() {
    const { classes, date = new Date() } = this.props;
    moment.locale('id');

    return (
      <Text className={classes.text}>{moment(date).format('dddd, D MMMM YYYY')}</Text>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  date: PropTypes.string,
};