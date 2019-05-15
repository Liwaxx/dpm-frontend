import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../elements/Text';

class Component extends React.Component {
  _renderTableRow(item, key) {
    const { classes } = this.props;
    
    return (
      <tr key={key}>
        <td><Text className={classes.cellText}>{key + 1}. {item.name}</Text></td>
        <td><Text className={classes.cellText}>{item.version}</Text></td>
      </tr>
    );
  }

  render() {
    const { className, classes, data = [], } = this.props;
    const customClass = className ? `${classes.root} ${className}` : classes.root;

    return (
      <table className={customClass}>
        <thead>
          <tr>
            <th><Text className={classes.headerText}>List</Text></th>
            <th><Text className={classes.headerText}>Ver</Text></th>
          </tr>
        </thead>
        <tbody>
          {data.map(this._renderTableRow.bind(this))}
        </tbody>
      </table>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  data: PropTypes.array,
};

export default Component;
