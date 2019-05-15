import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../elements/Text';

class Component extends React.Component {
  _renderContentLeft() {
    const { classes } = this.props;

    return (
      <div className={classes.contentItem}>
        <Text className={classes.contentName}>Vacant</Text>
        <div className={classes.lineContainer}>
          <Text className={classes.lineText}>100</Text>
          {this._renderLineVacant()}
        </div>
      </div>
    );
  }

  _renderContentRight() {
    const { classes } = this.props;

    return (
      <div className={classes.contentItem}>
        <Text className={classes.contentName}>Floating</Text>
        <div className={classes.lineContainer}>
          {this._renderLineFloating()}
          <Text className={classes.lineText}>100</Text>
        </div>
      </div>
    );
  }

  _renderLineFloating() {
    const { classes, data } = this.props;
    const leftStyle = { flex: `${data.floating} 1 auto` };
    const rightStyle = { flex: `${100 - data.floating} 1 auto` };

    return (
      <div className={classes.line}>
        <div className={classes.lineGreen} style={leftStyle} />
        <div className={classes.lineGrey} style={rightStyle} />
      </div>
    );
  }

  _renderLineVacant() {
    const { classes, data } = this.props;
    const leftStyle = { flex: `${100 - data.vacant} 1 auto` };
    const rightStyle = { flex: `${data.vacant} 1 auto` };
    
    return (
      <div className={classes.line}>
        <div className={classes.lineGrey} style={leftStyle} />
        <div className={classes.lineRed} style={rightStyle} />
      </div>
    );
  }

  render() {
    const { className, classes, data } = this.props;
    const customClass = className ? `${classes.root} ${className}` : classes.root;

    return (
      <div className={customClass}>
        <Text className={classes.title}>{data.name}</Text>
        <div className={classes.content}>
          {this._renderContentLeft()}
          <Text className={classes.lineText}>0</Text>
          {this._renderContentRight()}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  data: PropTypes.object,
};

export default Component;
