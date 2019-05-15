import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import pages from './pages';
import PageBase from './components/layouts/PageBase';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles';
import { ROUTES } from './configs';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <PageBase>
          <Switch>
            <Route exact path={ROUTES.HOME()} component={pages.Personal} />
            <Route exact path={ROUTES.PRODUCT_AND_TALENT()} component={pages.ProductAndTalent} />
            <Route exact path={ROUTES.VALIDATOR()} component={pages.Validator} />
            <Route component={pages.Error404} />
          </Switch>
        </PageBase>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};