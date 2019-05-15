import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Date from '../Date';
import Select from '../Select';
import { IMAGES } from '../../../configs';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
// import Search from '../Search';


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A search was submitted: ' + this.state.value);
    event.preventDefault();
  }

  _renderSearch() {
    const { classes } = this.props;
    const { value } = this.state;
    const endAdornment = (
      <InputAdornment position="start">
        <IconButton className={classes.submit} onSubmit={this.handleSubmit}>
          <img src={IMAGES.SEARCH} className={classes.searchbutton} />
        </IconButton>
      </InputAdornment>
    );
    const InputProps = {
      disableUnderline: true,
      endAdornment
    };

    return (
      <TextField
        className={classes.bar}
        type="text"
        value={value}
        onChange={this.handleChange}
        placeholder="Cari"
        InputProps={InputProps}
      />
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.paper}>
          <Toolbar className={classes.toolbar} disableGutters>
            <Date />
            <div className={classes.grow}>
              <div className={classes.select}>
                <Select />
              </div>
              {this._renderSearch()}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
};
