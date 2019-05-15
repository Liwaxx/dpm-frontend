import { VERTICAL_ALIGN } from '../../../styles';

const styles = {
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
  },
  content: {
    color: '#B1B1B3',
    textAlign: 'left',
  },
  close: {
    height: '16px',
    width: '16px',
  },
  doc: {
    display: 'flex',
  },
  docRed: {
    backgroundColor: '#E2574C',
    height: '31px',
    marginRight: '8px',
    width: '27px',
  },
  dropdown: {
    border: '1px solid #AEB9CB',
    borderRadius: '2px',
  },
  exit: {
    height: '24px',
    justifyContent: 'flex-end',
    width: '100%',
  },
  heading: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    flex: '1 1 80%',
    overflowY: 'auto',
    padding: '16px',
  },
  main: {
    margin: '8px 0',
  },
  menu: {
    backgroundColor: '#ffffff',
    fontSize: '14px',
    padding: '0 8px',
  },
  modalContainer: {
    ...VERTICAL_ALIGN,
    backgroundColor: '#ffffff',
    display: 'flex',
    height: '80vh',
    margin: 'auto',
    width: '80%',
  },
  modalRightContent: {
    marginBottom: '16px',
  },
  modalRightName: {
    fontSize: '16px',
    fontWeight: 700,
  },
  modalTitle: {
    fontSize: '24px',
    marginBottom: '16px',
  },
  radioButton: {
    color: '#D8D8D8',
  },
  right: {
    borderLeft: '2px solid #DEE3ED',
    flex: '1 1 20%',
    padding: '16px',
  },
  select: {
    fontSize: '14px',
    padding: '0 8px',
  },
  subTitle: {
    fontSize: '14px',
    textAlign: 'right',
    color: '#8D98AA'
  },
  title: {
    fontSize: '20px',
    textAlign: 'left',
  },
};

export default styles;
