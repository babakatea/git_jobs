import actions from '../../src/redux/actions';
import configureStore from 'redux-mock-store';
import {jobsActionTypes, userActionsTypes, alertActionsTypes} from '../../src/redux/constants';
import thunk from 'redux-thunk';

const dispatch = jest.fn();
const mockStore = configureStore([thunk]);
const store = mockStore();


describe('actions works fine', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Test jobs list actions', (done) => {
    const params = {
      params: {}
    };
    const expectedActionsList = [
      jobsActionTypes.JOBS_LIST_REQUEST,
      jobsActionTypes.JOBS_LIST_LOADED,
    ];

    store.dispatch(actions.jobs.loadJobsList(params)).then(() => {
      expect(store.getActions().map(action => action.type)).toEqual(expectedActionsList);
      done();
    });
  });

  it('Test job details actions', (done) => {
    const params = {
      params: {}
    };
    const expectedActions = [
      jobsActionTypes.JOBS_DETAILS_LOAD_REQUESTED,
      jobsActionTypes.JOBS_DETAILS_LOAD_FAILED,

    ];

    store.dispatch(actions.jobs.loadJobsDetails(params)).then(() => {
      expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
      done();
    });
  });

  it('Test successful login action', (done) => {
    const params = {
      email: 'superuser@gmail.com',
      password: 'masterkey'
    };
    const expectedActions = [
      userActionsTypes.USERS_LOGIN_REQUEST,
      userActionsTypes.USERS_LOGIN_SUCCESS,
    ];

    store.dispatch(actions.users.login(params.email, params.password));
    expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
    done();
  });


  it('Test unsuccessful login action', (done) => {
    const params = {
      email: 'catea.baba@gmail.com',
      password: 'newkey'
    };
    const expectedActions = [
      userActionsTypes.USERS_LOGIN_REQUEST,
      userActionsTypes.USERS_LOGIN_FAILURE,
      alertActionsTypes.ALERT_ERROR
    ];

    store.dispatch(actions.users.login(params.email, params.password));
    expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
    done();
  });

  it('Test logout action', (done) => {

    const expectedActions = [
      userActionsTypes.USERS_LOGOUT
    ];

    store.dispatch(actions.users.logout());
    expect(store.getActions().map(action => action.type)).toEqual(expectedActions);
    done();
  });


});
