import React from "react";
import {connect} from "react-redux";
import './index.less';
import userActions from "../../redux/actions/users";
import {Link} from "react-router-dom";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell
} from 'recharts';

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

const getJobsWithKeyword = (keyword, jobs) => {
  return jobs.filter(job => job.title.toLowerCase().includes(keyword.toLowerCase()) || job.description.toLowerCase().includes(keyword.toLowerCase()));
};

const getJobsByLocation = (location, jobs) => {
  return jobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()) || job.description.toLowerCase().includes(location.toLocaleString()));
};

const data = (keywords, jobs) => keywords.map(keyword => ({
  name: keyword, amount: getJobsWithKeyword(keyword, jobs).length * 7
}));

const pageNr = 7;

const mockPieChartData = [
  {name: 'USA', amount: 55 * pageNr},
  {name: 'Canada', amount: 11 * pageNr},
  {name: 'Italy', amount: pageNr},
  {name: 'Germany', amount: 50 * pageNr},
  {name: 'UK', amount: 14 * pageNr},
  {name: 'Spain', amount: 4 * pageNr},
];

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let i = 0;

class Statistics extends React.Component {
  getIntroOfPage = (label) => {
    if (label === 'Python') {
      return "Python jobs available";
    }
    if (label === 'Java') {
      return "Java jobs available";
    }
    if (label === 'Ruby') {
      return "Ruby jobs available";
    }
    if (label === 'Mobile') {
      return 'Mobile development jobs';
    }
    if (label === 'C') {
      return 'C jobs available';
    }
    if (label === 'Django') {
      return 'Django jobs available';
    }
    if (label === 'Frontend') {
      return 'Frontend jobs available';
    }
  };

  CustomTooltip = ({active, payload, label}) => {
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
    const jobs = this.props.jobs && this.props.jobs.list;

    const keywords = ['Python', 'Java', 'Frontend', 'Ruby', 'C', 'Mobile', 'Javascript', 'Ada', 'Shell',
      'Typescript', 'C++', 'PHP', 'Backend'];

    return (
      <div className="search-page">
        <div>
          <Grommet theme={grommet}>
            <Form onSubmit={this.onSubmit}>
              <Box direction="row" pad="medium" justify="center">
                <FormField id="location-input" className="search-fields" label="Location"
                           name="location"
                           placeholder="Filter by city, state, zip code or country"
                           validate={this.validate}>
                </FormField>
                <Button id="search" type="submit" label="Search" primary/>
              </Box>
            </Form>
          </Grommet>
        </div>

        <div className={'statistics'}>
          <p className="title-for-bar-chart">Number of jobs distributed by location</p>
          <BarChart
            width={1000}
            height={600}
            data={data(keywords, jobs)}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip content={this.CustomTooltip}/>
            <Legend/>
            <Bar dataKey="amount" barSize={20} fill="#888AAA" name="Number of jobs requiring this technology"/>
          </BarChart>
          <p className="title-for-pie-chart">Most popular countries that posted some jobs</p>
          <ResponsiveContainer  width="100%" height={400}>
            <PieChart>
              <Tooltip/>
              <Legend/>
              <Pie data={mockPieChartData} nameKey="name" dataKey="amount" fill="#1890ff">
                {mockPieChartData.map(() => <Cell key={i++} fill={getRandomColor()}/>)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
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
