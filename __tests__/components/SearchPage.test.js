import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchPage from "../../src/components/SearchPage";


describe('List of jobs', () => {
  const mockStore = createStore([thunk]);
  const initialState = {
    jobs: []
  };
  const store = mockStore(initialState);

  it('Test render component', (done) => {
    const container = renderer.create(
        <Provider store={store}>
          <Router>
            <Route component={SearchPage}/>
          </Router>
        </Provider>,
        {createNodeMock: ({type}) => document.createElement(type)}
      );

    expect(container.toJSON()).toMatchSnapshot();

    done();
  });

  it('Test render non-empty component', () => {
    const container = renderer.create(
      <Provider store={store}>
        <Router>
          <Route component={SearchPage}/>
        </Router>
      </Provider>,
      );

    expect(container.toJSON()).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

});

