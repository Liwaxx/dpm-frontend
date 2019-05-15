import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Card from '../../components/elements/Card';
import Linechart from '../../components/elements/LineChart';
import TalentQueueTable from '../../components/elements/TalentQueueTable';
import TalentScoreCard from '../../components/elements/TalentScoreCard';
import TalentVacancyCard from '../../components/elements/TalentVacancyCard';
import Text from '../../components/elements/Text';

const scores = [
  {
    name: 'Backend Developer',
    rank: [{ name: 'Alif Septian Nurdianto', previous: 2, point: 5 }, { name: 'Irman Juliansyah', previous: 5, point: 4.8 }, { name: 'Kevin Warsahid', previous: 1, point: 4.6 }]
  },
  {
    name: 'Frontend Web Developer',
    rank: [{ name: 'Emmy Trinawati H', previous: 3, point: 5 }, { name: 'Dama Samudera', previous: 2, point: 4.9 }, { name: 'Rozinul Mahrus', previous: 4, point: 4.7 }]
  },
  {
    name: 'Frontend Mobile Developer',
    rank: [{ name: 'Rizky Ramadhan S', previous: 1, point: 5 }, { name: 'Egi Ari Wibowo', previous: 4, point: 4.7 }, { name: 'Eko Meidianto', previous: 2, point: 4.6 }]
  },
  {
    name: 'QA Engineer',
    rank: [{ name: 'Aldila Karina', previous: 2, point: 5 }, { name: 'Dini Indriyani P', previous: 1, point: 4.7 }, { name: 'Andria Sufy', previous: 5, point: 4.5 }]
  },
  {
    name: 'Document Engineer',
    rank: [{ name: 'Elnoor Fajrah', previous: 4, point: 5 }, { name: 'Riska Desrianti', previous: 2, point: 4.9 }, { name: 'Edwina Anky', previous: 1, point: 4.5 }]
  },
  {
    name: 'Code Reviewer',
    rank: [{ name: 'Oka Uliandana', previous: 2, point: 5 }, { name: 'Alif Septian Nurdianto', previous: 1, point: 4.9 }, { name: 'Muhammad Ilham R', previous: 3, point: 4.9 }]
  },
];

const vacancies = [
  { name: 'UX Designer Lead', floating: 70, vacant: 30 },
  { name: 'UX Designer Senior', floating: 80, vacant: 20 },
  { name: 'QA Junior', floating: 30, vacant: 70 },
  { name: 'Front End Medium', floating: 10, vacant: 90 },
  { name: 'Partnership Lead', floating: 0, vacant: 100 },
];

const dataOnGoing = [
  { name: 'Logistik Tani', version: '1.0' },
  { name: 'QRen 2.0', version: '2.4' },
  { name: 'Bulir', version: '2.2' },
  { name: 'Dialer SLI 01017', version: '1.3' },
];

const grafikQueue = [
  { month: 'October', onGoingProject: 0, queueProject: 0 },
  { month: 'December', onGoingProject: 0, queueProject: 0 },
  { month: 'Januari', onGoingProject: 0, queueProject: 0 }
];

export default class Component extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.fetchProduct();
    actions.fetchQueueAllProject('2018');
    actions.fetchDataSquadPerformance({ user: 'P001', year: '2018' });
  }

  _renderSectionHeader(title) {
    const { classes } = this.props;

    return (
      <div className={classes.sectionHeader}>
        <Text type="display">{title}</Text>
        <div className={classes.sectionActions} />
      </div>
    );
  }

  _renderSectionOngoing() {
    const { classes, isLoadingProduct } = this.props;

    return (
      <Card className={classes.ongoing}>
        {this._renderSectionHeader('On Going')}
        <div className={classes.vacanciesContent}>
          {isLoadingProduct ? <CircularProgress /> : <TalentQueueTable data={dataOnGoing} />}
        </div>
      </Card>
    );
  }

  _renderSectionQueue() {
    const { classes, isLoadingProduct } = this.props;

    return (
      <Card className={classes.queue}>
        {this._renderSectionHeader('Queue')}
        <div className={classes.vacanciesContent}>
          {isLoadingProduct ? <CircularProgress /> : <TalentQueueTable data={[]} />}
        </div>
      </Card>
    );
  }

  _renderSectionAllQueue() {
    const { classes = [], } = this.props;
    const legend = ['Download', 'User Aktif'];
    let data = [['month', 'onGoingProject', 'queueProject']];

    let dataAllProject = grafikQueue;

    if( dataAllProject && dataAllProject.length >= 0 ) {
      dataAllProject.map(function(item) {
        data.push([item.month, item.onGoingProject, item.queueProject]);
      });
    }

    return (
      <Card className={classes.allQueue}>
        {this._renderSectionHeader('Queue All Project')}
        <div className={classes.vacanciesContent}>
          { dataAllProject.length >= 1 ? 
            <Linechart data={data} legend={legend} /> : 
            <CircularProgress />}
        </div>
      </Card>
    );
  }

  _renderSectionScores() {
    const { classes } = this.props;

    return (
      <Card className={classes.scores}>
        {this._renderSectionHeader('Talent Performance  Oktober 2018')}
        <div className={classes.scoresContent}>
          {scores.map((item, idx) => (
            <TalentScoreCard className={classes.score} data={item} key={idx} />
          ))}
        </div>
      </Card>
    );
  }

  _renderSectionSquad() {
    const { classes, dataSquadPerformance = [], } = this.props;
    let legend = ['Squad Bulir'];
    let data = [['name', 'point']];

    if( dataSquadPerformance && dataSquadPerformance.length >= 1 ) {
      dataSquadPerformance.map(function(item) {
        data.push([item.name, item.point]);
      });
    }

    return (
      <Card className={classes.squad}>
        {this._renderSectionHeader('Squad Performance')}
        <div className={classes.vacanciesContent}>
          {dataSquadPerformance.length >= 1 ? 
            <Linechart data={data} legend={legend} /> : 
            <CircularProgress />}
        </div>
      </Card>
    );
  }

  _renderSectionVacancies() {
    const { classes } = this.props;

    return (
      <Card className={classes.vacancies}>
        {this._renderSectionHeader('Talent')}
        <div className={classes.vacanciesContent}>
          {vacancies.map((item, idx) => (
            <TalentVacancyCard className={classes.vacancy} data={item} key={idx} />
          ))}
        </div>
      </Card>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.rowTop}>
          {this._renderSectionQueue()}
          {this._renderSectionOngoing()}
          {this._renderSectionAllQueue()}
          {this._renderSectionSquad()}
        </div>
        <div className={classes.rowBottom}>
          {this._renderSectionScores()}
          {this._renderSectionVacancies()}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  actions: PropTypes.object,
  classes: PropTypes.object,
  dataAllProject: PropTypes.array,
  dataSquadPerformance: PropTypes.array,
  dataProduct: PropTypes.array,
  isLoadingProduct: PropTypes.bool,
  isLoading: PropTypes.bool,
};