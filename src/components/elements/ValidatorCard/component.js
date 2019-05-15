import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Modal from '@material-ui/core/Modal';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import PropTypes from 'prop-types';
import Text from '../Text';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      open: false,
      status: 'waiting',
    };

    moment.locale('id');
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  _renderModal() {
    const { classes, data } = this.props;
    const {
      accessor,
      description = [],
      document = [],
      nama_project,
      projectOwner,
      unit,
    } = data || {};
    const statusOptions = [
      { label: 'Waiting for Approval', value: 'waiting' },
      { label: 'Rejected', value: 'rejected' },
      { label: 'Approved', value: 'approved' },
    ];

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}
      >
        <div className={classes.modalContainer}>
          <div className={classes.left}>
            <Text className={classes.modalTitle}>{nama_project}</Text>
            {this._renderModalLeftDescription(description)}
          </div>
          <div className={classes.right}>
            <ButtonBase
              disableRipple
              className={classes.exit}
              onClick={this.handleClose}
            >
              <img src={IMAGES.CLOSE} className={classes.close} />
            </ButtonBase>
            {this._renderModalRightText('P.O.', projectOwner)}
            {this._renderModalRightText('Unit', unit)}
            {this._renderModalRightDropdown('Status', statusOptions)}
            {this._renderModalRightRadio('Assesor', accessor, accessor)}
            {this._renderModalRightDocument('Document', document)}
            {this._renderModalRightDate('Attempt', document)}
          </div>
        </div>
      </Modal>
    );
  }

  _renderModalLeftDescription(data) {
    return (
      data.map((item, idx) => <Text key={idx}>{`- ${item.message}`}</Text>)
    );
  }

  _renderModalRightDate(name, options) {
    const { classes } = this.props;

    return (
      <div className={classes.modalRightContent}>
        <Text className={classes.modalRightName}>{name}</Text>
        {options.map((item, idx) => (
          <Text key={idx}>{`${idx + 1}. ${moment(item.attempt).format('DD-MM-YYYY')}`}</Text>
        ))}
      </div>
    );
  }

  _renderModalRightDocument(name, doc) {
    const { classes } = this.props;

    return (
      <div className={classes.modalRightContent}>
        <Text className={classes.modalRightName}>{name}</Text>
        <div className={classes.doc}>
          {doc.map((item, idx) => (
            <React.Fragment key={idx}>
              <ButtonBase href={item.url} target="blank">
                <div className={classes.docRed} />
              </ButtonBase>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  _renderModalRightDropdown(name, options) {
    const { classes } = this.props;
    const { status } = this.state;
    const InputProps = {
      disableUnderline: true,
    };
    const SelectProps = {
      className: classes.select,
      native: true,
    };

    return (
      <div className={classes.modalRightContent}>
        <Text className={classes.modalRightName}>{name}</Text>
        <TextField
          select
          className={classes.dropdown}
          InputProps={InputProps}
          onChange={this.handleChange('status')}
          SelectProps={SelectProps}
          value={status}
        >
          {options.map(item => (
            <option
              className={classes.menu}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </TextField>
      </div>
    );
  }

  _renderModalRightRadio(name, value, label) {
    const { classes } = this.props;
    const control = (<Radio
      checked={true}
      color="default"
      className={classes.radioButton}
    />);

    return (
      <div className={classes.modalRightContent}>
        <Text className={classes.modalRightName}>{name}</Text>
        <FormControlLabel
          value={value}
          control={control}
          label={label}
        />
      </div>
    );
  }

  _renderModalRightText(name, value) {
    const { classes } = this.props;

    return (
      <div className={classes.modalRightContent}>
        <Text className={classes.modalRightName}>{name}</Text>
        <Text>{value}</Text>
      </div>
    );
  }

  render() {
    const { classes, data } = this.props;
    const {
      description = [{}],
      modified_at,
      nama_project,
      projectOwner,
    } = data || {};

    return (
      <React.Fragment>
        {this._renderModal()}
        <div className={classes.main}>
          <ButtonBase onClick={this.handleOpen}>
            <div className={classes.card}>
              <div className={classes.heading}>
                <Text className={classes.title}>{nama_project}</Text>
                <Text className={classes.subTitle}>{projectOwner}</Text>
              </div>
              <Text className={classes.content}>{description[0].message || ''}</Text>
              <Text className={classes.subTitle}>{moment(modified_at).format('HH:mm')}</Text>
            </div>
          </ButtonBase>
        </div>
      </React.Fragment>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
};