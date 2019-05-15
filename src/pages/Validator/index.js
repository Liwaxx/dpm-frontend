import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Component from './component';
import * as actions from './action';
import styles from './styles';

function mapStateToProps(state) {
  const { isLoading, data } = state.validator;
  return {
    isLoading,
    data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const StyledHome = withStyles(styles)(Component);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledHome);