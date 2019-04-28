import services from '../services';
import {jobsActionTypes} from "../constants";

const success_list_jobs = (list) => ({
  type: jobsActionTypes.JOBS_LIST_LOADED,
  list
});

const fail_list_jobs = (error) => ({
  type: jobsActionTypes.JOBS_LIST_LOAD_FAILED, error
});

const success_details_job = (details) => ({
  type: jobsActionTypes.JOBS_DETAILS_LOADED,
  details
});

const fail_details_job = (error) => ({
  type: jobsActionTypes.JOBS_DETAILS_LOAD_FAILED,
  error
});

const request_list_jobs = () => ({
  type: jobsActionTypes.JOBS_LIST_REQUEST,
});

const request_job_details = () => ({
  type: jobsActionTypes.JOBS_DETAILS_LOAD_REQUESTED,
});

export const loadJobsList = (params) => {
  return dispatch => {
    dispatch(request_list_jobs());
    return services.getJobs(params).then(data => {
      dispatch(success_list_jobs(data));
    }, error => {
      dispatch(fail_list_jobs(error));
    });
  };
};

export const loadJobsDetails = (params) => {
  return dispatch => {
    dispatch(request_job_details());
    return services.getDetails(params).then(data => {
      dispatch(success_details_job(data));
    }, error => {
      dispatch(fail_details_job(error));
    });
  };
};
