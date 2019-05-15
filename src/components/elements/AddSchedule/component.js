import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  render() {
    const { classes, buttonClassName, handleSubmit, isLoading,
      invalid, submitting, message } = this.props;
    const disabled = invalid || submitting || isLoading;
    const metaJudul = message ? { error: message } : {};
    const metaDeskripsi = message ? { error: message } : {};
    const metaLokasi = message ? { error: message } : {};
    const metaMember = message ? { error: message } : {};
    const metaStart = message ? { error: message } : {};
    const metaFinish = message ? { error: message } : {};
    return (
      <Card className={classes.card}>
        <form onSubmit={handleSubmit} >
          <div>
            <Field
              component={TextField}
              meta={metaStart}
              name="timeStart"
              placeholder="Start"
              className={classes.input}
            />
            <Field
              component={TextField}
              meta={metaFinish}
              name="timeFinish"
              placeholder="Finish"
              className={classes.input}
            />
            <Field
              component={TextField}
              meta={metaJudul}
              name="Judul"
              placeholder="Judul"
              className={classes.input}
            />
            <Field
              component={TextField}
              meta={metaDeskripsi}
              name="Description"
              placeholder="Deskripsi"
              className={classes.input}
            />
            <Field
              component={TextField}
              meta={metaLokasi}
              name="Location"
              placeholder="Lokasi"
              className={classes.input}
              InputProps={{
                endAdornment: (
                  <InputAdornment variant="filled" position="end">
                    <img src={IMAGES.LOCATION} />
                  </InputAdornment>
                ),
              }}
            />
            <Field
              component={TextField}
              meta={metaMember}
              name="createBy"
              placeholder="@Member"
              className={classes.input}
            />
          </div>
          <Button type="submit" className={buttonClassName} disabled={disabled} >SAVE </Button>
        </form>
      </Card>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  buttonClassName: PropTypes.string,
  isLoading: PropTypes.bool,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  message: PropTypes.string,
  handleClosed: PropTypes.func,
};