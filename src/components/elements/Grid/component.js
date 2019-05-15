import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Component extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <Grid container justify="center" direction="column">
        <Grid >
          <Paper className={classes.paper}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object
};

