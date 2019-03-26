import React from "react";
import api from '../../api';
import './index.less';
import {grommet} from "grommet/themes";
import axios from 'axios';
import {connect} from "react-redux";
import * as actionCreators from "../../redux/actionCreators";
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    RadioButton,
    TextInput, CheckBox,
} from "grommet";

class SearchForm extends React.Component {

    getQuery = (props) => props.location.pathname.replace('/jobs', '').replace('/', '');


    componentDidMount() {
        this.loadJobs(this.getQuery(this.props))
    }

    loadJobs = (description = '') => {
        const searchParameter = description ? `description=${description}` : '';
        axios.get(`https://jobs.github.com/positions.json?${searchParameter}`)
            .then(response => {
                this.props.jobsListLoaded(response.data);
            })
            .catch((err) => {
                this.props.jobsListLoadFailed()
            })
    };


    buildDetailsClickHandler = (job) => () => {
        this.props.history.push(`/job/${job.id}`)
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.loadJobs(this.getQuery(nextProps))
        }
    }

    render() {

        return (
            <div className="search-page">
                <div>
                    <Grommet theme={grommet}>
                        <Form>
                            <Box direction="row" pad="medium" justify="center">
                                <FormField className="search-fields" label="Job description" name="job_name" required>
                                    <TextInput
                                        id="name-input"
                                        placeholder="Filter by title, benefits, companies, expertise"
                                    />
                                </FormField>
                                <FormField className="search-fields" label="Location" name="job_location" required>
                                    <TextInput
                                        id="location-input"
                                        placeholder="Filter by city, state, zip code or country"
                                    />
                                </FormField>
                                <CheckBox
                                    label="Full Time Only"
                                />
                                <Button id="search" type="submit" label="Search" primary/>
                            </Box>
                        </Form>
                    </Grommet>
                </div>

                <div className={'jobs-list'}>
                    {this.props.jobs.map((job) =>
                        <div key={job.id} className={'jobs-entry'}>
                            {/*<p>ID: {job.id}</p>*/}
                            <p>Type:{job.type}</p>
                            {/*<p>url: {job.url}</p>*/}
                            {/*<p>Created: {job.created_at}</p>*/}
                            {/*<p>Company: {job.company_url}</p>*/}
                            <p>Location{job.location}</p>
                            <p>Title: {job.title}</p>
                            {/*<p>Description: {job.description}</p>*/}
                            {/*<p>How to apply: {job.how_to_apply}</p>*/}
                            {/*<p>Company: {job.company_logo}</p>*/}
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    jobs: state.jobs,
    jobFailed: state.jobsLoadingFailed,
});

const mapDispatchToProps = (dispatch) => ({
    jobsListLoaded: (jobs) => {
        dispatch(actionCreators.jobsListLoaded(jobs))
    },
    jobsListLoadFailed: () => {
        dispatch(actionCreators.jobsListLoadFailed())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
