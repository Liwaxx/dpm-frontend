import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    };
  }

  filterOptions = [
    { label: 'Most Viewed', value: 'most' },
    { label: 'Recent Update', value: 'recent' },
  ];

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  _renderSelectField(options) {
    const { classes } = this.props;

    return (
      options.map(item => (
        <option
          className={classes.menu}
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))
    );
  }

  render() {
    const { classes } = this.props;
    const { filter } = this.state;
    const InputProps = {
      disableUnderline: true,
    };
    const SelectProps = {
      className: classes.select,
      native: true,
    };

    const value = filter == '' ? '' : filter;

    return (
      <TextField
        select
        className={classes.dropdown}
        InputProps={InputProps}
        onChange={this.handleChange('filter')}
        SelectProps={SelectProps}
        value={value}
      >
        <option value="" disabled>Filters</option>
        {this._renderSelectField(this.filterOptions)}
      </TextField>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object
};

