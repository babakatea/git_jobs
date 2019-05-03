import moxios from 'moxios';
import {loadJobsList} from "../../src/redux/actions/jobs";
import React from "react";
const dispatch = jest.fn();

describe('action load jobs list', () => {

  beforeEach(() => {
    moxios.install()

  });

  it('load jobs with moxios', (done) => {

    const API_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;

    moxios.stubRequest(API_URL, {
      status: 200,
      responseText: {
        results: [{test: 'jobs'}]
      }
    });

    const params = {
      params: {}
    };

    const dispatcher = loadJobsList(params);
    expect(typeof dispatcher).toBe('function');

    dispatcher(dispatch);

    moxios.wait(function () {
      const request = moxios.requests.mostRecent();
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch.mock.calls[0][0]).toMatchSnapshot();
      done()
    })
  });

  afterEach(() => {
    moxios.uninstall()
  });

});
