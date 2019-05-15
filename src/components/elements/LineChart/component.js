import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Chart } from 'react-google-charts';
import Text from '../Text';

export default class Component extends React.Component {
  render() {
    const { classes, data, legend } = this.props;
    const options = {
      curveType: 'function',
      legend: 'none',
      colors: ['#45BFB7', '#157CA4', '#D17C16', '#7866b2', '#3ba064']
    };

    return (
      <Grid container>
        <Grid item xs={2}>
          <div className={classes.span}>
            {
              legend ? (
                legend.map((item, index) => (
                  <Text key={index} className={classes.legendText}>
                    <span className={classes[`squad${index}`]} />
                    {item}
                    <br />
                  </Text>
                ))
              ) : ''
            }
          </div>
        </Grid>
        <Grid item xs={10}>
          <Chart
            className={classes.chart}
            height="150px"
            width="107%"
            chartType="LineChart"
            data={data}
            options={options}
          />
        </Grid>
      </Grid>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
  legend: PropTypes.array,
};
