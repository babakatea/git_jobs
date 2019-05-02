import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import JobDetails from "../../src/components/JobDetails";

describe('Job details page', () => {
  const mockStore = createStore([thunk]);
  const initialState = {
    details: []

  };

  const store = mockStore(initialState);

  it('test render component', () => {
    const container = renderer.create(
        <Provider store={store}>
          <Router>
            <Route path="/job/:id" component={JobDetails}/>
          </Router>
        </Provider>,
        { createNodeMock: ({ type }) => document.createElement(type) }
      );

    expect(container.toJSON()).toMatchSnapshot()
  });

  it('Test render non-empty component', () => {
    const container = renderer.create(
      <Provider store={store}>
        <Router>
          <Route component={JobDetails}/>
        </Router>
      </Provider>,
    );

    expect(container.toJSON()).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

});
