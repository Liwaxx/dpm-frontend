import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import Text from '../Text';
import styles from './styles';

export default class Component extends React.Component {
  render() {
    const { classes, legend } = this.props;

    return (
      <div>
        <Chart
          width={'100'}
          height={'100'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={this.props.dataChart}
          options={
            styles
          }
        />
        <div className={classes.legends}>
          <Text type="paragraph" style={{ paddingBottom: 10, paddingTop: 5 }}>Total Backlog</Text>
          {
            legend ? (
              legend.map((item, index) => (
                <Text type="subheader" key={index}>
                  <span className={classes[`span${index}`]} />
                  {item}
                </Text>
              ))
            ) : ''}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  legend: PropTypes.array,
  dataChart: PropTypes.array
};