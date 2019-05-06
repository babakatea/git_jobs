import {store} from '../../src/redux/store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {loadJobsDetails, loadJobsList} from "../../src/redux/actions/jobs";



const dispatch = jest.fn();
const mockStore = configureStore([thunk]);
const myStore = mockStore();

describe('reducers works fine', () => {

  it('Test successful store creating', (done) => {
    expect(myStore.getState()).toEqual({});
    done();
  });

  it('Dispatch actions in store', (done) => {

    const unsubscribe = store.subscribe(() => console.log(myStore.getState()));
    const params = {
      params: {}
    };

    myStore.dispatch(loadJobsList(params));
    myStore.dispatch(loadJobsDetails(params));

    unsubscribe();
    done();
  });


});



