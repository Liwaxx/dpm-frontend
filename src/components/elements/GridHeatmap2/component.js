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
    let dataArray2 = [];
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
    const year = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'desember'
    ];
    if (data) {
      const datas = data;
      data.status.map((item) => {
        for (let i = 0; i < time.length; i++) {
          let value2 = [];
          for (let z = 0; z < months.length; z++) {
            if (time[i] == item.time && year[z] == datas.month && item.status == 'push') {
              value2.push(2);
            } else if (time[i] == item.time && year[z] == datas.month && item.status == 'progress') {
              value2.push(1);
            } else {
              value2.push(0);
            }
          }
          dataArray2.push(value2);
        }
      });
      return (
        <div className={classes.GridHeatmap2}>
          <HeatMap
            className={classes.heatmap2}
            xLabels={months}
            yLabels={time}
            xLabelWidth={40}
            height={15}
            xLabelsLocation={'bottom'}
            data={dataArray2}
            squares
            background={'blue'}
          />

        </div>
      );
    } else {
      return (
        <Text type="display">Loading...</Text>
      );
    }
  }
}

Component.propTypes = {
  classes: propTypes.object,
  data: propTypes.object,
};