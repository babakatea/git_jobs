import {authHeader} from '../utils';
import api from '../../api';
import history from "../../history";

export default {
  login,
  logout,
  getProfile,
  getJobs,
  getDetails
};

const registerUrl = api.baseURL + '/auth/register';
const logoutUrl = api.baseURL + '/auth/logout';
const profileUrl = api.baseURL + '/profile';
let jobsUrl = '';
let loginUrl = '';

if (api.baseURL === 'https://jobs.github.com/positions.json') {
  jobsUrl = api.baseURL;
  loginUrl = api.baseURL + '/auth/login'
} else {
  jobsUrl = api.baseURL + '/get_jobs';
  loginUrl = api.baseURL + '/login';
}

// const jobsUrl = 'https://jobs.github.com/positions.json';
// const jobsUrl = 'http://localhost:1234/api/get_jobs';

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  };

  return fetch(loginUrl, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('token', JSON.stringify(user));
    });

  // if (email === 'superuser@gmail.com' && password === 'masterkey') {
  //     return {access_token: 'real token'};
  // }
}

function register(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };

  return fetch(loginUrl, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('token', JSON.stringify(user));
    });
}

function logout() {
  localStorage.removeItem('token');
}

function getProfile() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(profileUrl, requestOptions).then(handleResponse);
}

function formQuery(params) {
  let result = '';
  let i = 0;

  for (let key in params) {
    if (params[key] && params.hasOwnProperty(key)) {
      result += (i === 0 ? '?' : '&') + `${key}=${params[key]}`;
      i++;
    }
  }

  return result;
}

function getJobs(params) {
  return fetch(`${jobsUrl}${formQuery(params.params)}`, params).then(handleResponse);
}

function getDetails(jobID) {
  // return fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${jobID}.json`).then(response => handleResponse(response));
  return fetch(`https://jobs.github.com/positions/${jobID}.json`).then(response => handleResponse(response));

}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
