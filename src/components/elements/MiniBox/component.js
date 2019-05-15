import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import Text from '../Text';

export default class Component extends React.Component {
  render() {
    const { classes, title, description } = this.props;

    return (
      <Grid>
        <div>
          <Text className={classes.paper}>{title}</Text>
          <Text className={classes.code}>{description}</Text>
        </div>
      </Grid>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};