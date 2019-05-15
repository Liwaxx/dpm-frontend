import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../Dialog';
import Minibox from '../MiniBox';
import PaperGrid from '../PaperGrid';
import Text from '../Text';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total1: '',
      status1: '',
      task1: [],
      open: true,
    };
  }

  handleClickOpen = scroll => () => {
    this.setState({ 'open': true, scroll });
  };

  handleClose = () => {
    this.setState({ 'open': false });
  };

  render() {
    const { classes, detail } = this.props;
    const backlog_jumlah = '1000';

    return (
      <Dialog>
        <section className={classes.container}>
          <div>
            <div className={classes.search}>
              <Text className={classes.title_total_backlog}>
                Total Backlog <b>{backlog_jumlah}</b>
              </Text>
              <div className={classes.search2}>
                <input type="text" className={classes.searchEl2} />
                <button className={classes.searchEl}>Search</button>
              </div>
            </div>
            <br />
          </div>

          {
            detail.totalBacklog ? (
              detail.totalBacklog.map((item, index) => (
                <div className={classes.first} key={index}>
                  <Text className={classes.keterangan}>
                    {item.status}
                  </Text>
                  <Text className={classes.keterangan1}>
                    {item.total.toString()}
                  </Text>
                  <br/>
                  <PaperGrid>
                    <div className={classes.pembuka}>
                      {item.description.map((value, index) => {
                        return (<Minibox key={index}
                          classes={classes}
                          title={value.description}
                          description={'CJ-245'} />);
                      })}
                    </div>
                  </PaperGrid>
                </div>
              ))
            ) : ''
          }

          <div className={classes.first}>
            <Text className={classes.keterangan}>{this.state.status4}</Text>
            <Text className={classes.keterangan1}>{this.state.total4}</Text>

            <PaperGrid>
              <div className={classes.pembuka}>
                {this.state.task1.map((value, index) => {
                  return (<Minibox key={index}
                    classes={classes}
                    title={value.status}
                    description={value.total} />);
                })}
              </div>
            </PaperGrid>
          </div>

          <div className={classes.second}>
            <Text className={classes.keterangan}>{this.state.status2}</Text>
            <Text className={classes.keterangan1}>{this.state.total2}</Text>
        
            <PaperGrid>
              <div className={classes.pembuka}>
                {this.state.task1.map((value, index) => {
                  return (<Minibox key={index}
                    classes={classes}
                    title={value.status}
                    description={value.total} />);
                })}
              </div>
            </PaperGrid>
          </div>
        </section>
      </Dialog>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
  detail: PropTypes.object
};