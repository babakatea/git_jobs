import React from "react";
import './index.less';
import {grommet} from "grommet/themes";
import {connect} from "react-redux";
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    TextInput, CheckBox,
} from "grommet";
import {loadJobsList} from "../../redux/actions/jobs";

class SearchForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadJobsList({method: 'GET'}));
    }

    buildDetailsClickHandler = (job) => () => {
        this.props.history.push(`/job/${job.id}`)
    };

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
                                        // value={this.state.searchQuery} onChange={this.handleChange}
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
                    {this.props.list.map((job) =>
                        <div key={job.id} job={job} className={'jobs-entry'}>
                            <p onClick={this.buildDetailsClickHandler(job)} className="job-name">
                                <span>{job.title}</span>
                            </p>
                            <p>{job.type}</p>
                            <p className="job-location">{job.location}</p>
                            <button className="button-like">
                                <span>Like</span>
                            </button>

                        </div>
                    )}
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {jobs} = state;

    return jobs;
};

export default connect(mapStateToProps)(SearchForm);
