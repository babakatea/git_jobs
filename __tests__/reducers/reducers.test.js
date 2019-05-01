import jobs from '../../src/redux/reducers/index';
import {authorization} from '../../src/redux/reducers/auth';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {jobsActionTypes, userActionsTypes} from "../../src/redux/constants";

const mockStore = configureStore([thunk]);
const store = mockStore();


describe('reducers works fine', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Test jobs successful reducer', (done) => {
    const expectedState = {
      authorization: {},
      jobs: {
        jobsLoadingFailed: false,
        list: [{test: 'success'}]
      }
    };

    expect(jobs(undefined, {
      type: jobsActionTypes.JOBS_LIST_LOADED,
      list: [{test: 'success'}]
    })).toEqual(expectedState);
    done();
  });

  it('Test jobs failed reducer', (done) => {
    const expectedStateFailed = {
      authorization: {},
      jobs: {
        jobsLoadingFailed: true,
        list: []
      }
    };

    expect(jobs(undefined, {
      type: jobsActionTypes.JOBS_LIST_LOAD_FAILED,
      list: []
    })).toEqual(expectedStateFailed);
    done();

  });

  it('Test job details loaded reducer', (done) => {
    const expectedStateDetails = {
      authorization: {},
      jobs: {
        job_details: [{test: 'success'}],
      },
    };

    expect(jobs(undefined, {
      type: jobsActionTypes.JOBS_DETAILS_LOADED,
      details: [{test: 'success'}]
    })).toEqual(expectedStateDetails);
    done();

  });

  it('Test requested auth reducer', (done) => {
    const expectedStateAuth = {
      loggingIn: true,
      token: 'success'
    };

    expect(authorization(undefined, {
      type: userActionsTypes.USERS_LOGIN_REQUEST,
      payload: 'success'
    })).toEqual(expectedStateAuth);
    done();
  });

  it('Test successful auth reducer', (done) => {
    const expectedStateAuth = {
      loggedIn: 'true',
      token: 'success'
    };

    expect(authorization(undefined, {
      type: userActionsTypes.USERS_LOGIN_SUCCESS,
      payload: {token: 'success', loggedIn: 'true'}
    })).toEqual(expectedStateAuth);
    done();
  });

  it('Test failed auth reducer', (done) => {
    const expectedStateAuth = {};

    expect(authorization(undefined, {
      type: userActionsTypes.USERS_LOGIN_FAILURE,
      payload: {}
    })).toEqual(expectedStateAuth);
    done();
  });

  it('Test logout reducer', (done) => {
    const expectedStateAuth = {};

    expect(authorization(undefined, {
      type: userActionsTypes.USERS_LOGOUT,
      payload: {}
    })).toEqual(expectedStateAuth);
    done();
  });


});
