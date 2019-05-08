import React from "react";
import {connect} from "react-redux";
import './index.less';
import userActions from "../../redux/actions/users";
import {Link} from "react-router-dom";
import {BarChart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import {grommet} from "grommet/themes";
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  CheckBox,
} from "grommet";
import {loadJobsList} from "../../redux/actions/jobs";


class Statistics extends React.Component {

  data = [
    {
      name: 'Python', uv: 313, pv: 96, amt: 313,
    },
    {
      name: 'Java', uv: 313, pv: 173, amt: 313,
    },
    {
      name: 'Ruby', uv: 313, pv: 42, amt: 313,
    },
    {
      name: 'Mobile', uv: 313, pv: 71, amt: 313,
    },
    {
      name: 'C', uv: 313, pv: 67, amt: 313,
    },
    {
      name: 'Django', uv: 313, pv: 15, amt: 313,
    },
    {
      name: 'Frontend', uv: 313, pv: 37, amt: 313,
    },
  ];

  getIntroOfPage = (label) => {
    if (label === 'Python') {
      return "Python jobs available";
    } if (label === 'Java') {
      return "Java jobs available";
    } if (label === 'Ruby') {
      return "Ruby jobs available";
    } if (label === 'Mobile') {
      return 'Mobile development jobs';
    } if (label === 'C') {
      return 'C jobs available';
    } if (label === 'Django') {
      return 'Django jobs available';
    } if (label === 'Frontend') {
      return 'Frontend jobs available';
    }
  };

  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{this.getIntroOfPage(label)}</p>
        </div>
      );
    }

    return null;
  };


  componentDidMount() {
    this.props.dispatch(loadJobsList({method: 'GET'}));
  }

  onSubmit = (params) => {
    const filters = {
      description: params.value.description,
      location: params.value.location,
      full_time: params.value.full_time,
    };

    this.props.dispatch(loadJobsList({method: 'GET', params: filters}));
  };

  validate = (value) => {
    const regexp = /^([^0-9]*)$/;
    const message = "Input is not a string";

    if (regexp.test(value)) {
    } else {
      return message;
    }
  };

  render() {
    return (
      <div className="search-page">
        <div>
          <Grommet theme={grommet}>
            <Form onSubmit={this.onSubmit}>
              <Box direction="row" pad="medium" justify="center">
                {/*<FormField id="name-input"*/}
                           {/*placeholder="Filter by title, benefits, companies"*/}
                           {/*className="search-fields" label="Job description" name="description"*/}
                           {/*validate={this.validate}>*/}
                {/*</FormField>*/}
                <FormField id="location-input" className="search-fields" label="Location"
                           name="location"
                           placeholder="Filter by city, state, zip code or country"
                           validate={this.validate}>
                </FormField>
                <div className="check-box">
                  <FormField
                    id="full-time"
                    name="full_time"
                    component={CheckBox}
                    pad={true}
                    label="Full Time Only"
                    className={"no-border"}
                  />
                </div>
                <Button id="search" type="submit" label="Search" primary/>
              </Box>
            </Form>
          </Grommet>
        </div>

        <div className={'statistics'}>
          <BarChart
            width={1000}
            height={600}
            data={this.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip content={this.CustomTooltip}/>
            <Legend/>
            <Bar dataKey="pv" barSize={20} fill="#8884d8"/>
          </BarChart>

          {/*{this.props.jobs.list && this.props.jobs.list.map((job) =>*/}
            {/*<div className={'jobs-entry'}>*/}
              {/*/!*<p className="job-name">*!/*/}
                {/*/!*<span>{job.title}</span>*!/*/}
              {/*/!*</p>*!/*/}
              {/*/!*<p>{job.type}</p>*!/*/}
              {/*/!*<p className="job-location">{job.location}</p>*!/*/}
            {/*</div>*/}
          {/*)}*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {jobs} = state;

  return {jobs};
};

export default connect(mapStateToProps)(Statistics);
