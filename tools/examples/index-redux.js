import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import Component from './component';
import styles from './styles';

function mapStateToProps(state) {
  const { data } = state.newComponent;
  
  return {
    data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const Styled = withStyles(styles)(Component);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styled);
