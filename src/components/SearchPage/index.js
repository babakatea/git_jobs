import React from "react";
import api from '../../api';
import './index.less';
import {grommet} from "grommet/themes";
import axios from 'axios';
import {connect} from "react-redux";
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    RadioButton,
    TextInput, CheckBox,
} from "grommet";
import {loadJobsList} from "../../redux/actions/jobs";

class SearchForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadJobsList({method: 'GET'}));
    }

    render() {
        console.log(this.props);

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
                        <div key={job.id} className={'jobs-entry'}>
                            <p>Type: {job.type}</p>
                            <p>Location: {job.location}</p>
                            <p>Title: {job.title}</p>
                            <button className="button button-like">
                                <i className="like-heart"/>
                                <span>Like</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {jobs} = state;

    return jobs;
};

export default connect(mapStateToProps, null)(SearchForm);
