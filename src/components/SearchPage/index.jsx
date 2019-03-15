import React from "react";
import api from '../../api';
import './index.less';
import {Link} from "react-router-dom";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.loadJobsData();
    }

    async loadJobsData() {
        let data = await api.jobs.fetchJobs();

        console.log("Data from api at fn", data);

        this.setState({data});
    }

    render() {
        console.log(this.state.data);

        return (
            <div className={'jobs-list'}>
                {this.state.data.map(job => (
                    <div key={job.id} className={'jobs-entry'}>
                        <Link to="/"><p>{job.name}</p></Link>
                        <p>Location{job.location}</p>
                        <p>Salary: {job.salary}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default SearchForm;
//https://jobs.github.com/positions.json?search=node