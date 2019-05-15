import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class Component extends React.Component {
  render() {
    const options = [
      { value: 'week', label: 'Bulan/Minggu' },
      { value: 'month', label: 'Bulan/Tahun' }
    ];
    const defaultOption = options[0];
    
    return (
      <Dropdown
        options={options}
        value={defaultOption}
        name="dropdown" 
        onChange={this.props.onChange}
      />
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.func,
};