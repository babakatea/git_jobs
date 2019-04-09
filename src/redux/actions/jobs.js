import services from '../services';

export const loadJobsList = (params) => {
    const success = (list) => ({
        type: 'JOBS_LIST_LOADED',
        list
    });

    const fail = (error) => ({
        type: 'JOBS_LIST_LOAD_FAILED', error
    });

    return dispatch => {
        services.getJobs(params).then(data => {
            dispatch(success(data));
        }, error => {
            dispatch(fail(error));
        });
    };
};
