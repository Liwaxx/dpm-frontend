const drawerWidth = 60;
const contentPadding = 16;
const sidebarWidth = 242;

const styles = {
  drawer: {
    borderRight: 'none',
    boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.1)`,
    width: `${drawerWidth}px`,
    padding: '16px 6px 0',
  },
  content: {
    marginLeft: `${sidebarWidth}px`,
    padding: `${contentPadding}px`
  },
  iconMenu: {
    color: 'inherit',
  },
  listItem: {
    padding: 0,
    '& a': {
      padding: '12px 24px',
      width: '100%'
    }
  },
  rectangle: {
    backgroundColor: '#d8d8d8',
    borderRadius: '7px',
    height: '44px',
    margin: '0 0 16px',
    width: '44px',
  },
  sidebar: {
    boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.1)`,
    fontSize: '12px',
    padding: '16px 0 0',
    paddingLeft: `${drawerWidth}px`,
    width: `${sidebarWidth}px`,
    zIndex: 0,
  },
  textTitle: {
    fontSize: '12px',
    textAlign: 'center',
  },
  '@media only screen and (max-width: 960px)': {
    content: {
      marginLeft: 0,
    }
  },
};

export default styles;
