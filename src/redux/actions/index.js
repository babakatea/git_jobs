import alerts from './alerts';
import users from './users';
import {loadJobsDetails, loadJobsList} from './jobs';

export default {alerts, users, jobs: {loadJobsDetails, loadJobsList}};
