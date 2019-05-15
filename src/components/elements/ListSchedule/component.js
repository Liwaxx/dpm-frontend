import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Text from '../Text';

export default class Component extends React.Component {
  render() {
    const { classes, data={}, } = this.props;
    return (
      // <Card>
      //   {
      //     data ? (
      //       data.map((data,index) => (
      <Card className={classes.container}>
        <Card className={classes.head}>
          <Text className={classes.time} >
            In 45 min
          </Text>
          <Text className={classes.text} >
            {data.dateTime}
          </Text>
        </Card>
        <Card className={classes.content}>
          <Text className={classes.title} >
            {data.description}
          </Text>
          <Text className={classes.location}>
            {data.location}
          </Text>
        </Card>
      </Card>
      //       ))
      //     ) : (<div>Loading</div>)
      //   }
      // </Card>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
};