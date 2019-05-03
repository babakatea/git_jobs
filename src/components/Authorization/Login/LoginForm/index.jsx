import React from 'react';
import {Link} from "react-router-dom";
import '../../index.less';
import usersActions from '../../../../redux/actions/users';

import {
  Button,
  Form,
  FormField,
} from "grommet";
import {Redirect} from "react-router";

const submitForm = (data, dispatch) => {
  if (data.value.email && data.value.password) {
    dispatch(usersActions.login(data.value.email, data.value.password));
  }
};

const LoginForm = (props) => {
  return localStorage.getItem('token') ? <Redirect to={{pathname: "/search"}}/> : (
    <div className="auth-form">
      <p className="r-title">Login</p>
      <Form onSubmit={data => submitForm(data, props.dispatch)}>
        <FormField
          label="Email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <FormField
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          required
        />
        <div className="form-control">
          <button id="form-button" type="submit">
            Submit
          </button>
        </div>
      </Form>
      <p className="form-control-text">If you don't have an account, <Link to="/register">register</Link>.</p>
    </div>
  )
};

export default LoginForm;
