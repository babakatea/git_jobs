import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchPage from "../../src/components/SearchForm";
import SearchForm from "../../src/components/SearchForm";
import {mount, shallow} from "enzyme";
import {loadJobsList} from "../../src/redux/actions/jobs";
import {toJson} from "enzyme-to-json";


describe('List of jobs page', () => {
  const mockStore = createStore([thunk]);
  const initialState = {
    jobs: []
  };
  const store = mockStore(initialState);

  it('Test render component', (done) => {
    const container = renderer.create(
        <Provider store={store}>
          <Router>
            <Route component={SearchForm}/>
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
          <Route component={SearchForm}/>
        </Router>
      </Provider>,
      );

    expect(container.toJSON()).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it('successfully calls on like handle click function from props', () => {
    const mockClick = jest.fn();

    const mockStore = createStore([thunk]);
    const initialState = {
      jobs: []
    };
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <SearchForm handleLikeClick={mockClick}/>
      </Provider>
    );


    component.find('button').simulate('click');
    expect(mockClick).toBeCalled();
  });
});


