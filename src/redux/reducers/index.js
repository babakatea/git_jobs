import {combineReducers} from 'redux';
import {authorization} from "./auth";

const initialState = {
    list: [],
    jobsLoadingFailed: false
};

export const jobs = (oldStore = initialState, action) => {
    switch (action.type) {
        case 'JOBS_LIST_LOADED': {
            return {
                list: action.list,
                jobsLoadingFailed: false
            }
        }
        case 'JOBS_LIST_LOAD_FAILED': {
            return {
                list: [],
                jobsLoadingFailed: true
            }
        }
        case 'JOBS_DETAILS_LOADED': {
            return {
                job_details: action.details
            }
        }
    }
    return oldStore;
};


const rootReducer = combineReducers({
    authorization,
    jobs,
});

export default rootReducer;
