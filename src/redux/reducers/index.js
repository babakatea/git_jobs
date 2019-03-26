const initialState = {
    jobs: [],
    jobsLoadingFailed: false
};

export const reducer = (oldStore = initialState, action) => {

    console.log('Reducer called with action', action);
    if(action.type === 'JOBS_LIST_LOADED') {
        return {
            jobs: action.jobs,
            jobsLoadingFailed: false
        }
    }

    if(action.type === 'JOBS_LIST_LOAD_FAILED') {
        return {
            jobs: [],
            jobsLoadingFailed: true
        }
    }

    return oldStore
};
