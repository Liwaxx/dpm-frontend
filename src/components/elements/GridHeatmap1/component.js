import React from 'react';
import HeatMap from 'react-heatmap-grid';
import propTypes from 'prop-types';
import Text from '../Text';

export default class Component extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { classes, data } = this.props;
    let dataArray = [];
    const xLabels = [
      'Mon', 'Tue', 'Wed', 'Thu',
      'Fri', 'Sat', 'Sun'
    ];
    const days = [
      'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
    ];
    const time = [
      '24,00', '23,00', '22,00', '21,00', '20,00',
      '19,00', '18,00', '17,00', '16,00', '15,00',
      '14,00', '13,00', '12,00', '11,00', '10,00',
      '09,00', '08,00', '07,00', '06,00', '05,00',
      '04,00', '03,00', '02,00', '01,00', '00,00',
    ];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
      'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'
    ];
    if (data) {
      data.status.map((item) => {
        for (let i = 0; i < time.length; i++) {
          let value = [];
          for (let z = 0; z < months.length; z++) {
            if (time[i] == item.time && days[z] == item.day && item.status == 'push') {
              value.push(2);
            } else if (time[i] == item.time && days[z] == item.day && item.status == 'progress') {
              value.push(1);
            } else {
              value.push(0);
            }
          }
          dataArray.push(value);
        }
      });
     


      return (
        <div className={classes.GridHeatmap1}>
          <HeatMap
            className={classes.heatmap1}
            xLabels={xLabels}
            yLabels={time}
            xLabelWidth={40}
            height={15}
            xLabelsLocation={'bottom'}
            data={dataArray}
            squares
            background={'blue'}
          />
  
        </div>
      );
    } else {
      return(
        <Text type="display">Loading...</Text>
      );
    }
  }
}

Component.propTypes = {
  classes: propTypes.object,
  data: propTypes.object,
};