import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import renderer from 'react-test-renderer';
import configureStore, { history } from '../../../store/configureStore';
import Component from '../component';

jest.mock('../../../components/elements/AppBar');
jest.mock('../../../components/elements/ValidatorCard');
jest.mock('../../../components/elements/Text');

let actions, data;

describe('Component', () => {
  beforeEach(() => {
    actions = {
      fetchValidator: jest.fn(),
    };
    data = {
      approved: {
        today: [],
        yesterday: [],
        oneWeek: []
      },
      rejected: {
        today: [],
        yesterday: [],
        oneWeek: []
      },
      waiting: {
        today: [],
        yesterday: [],
        oneWeek: []
      },
    };
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Component actions={actions} classes={{}} data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders loading state', () => {
    const tree = renderer
      .create(<Component actions={actions} classes={{}} data={data} isLoading />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with data', () => {
    data = {
      approved: {
        today: ['test'],
        yesterday: ['test'],
        oneWeek: [
          {
            data: ['test'],
            id: '2018-11-11',
          }
        ]
      },
      rejected: {
        today: ['test'],
        yesterday: ['test'],
        oneWeek: [
          {
            data: ['test'],
            id: '2018-11-11',
          }
        ]
      },
      waiting: {
        today: ['test'],
        yesterday: ['test'],
        oneWeek: [
          {
            data: ['test'],
            id: '2018-11-11',
          }
        ]
      },
    };
    const tree = renderer
      .create(
        <Provider store={configureStore()}>
          <Router history={history}>
            <Component
              actions={actions}
              classes={{}}
              data={data}
            />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});