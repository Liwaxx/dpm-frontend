import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Personal from './component';
import * as actions from './action';
import styles from './styles';

function mapStateToProps(state) {
  const {
    isLoading, 
    dataProduct, 
    notifications, 
    dataScore, 
    dataSB, 
    dataPB,
    dataDetailP, 
    dataDetailS,
    dataProductReport,
    dataTimelineSkill,
    dataWorkIntensity,
    addSchedule,
    listSchedule,
    messege,
  } = state.personal;
  
  return {
    isLoading,
    dataProduct,
    notifications,
    dataScore,
    dataSB,
    dataPB,
    messege,
    addSchedule,
    listSchedule,
    dataDetailP,
    dataDetailS,
    dataProductReport,
    dataTimelineSkill,
    dataWorkIntensity,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const StyledHome = withStyles(styles)(Personal);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledHome);