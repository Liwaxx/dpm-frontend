import React from 'react';
import { Field } from 'redux-form';
import TextField from '../../../components/elements/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default class Component extends React.Component {

  render() {
    const { handleSubmit, isLoading, invalid, submitting } = this.props;
    const disabled = invalid || submitting || isLoading;

    return (
      <form onSubmit={handleSubmit}>
        <Field name="field1" component={TextField} />
        <Field name="field2" component={TextField} />
        <Button type="submit" disabled={disabled}>Submit</Button>
      </form>
    );
  }
}

Component.propTypes = {
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};