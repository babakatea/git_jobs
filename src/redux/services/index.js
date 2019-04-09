import {authHeader} from '../utils';
import api from '../../api';
import history from "../../history";

export default {
  login,
  logout,
  getProfile,
  getJobs,
};

const loginUrl = api.baseURL + '/auth/login';
const registerUrl = api.baseURL + '/auth/register';
const logoutUrl = api.baseURL + '/auth/logout';
const profileUrl = api.baseURL + '/profile';
const jobsUrl = 'https://jobs.github.com/positions.json';

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  };

  return fetch(loginUrl, requestOptions).then(handleResponse);
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

  // return fetch(logoutUrl, {method: 'POST'});
}

function getProfile() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(profileUrl, requestOptions).then(handleResponse);
}

function getJobs(params) {
  return fetch(jobsUrl, params).then(handleResponse);
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
