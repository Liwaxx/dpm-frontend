import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Component from './component';
import * as actions from './action';
import styles from './styles';

function mapStateToProps(state) {
  const { 
    isLoading, 
    isLoadingProduct, 
    dataProduct, 
    dataAllProject, 
    dataSquadPerformance, 
  } = state.talent;
  
  return {
    isLoading,
    dataProduct,
    isLoadingProduct,
    dataAllProject,
    dataSquadPerformance,
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