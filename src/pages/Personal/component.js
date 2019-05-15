import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import AddSchedule from '../../components/elements/AddSchedule';
import Calendar from '../../components/elements/Calendar';
import Card from '../../components/elements/Card';
import Detail from '../../components/elements/Detail';
import DropDown from '../../components/elements/Dropdown';
import GridHeatmap1 from '../../components/elements/GridHeatmap1';
import GridHeatmap2 from '../../components/elements/GridHeatmap2';
import Linechart from '../../components/elements/LineChart';
import ListSchedule from '../../components/elements/ListSchedule';
import ModalTahun from '../../components/elements/ModalPertahun';
import ProductCard from '../../components/elements/ProductCard';
import PersonalScore from '../../components/elements/PersonalScore';
import PieChart from '../../components/elements/PieChart';
import SimpleModal from '../../components/elements/Modal';
import Text from '../../components/elements/Text';
import { changeDay, changeMonth } from '../../utils/dateFormat';

const dummySquadBacklog = {
  sprint5: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 13 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 4 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 2 }
  ],
  sprint4: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 6 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 0 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 6 }
  ],
  sprint3: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 12 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 0 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 8 }
  ],
  sprint2: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 6 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 0 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 7 }
  ],
  sprint1: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 0 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 0 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 13 }
  ],
};

const dummyPersonalBacklog = {
  sprint5: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 0 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 1 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 0 }
  ],
  sprint4: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 0 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 0 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 3 }
  ],
  sprint3: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 3 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 0 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 6 }
  ],
  sprint2: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 0 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 0 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 6 }
  ],
  sprint1: [
    { status: 'belum dikerjakan', color: '#FA8E8E', total: 0 },
    { status: 'sedang dikerjakan', color: '#A8CEEB', total: 0 },
    { status: 'sudah dikerjakan', color: '#A6EDE9', total: 7 }
  ],
};

const grafikProductReport = [
  { month: 'October', download: 0, activeUser: 0 },
  { month: 'December', download: 0, activeUser: 0 },
  { month: 'Januari', download: 0, activeUser: 0 }
];

const grafikTimelineSkill = [
  { week: 'week 1', skill: '0', project: '0' },
  { week: 'week 2', skill: '0', project: '0' },
  { week: 'week 3', skill: '0', project: '0' },
  { week: 'week 4', skill: '0', project: '0' },
];

export default class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      date: new Date(),
      shown: true,
      productReportDate: '2018',
      timelineSkillData: {
        user: 'M001',
        date: 'Januari%202017',
      },
      workIntensityShown: 'week',
      sprintName: 'sprint5',
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    const { timelineSkillData, productReportDate } = this.state;

    actions.fetchDataNotif();
    actions.fetchDataProduct();
    actions.fetchDataProductReport(productReportDate);
    actions.fetchDataTimelinSkill(timelineSkillData);
    actions.fetchListSchedule();
    actions.fetchPersonalScore('M001');
    actions.fetchPersonalBacklog();
    actions.fetchSquadBacklog();
    actions.fetchWorkIntensity();
    actions.getDetailP();
    actions.getDetailS();
  }

  _handleSubmit(values = {}) {
    const { actions } = this.props;
    const payload = {
      judul: values.Judul,
      description: values.Description,
      location: values.Location,
      createBy: values.createBy,
      startTime: values.timeStart,
      finishTime: values.timeFinish,
      modifiedBy: 'admin',
      createdBy: 'admin',
    };
    actions.fetchSubmit(payload);
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  onChange(date) {
    this.setState({
      date,
      anchorEl: event.currentTarget,
      shown: !this.state.shown,
    });
  }

  handleChangeSprint = (event) => {
    this.setState({
      sprintName: event,
    });
  }

  _renderSquadBacklog() {
    const { dataSB, classes } = this.props;
    const { sprintName } = this.state;

    let dataSquadBacklog;
    let dataSquad = [];
    let legendSB = [];
    dataSquad.push(['status', 'total']);

    if(sprintName == 'sprint1') {
      dataSquadBacklog = dummySquadBacklog.sprint1;
    }
    if(sprintName == 'sprint2') {
      dataSquadBacklog = dummySquadBacklog.sprint2;
    }
    if(sprintName == 'sprint3') {
      dataSquadBacklog = dummySquadBacklog.sprint3;
    }
    if(sprintName == 'sprint4') {
      dataSquadBacklog = dummySquadBacklog.sprint4;
    }
    if(sprintName == 'sprint5') {
      dataSquadBacklog = dummySquadBacklog.sprint5;
    }

    if (dataSB) {
      dataSB.totalBacklog ? (dataSquadBacklog.map((item) => {
        dataSquad.push([item.status, parseInt(item.total)]);
        legendSB.push(item.status);
      })) : '';
    }

    return (
      <Card className={classes.infoSquadCard}>
        <CardContent className={classes.title}>
          <Text type="display">
            Squad Backlog
          </Text>
        </CardContent>
        <CardContent className={classes.content}>
          <PieChart dataChart={dataSquad} legend={legendSB} />
          {this._renderDetailS()}
        </CardContent>
      </Card>
    );
  }

  _renderPersonalBacklog() {
    const { dataPB, classes } = this.props;
    const { sprintName } = this.state;

    let dataPersonalBacklog;
    let dataPersonal = [];
    let legendPB = [];
    dataPersonal.push(['status', 'total']);

    if(sprintName == 'sprint1') {
      dataPersonalBacklog = dummyPersonalBacklog.sprint1;
    }
    if(sprintName == 'sprint2') {
      dataPersonalBacklog = dummyPersonalBacklog.sprint2;
    }
    if(sprintName == 'sprint3') {
      dataPersonalBacklog = dummyPersonalBacklog.sprint3;
    }
    if(sprintName == 'sprint4') {
      dataPersonalBacklog = dummyPersonalBacklog.sprint4;
    }
    if(sprintName == 'sprint5') {
      dataPersonalBacklog = dummyPersonalBacklog.sprint5;
    }

    if (dataPB) {
      dataPB.totalBacklog ? (dataPersonalBacklog.map((item) => {
        dataPersonal.push([item.status, parseInt(item.total)]);
        legendPB.push(item.status);
      })) : '';
    }

    return (
      <Card className={classes.infoPersonalCard}>
        <CardContent className={classes.title}>
          <Text type="display">
            Personal Backlog
          </Text>
        </CardContent>
        <CardContent className={classes.content}>
          <PieChart 
            className={classes.chartInfoBackLog} 
            dataChart={dataPersonal} legend={legendPB} />
          {this._renderDetailP()}
        </CardContent>
      </Card>
    );
  }

  _renderCalendar() {
    const { classes, isLoading, listSchedule, message } = this.props;
    const hidden = {
      display: this.state.shown ? 'none' : 'block'
    };
    const shown = {
      display: this.state.shown ? 'block' : 'none'
    };

    return (
      <div>
        <Card className={classes.cardCalendar}>
          <CardContent className={classes.title}>
            <Text type="display">
              Calendar
            </Text>
          </CardContent>
          <br />
          <br />
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            className={classes.calendar}
          />
        </Card>
        <Paper className={classes.compCalender}
          style={hidden}>
          <Card className={classes.head}>
            <Text className={classes.textCalendar} >
              {changeDay(this.state.date)},&nbsp;
              {this.state.date.getDate()}&nbsp;
              {changeMonth(this.state.date)}&nbsp;
              {this.state.date.getFullYear()}&nbsp;
            </Text>
          </Card>
          <AddSchedule buttonClassName={classes.button} onSubmit={this._handleSubmit}
            isLoading={isLoading} message={message} />
        </Paper>
        <Paper className={classes.compCalender}
          style={shown}>
          <ListSchedule data={listSchedule} />
        </Paper>
      </div>
    );
  }

  _renderDetailP() {
    const { dataDetailP } = this.props;

    return (
      <div>
        <Detail detail={dataDetailP} />
      </div>
    );
  }

  _renderDetailS() {
    const { dataDetailS } = this.props;

    return (
      <div>
        <Detail detail={dataDetailS} />
      </div>
    );
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  _renderTimelineSkill() {
    const { dataTimelineSkill, classes } = this.props;
    const legend = ['Skill', 'Project'];
    let data = [['week', 'skill', 'project']];

    if( dataTimelineSkill && dataTimelineSkill.detail ) {
      grafikTimelineSkill.map(function(item) {
        data.push([item.week, parseInt(item.skill), parseInt(item.project)]);
      });
    }

    return (
      <Card className={classes.timelineSkillCard}>
        <div className={classes.title}>
          <Text className={classes.text} variant="headline">
            Timeline Skill
          </Text>
        </div>
        { dataTimelineSkill && dataTimelineSkill.detail ? (<Linechart data={data} legend={legend} />) : 'Loading...'}
      </Card>
    );
  }

  _renderProductReport() {
    const { dataProductReport, classes } = this.props;
    const legend = ['Download', 'User Aktif'];
    let data = [['month', 'download', 'activeUser']];

    if( dataProductReport && dataProductReport.detail ) {
      grafikProductReport.map(function(item) {
        data.push([item.month, parseInt(item.download), parseInt(item.activeUser)]);
      });
    }

    return (
      <Card className={classes.timelineSkillCard}>
        <div className={classes.title}>
          <Text className={classes.text}>
            Product Report
          </Text>
        </div>
        { dataProductReport && dataProductReport.detail ? (<Linechart data={data} legend={legend} />) : (<Text type="display">Loading ...</Text>)}
      </Card>
    );
  }

  handleChangeWorkIntensityDropdown = (e) => {
    this.setState({
      workIntensityShown: e.value
    });
  }
  
  _renderWorkIntensity() {
    const { dataWorkIntensity, classes } = this.props;
    const shown = {
      display: this.state.workIntensityShown == 'week' ? 'block' : 'none'
    };
    const hidden = {
      display: this.state.workIntensityShown == 'week' ? 'none' : 'block'
    };

    return (
      <Card className={classes.card}>
        <div className={classes.title}>
          <Text className={classes.text} variant="headline">
            Work Intensity
          </Text>
        </div>
        <div className={classes.dropDown}>
          <DropDown onChange={this.handleChangeWorkIntensityDropdown} />
        </div>
        <div className={classes.modal1} style={shown}>
          <SimpleModal />
          <GridHeatmap1
            data={dataWorkIntensity.data}
          />
        </div>
        <div className={classes.modal2} style={hidden}>
          <ModalTahun />
          <GridHeatmap2
            data={dataWorkIntensity.data}
          />
        </div>
      </Card>
    );
  }

  render() {
    const { classes, dataProduct, notifications, dataScore } = this.props;

    return (
      <section className={classes.container}>
        <div className={classes.personalSection1}>
          <div className={classes.productCard}>
            <ProductCard
              data={dataProduct}
              notif={notifications}
              onChangeSprint={this.handleChangeSprint}
            />
          </div>
          <div className={classes.backlogInfo}>
            <div className={classes.squadBacklog}>
              {this._renderSquadBacklog()}
            </div>
            <div className={classes.personalBacklog}>
              {this._renderPersonalBacklog()}
            </div>
          </div>
          <div className={classes.backlogInfo}>
            {this._renderProductReport()}
          </div>
        </div>
        <div className={classes.personalSection2}>
          <div className={classes.workIntensity}>
            {this._renderWorkIntensity()}
          </div>
          <div className={classes.backlogInfo}>
            {this._renderTimelineSkill()}
          </div>
        </div>
        <div className={classes.personalSection3}>
          {this._renderCalendar()}
        </div>
        <div className={classes.personalSection4}>
          <PersonalScore data={dataScore} />
        </div>
      </section>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
  listSchedule: PropTypes.object,
  message: PropTypes.string,
  data: PropTypes.object,
  dataProduct: PropTypes.object,
  notifications: PropTypes.object,
  dataScore: PropTypes.object,
  dataSB: PropTypes.object,
  dataPB: PropTypes.object,
  dataWorkIntensity: PropTypes.object,
  dataDetailP: PropTypes.object,
  dataDetailS: PropTypes.object,
  dataProductReport: PropTypes.object,
  dataTimelineSkill: PropTypes.object,
};