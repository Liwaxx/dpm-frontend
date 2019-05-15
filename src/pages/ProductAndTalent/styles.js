const styles = {
  allQueue: {
    flexGrow: 1,
    height: 'auto',
    marginRight: '16px',
  },
  ongoing: {
    flexGrow: 1,
    height: 'auto',
    marginRight: '16px',
    overflow: 'auto',
  },
  queue: {
    flexGrow: 1,
    height: 'auto',
    marginRight: '16px',
    overflow: 'auto',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  rowBottom: {
    display: 'flex',
    flexBasis: '70%',
  },
  rowTop: {
    display: 'flex',
    flexBasis: '30%',
    marginBottom: '16px',
  },
  score: {
    flexBasis: '32%',
    marginBottom: '16px',
  },
  scores: {
    flexGrow: 5,
    height: 'auto',
    marginRight: '16px',
    overflow: 'auto',
    width: 'min-content',
  },
  scoresContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '16px 20px',
  },
  sectionActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  sectionHeader: {
    backgroundColor: '#ffffff',
    borderLeft: '4px solid #54baed',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 20px 0',
    position: 'sticky',
    top: 0,
  },
  squad: {
    flexGrow: 1,
    height: 'auto',
  },
  vacancies: {
    flexGrow: 1,
    height: 'auto',
    overflow: 'auto',
  },
  vacanciesContent: {
    padding: '16px 20px',
  },
  vacancy: {
    marginBottom: '16px',
  },
};

export default styles;