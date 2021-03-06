import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'typeface-roboto';
import configureStore, { history } from './store/configureStore';
import Root from './Root';
require('./favicon.ico');
const store = configureStore();

render (
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const Root = require('./Root').default;
    render (
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}