import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import SearchPage from "../../src/components/SearchPage";

describe('Jobs list page', () => {
  it('renders the component', () => {
    const mockStore = createStore([thunk]);
    const initialState = {
      jobs: []

    };
    const store = mockStore(initialState);


    const container = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Route component={SearchPage}/>
          </Router>
        </Provider>,
        {createNodeMock: ({type}) => document.createElement(type)}
      );

    // const instance = container.instance()
    expect(container.toJSON()).toMatchSnapshot()
  })

});
