const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: '300px',
    height: '207px',
    marginLeft: '-15%',
    marginTop: '-10%',
  },
  container: {
    backgroundColor: '#FFF',
    fontFamily: 'roboto',
    fontSize: '20px',
  },
  detail: {
    color: '#53B9EC',
  },  
  header: {
    marginLeft: '8px',
  },
  close: {
    marginLeft: '240px',
    marginTop: '-50px',
    width: '20px',
    height: '20px',
  },
  closeImage: {
    width: '50px',
  },
  line1: {
    marginLeft: '40px',
    marginTop: '40px',
  },
  line2: {
    marginLeft: '40px',
    marginTop: '20px',
  },
  left: {
    border: 'none',
    backgroundColor: '#fff',
    marginLeft: '20px',
  },
  right: {
    border: 'none',
    backgroundColor: '#fff',
    marginLeft: '-70px',
  },
  line: {
    marginLeft: '110px',
  },
  tahun: {
    fontFamily: 'roboto',
    marginLeft: '-70px',
    fontSize: '20px',
  },
});
export default styles;