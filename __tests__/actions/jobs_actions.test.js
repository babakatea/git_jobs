import {loadJobsList} from "../../src/redux/actions/jobs";
import actions from '../../src/redux/actions';
import configureStore from 'redux-mock-store';
import {jobsActionTypes} from '../../src/redux/constants';
import thunk from 'redux-thunk';
import * as jobs from './jobs.json';

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
    const expectedActions = [
      {
        'type': jobsActionTypes.JOBS_LIST_REQUEST,
      },
      {
        'type': jobsActionTypes.JOBS_LIST_LOADED,
        'jobs': [jobs]
      },
    ];

    store.dispatch(actions.jobs.loadJobsList(params)).then(() => {
      expect(store.getActions()).toBeTruthy();
      done();
    });
  });

  it('Test job details actions', (done) => {
    const params = {
      params: {}
    };
    const expectedActions = [
      {
        'type': jobsActionTypes.JOBS_DETAILS_LOAD_REQUESTED,
      },
      {
        'type': jobsActionTypes.JOBS_DETAILS_LOADED,
        'details': [] //TO DO
      },
    ];

    store.dispatch(actions.jobs.loadJobsDetails(params)).then(() => {
      expect(store.getActions()).toBeTruthy();
      done();
    });
  });


});
