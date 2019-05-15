import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Notification from '@material-ui/icons/Notifications';
import Popover from '@material-ui/core/Popover';
import Dropdown from 'react-dropdown';
import { PopoverHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import Card from '../Card';
import Text from '../Text';

const dataMember = {
  sprint5: [
    { idMember: 'M001', name: 'Adithya Visnu Prasetyo', roleMember: 'Backend Developer' },
    { idMember: 'M002', name: 'Edwina Anky Parande', roleMember: 'QA Engineer' },
    { idMember: 'M003', name: 'faezal rachmad', roleMember: 'Frontend Web Developer' },
    { idMember: 'M004', name: 'Irman Juliansyah', roleMember: 'Backend Developer' },
    { idMember: 'M005', name: 'rian s', roleMember: 'Frontend Web Developer' },
    { idMember: 'M006', name: 'rizky ramadhan subagio', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M007', name: 'Rahmat Ivan Azis', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M008', name: 'Dika Swadani', roleMember: 'Product Owner' },
    { idMember: 'M009', name: 'Febbie Ramadhani', roleMember: 'Frontend Web Developer' },
    { idMember: 'M010', name: 'ElnoorFajrah', roleMember: 'Doc Engineer' },
    { idMember: 'M011', name: 'Bentar Septian', roleMember: 'Scrum Master' },
    { idMember: 'M013', name: 'Aris Fathur Rahman', roleMember: 'Backend Developer' },
  ],
  sprint4: [
    { idMember: 'M001', name: 'Adithya Visnu Prasetyo', roleMember: 'Backend Developer' },
    { idMember: 'M002', name: 'Edwina Anky Parande', roleMember: 'QA Engineer' },
    { idMember: 'M003', name: 'faezal rachmad', roleMember: 'Frontend Web Developer' },
    { idMember: 'M004', name: 'Irman Juliansyah', roleMember: 'Backend Developer' },
    { idMember: 'M005', name: 'rian s', roleMember: 'Frontend Web Developer' },
    { idMember: 'M006', name: 'rizky ramadhan subagio', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M007', name: 'Rahmat Ivan Azis', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M008', name: 'Dika Swadani', roleMember: 'Product Owner' },
    { idMember: 'M009', name: 'Febbie Ramadhani', roleMember: 'Frontend Web Developer' },
    { idMember: 'M010', name: 'ElnoorFajrah', roleMember: 'Doc Engineer' },
    { idMember: 'M011', name: 'Bentar Septian', roleMember: 'Scrum Master' },
    { idMember: 'M013', name: 'Aris Fathur Rahman', roleMember: 'Backend Developer' },
  ],
  sprint3: [
    { idMember: 'M001', name: 'Adithya Visnu Prasetyo', roleMember: 'Backend Developer' },
    { idMember: 'M002', name: 'Edwina Anky Parande', roleMember: 'QA Engineer' },
    { idMember: 'M003', name: 'faezal rachmad', roleMember: 'Frontend Web Developer' },
    { idMember: 'M004', name: 'Irman Juliansyah', roleMember: 'Backend Developer' },
    { idMember: 'M005', name: 'rian s', roleMember: 'Frontend Web Developer' },
    { idMember: 'M006', name: 'rizky ramadhan subagio', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M007', name: 'Rahmat Ivan Azis', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M008', name: 'Dika Swadani', roleMember: 'Product Owner' },
    { idMember: 'M009', name: 'Febbie Ramadhani', roleMember: 'Frontend Web Developer' },
    { idMember: 'M010', name: 'ElnoorFajrah', roleMember: 'Doc Engineer' },
    { idMember: 'M011', name: 'Bentar Septian', roleMember: 'Scrum Master' },
    { idMember: 'M012', name: 'Oka Uliandana', roleMember: 'Frontend Web Developer' },
    { idMember: 'M013', name: 'Aris Fathur Rahman', roleMember: 'Backend Developer' },
  ],
  sprint2: [
    { idMember: 'M001', name: 'Adithya Visnu Prasetyo', roleMember: 'Backend Developer' },
    { idMember: 'M002', name: 'Edwina Anky Parande', roleMember: 'QA Engineer' },
    { idMember: 'M003', name: 'faezal rachmad', roleMember: 'Frontend Web Developer' },
    { idMember: 'M004', name: 'Irman Juliansyah', roleMember: 'Backend Developer' },
    { idMember: 'M006', name: 'rizky ramadhan subagio', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M007', name: 'Rahmat Ivan Azis', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M008', name: 'Dika Swadani', roleMember: 'Product Owner' },
    { idMember: 'M010', name: 'ElnoorFajrah', roleMember: 'Doc Engineer' },
    { idMember: 'M011', name: 'Bentar Septian', roleMember: 'Scrum Master' },
    { idMember: 'M012', name: 'Oka Uliandana', roleMember: 'Frontend Web Developer' },
  ],
  sprint1: [
    { idMember: 'M001', name: 'Adithya Visnu Prasetyo', roleMember: 'Backend Developer' },
    { idMember: 'M002', name: 'Edwina Anky Parande', roleMember: 'QA Engineer' },
    { idMember: 'M006', name: 'rizky ramadhan subagio', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M007', name: 'Rahmat Ivan Azis', roleMember: 'Frontend Mobile Developer' },
    { idMember: 'M008', name: 'Dika Swadani', roleMember: 'Product Owner' },
    { idMember: 'M010', name: 'ElnoorFajrah', roleMember: 'Doc Engineer' },
    { idMember: 'M011', name: 'Bentar Septian', roleMember: 'Scrum Master' },
  ],
};

const options = [
  { value: 'sprint5', label: 'Sprint 5, Squad Dialer' },
  { value: 'sprint4', label: 'Sprint 4, Squad Dialer' },
  { value: 'sprint3', label: 'Sprint 3, Squad Dialer' },
  { value: 'sprint2', label: 'Sprint 2, Squad Dialer' },
  { value: 'sprint1', label: 'Sprint 1, Squad Dialer' },
];

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      dataMember: null,
      dataSprint: 'sprint5',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        dataMember: nextProps.data.squad ? nextProps.data.squad[0].sprint[0].member : null
      });
    }
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

  handleChangeDropdown = (event) => {
    const { onChangeSprint } = this.props;

    this.setState({
      dataSprint: event.value,
    });
    onChangeSprint(event.value);
  };

  render() {
    const { classes, data, notif } = this.props;
    const { anchorEl, dataSprint } = this.state;
    const open = Boolean(anchorEl);
    let dummyDataMember;

    if( dataSprint == 'sprint1') {
      dummyDataMember = dataMember.sprint1;
    }
    if( dataSprint == 'sprint2') {
      dummyDataMember = dataMember.sprint2;
    }
    if( dataSprint == 'sprint3') {
      dummyDataMember = dataMember.sprint3;
    }
    if( dataSprint == 'sprint4') {
      dummyDataMember = dataMember.sprint4;
    }
    if( dataSprint == 'sprint5') {
      dummyDataMember = dataMember.sprint5;
    }

    if (data) {
      return (
        <Card className={classes.card}>
          <div className={classes.sectionHeader}>
            <Text type="display">Product</Text>
            <div className={classes.sectionActions}>
              {data.note}
              <Notification
                aria-owns={open ? 'simple-popper' : undefined}
                aria-haspopup="true"
                variant="contained"
                onClick={this.handleClick}
                id="product-card-notification"
                className={classes.ring}
              />
              <Avatar className={classes.tuing}>1</Avatar>
              <Popover
                id="simple-popper"
                open={open}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                className={classes.pp}
              >
                <PopoverHeader className={classes.head}>Notification</PopoverHeader>
                {
                  notif ? (
                    notif.member ? (notif.member.map((data, index) => (
                      <CardContent className={classes.ph} key={index}>
                        <Grid container>
                          <Avatar className={classes.avatar}>A</Avatar>
                          <div className={classes.notif}>
                            <div className={classes.name}>{data.talentName} {data.talentRole},</div>
                            <div>{notif.description}</div>
                          </div>
                          {/* <div className={classes.miring}>just now</div> */}
                        </Grid>
                      </CardContent>
                    )
                    )) : (<tr><td><CircularProgress /></td></tr>)
                  ) : (<tr><td><CircularProgress /></td></tr>)
                }

              </Popover>
            </div>
          </div>
          <div className={classes.sectionContent}>
            <div className={classes.dd}>
              <div className={classes.dd1} />
              <div className={classes.dd2}>
                Dialer SLI 01017
                {/* {data.sprint}, {data.squad} */}
                <Dropdown
                  options={options}
                  value={options[0]}
                  name="dropdown"
                  onChange={this.handleChangeDropdown}
                />
              </div>
            </div>
            <CardContent className={classes.table1}>
              <table>
                <tbody>
                  <tr>
                    <td><b>Member</b></td>
                  </tr>
                  {
                    dataMember != null ? (dummyDataMember.map((data, index) => (
                      <tr key={index}>
                        <td>{data.name} </td>
                      </tr>
                    )
                    )) : (<tr><td><CircularProgress /></td></tr>)
                  }
                </tbody>
              </table>
            </CardContent>
            <CardContent className={classes.table}>
              <table>
                <tbody>
                  <tr>
                    <th>Stake Holder</th>
                  </tr>
                  {
                    data.stakeholder ? (<tr><td>Enterprise</td></tr>)
                      : (<tr><td><CircularProgress /></td></tr>)
                  }
                </tbody>
              </table>
            </CardContent>
          </div>
        </Card>
      );
    } else {
      return (<CircularProgress />);
    }
  }
}
Component.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  notif: PropTypes.object,
  onChangeSprint: PropTypes.func,
};