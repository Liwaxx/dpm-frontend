import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Card from '../Card';
import Text from '../Text';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  render() {
    const { classes, data } = this.props;

    if (data) {
      return (
        <Card className={classes.card}>
          <CardContent className={classes.bungkus}>
            <Text type="display" className={classes.title} >Personal Score</Text>
            <Text type="paragraph" className={classes.nama}>Frontend Mobile Developer</Text>

            <CardContent className={classes.row}>
              <Avatar alt="Remy Sharp" src={IMAGES.USER} className={classes.Avatar} />
            </CardContent>
            <Text type="subheader" className={classes.namaOrang}>Rizky Ramadhan</Text>

            <Typography type="subheader" className={classes.angka}>
              <img src={IMAGES.STAR} className={classes.star} /> 5.0</Typography>

            <div className={classes.keterangan}>
              <Text type="paragraph">Project History</Text>
              <Text type="subheader" className={classes.warna}>Bulir</Text>
              <br />
              <Text type="paragraph">Key Points</Text>
              {/* <Text type="subheader" className={classes.warna}>Research</Text>
              <Text type="subheader" className={classes.warna}>Design </Text>
              <Text type="subheader" className={classes.warna}>Communicative</Text> */}
              <br />
              <Text type="paragraph">Need Improvement</Text>
              {/* <Text type="subheader" className={classes.warna}>Visual Design</Text>
              <Text type="subheader" className={classes.warna}>Leadership</Text>
              <Text type="subheader" className={classes.warna}>Time Management</Text> */}
            </div>
            <div>
              <Text type="paragraph" className={classes.detail}>DETAIL</Text>
            </div>
          </CardContent>
        </Card>
      );
    } else {
      return(
        <Text type="paragraph">Loading...</Text> 
      );
    }
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  data: PropTypes.object
};
