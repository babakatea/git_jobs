import services from '../services';

const success_list_jobs = (list) => ({
    type: 'JOBS_LIST_LOADED',
    list
});

const fail_list_jobs = (error) => ({
    type: 'JOBS_LIST_LOAD_FAILED', error
});

const success_details_job = (details) => ({
    type: 'JOBS_DETAILS_LOADED',
    details
});

const fail_details_job = (error) => ({
    type: 'JOBS_DETAILS_LOAD_FAILED',
    error
});


export const loadJobsList = (params) => {

    return dispatch => {
        services.getJobs(params).then(data => {
            dispatch(success_list_jobs(data));
        }, error => {
            dispatch(fail_list_jobs(error));
        });
    };
};

export const loadJobsDetails = (params) => {

    return dispatch => {
        services.getDetails(params).then(data => {
            dispatch(success_details_job(data));
        }, error => {
            dispatch(fail_details_job(error));
        });
    };
};
