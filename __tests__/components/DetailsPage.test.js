import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobDetails from "../../src/components/JobDetails";


describe('Job details page', () => {
  it('test render empty component', () => {
    const mockStore = createStore([thunk]);
    const initialState = {
      details: []

    };
    const store = mockStore(initialState);


    const container = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Route path="/job/:id" component={JobDetails}/>
          </Router>
        </Provider>,
        { createNodeMock: ({ type }) => document.createElement(type) }
      );

    expect(container.toJSON()).toMatchSnapshot()
  })

});
