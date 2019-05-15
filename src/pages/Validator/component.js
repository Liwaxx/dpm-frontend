import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import PropTypes from 'prop-types';
import AppBar from '../../components/elements/AppBar';
import Text from '../../components/elements/Text';
import ValidatorCard from '../../components/elements/ValidatorCard';

export default class Component extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.fetchValidator();
    moment.locale('id');
  }

  _renderContent() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this._renderContentWaiting()}
        {this._renderContentRejected()}
        {this._renderContentApproved()}
      </div>
    );
  }

  _renderContentApproved() {
    const { classes, data, isLoading } = this.props;
    let content = <CircularProgress />;
    if (data && !isLoading) content = data ? this._renderValidatorContent(data.approved) : null;

    return (
      <div className={classes.content}>
        <div className={classes.paper}>
          <Text className={classes.text}>Approved</Text>
        </div>
        <div className={classes.contain}>
          {content}
        </div>
      </div>
    );
  }

  _renderContentRejected() {
    const { classes, data, isLoading } = this.props;
    let content = <CircularProgress />;
    if (data && !isLoading) content = data ? this._renderValidatorContent(data.rejected) : null;

    return (
      <div className={classes.content}>
        <div className={classes.paper}>
          <Text className={classes.text}>Rejected</Text>
        </div>
        <div className={classes.contain}>
          {content}
        </div>
      </div>
    );
  }

  _renderContentWaiting() {
    const { classes, data, isLoading } = this.props;
    let content = <CircularProgress />;
    if (data && !isLoading) content = data ? this._renderValidatorContent(data.waiting) : null;

    return (
      <div className={classes.content}>
        <div className={classes.paper}>
          <Text className={classes.text}>Waiting for Approval</Text>
        </div>
        <div className={classes.contain}>
          {content}
        </div>
      </div>
    );
  }

  _renderValidatorCard(date, data) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Text className={classes.headingText}>{date}</Text>
        {data.map((item, idx) => <ValidatorCard data={item} key={idx} />)}
      </React.Fragment>
    );
  }

  _renderValidatorContent(status) {
    const { 
      today = [], 
      yesterday = [], 
      oneWeek = [], 
    } = status;

    return (
      <React.Fragment>
        {today.length == 0 ? null : this._renderValidatorCard('Today', today)}
        {yesterday.length == 0 ? null : this._renderValidatorCard('Yesterday', yesterday)}
        {oneWeek.length == 0 ? null : this._renderValidatorWeekCard(oneWeek)}
      </React.Fragment>
    );
  }

  _renderValidatorWeekCard(data) {
    const { classes } = this.props;
    
    if(data) {
      return (
        data.map((item, idx) => (
          <React.Fragment key={idx}>
            <Text className={classes.headingText}>{moment(item.id).format('DD/MM/YYYY')}</Text>
            {item.data.map((item, idx) => <ValidatorCard data={item} key={idx} />)}
          </React.Fragment>
        ))
      );
    } else {
      return(
        <Text type="display">Loading ...</Text>
      );
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.container}>
        <header>
          <AppBar />
        </header>
        {this._renderContent()}
      </section>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
  data: PropTypes.object,
};