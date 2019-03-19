import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = BACKEND_URL;

ReactDOM.render(<App />, document.getElementById('root'));