export const jobsListLoaded = (jobs) => ({
    type: 'JOBS_LIST_LOADED',
    jobs
});

export const jobsListLoadFailed = () => ({
    type: 'JOBS_LIST_LOAD_FAILED'
});
