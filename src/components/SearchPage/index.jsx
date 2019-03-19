import React from "react";
import api from '../../api';
import './index.less';
import {Link} from "react-router-dom";
import {grommet} from "grommet/themes";
import {storiesOf} from "@storybook/react";
import {FormCheckmark} from "grommet-icons";

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
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.check_state = {checked: !!props.checked};
    }

    onChange = event => this.setState({checked: event.target.checked});

    componentDidMount() {
        this.loadJobsData();
    }

    async loadJobsData() {
        this.setState({error: void 0});
        let data = await api.jobs.fetchJobs();
        this.setState({data});
    }

    onCheck = (event, value) => {
        const {checked} = this.check_state;
        if (event.target.checked) {
            checked.push(value);
            this.setState({checked});
        } else {
            this.setState({checked: checked.filter(item => item !== value)});
        }
    };

    render() {
        const {checked} = this.check_state;

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
                                    {...this.props}
                                    label="Full Time Only"
                                    checked={checked}
                                    onChange={this.onChange}
                                />
                                <Button id="search" type="submit" label="Search" primary/>
                            </Box>
                        </Form>
                    </Grommet>
                </div>

                <div className={'jobs-list'}>
                    {this.state.data.map(job => (
                        <div key={job.id} className={'jobs-entry'}>
                            <p>ID: {job.id}</p>
                            <p>Type:{job.type}</p>
                            <p>url: {job.url}</p>
                            <p>Created: {job.created_at}</p>
                            <p>Company: {job.company_url}</p>
                            <p>Location{job.location}</p>
                            <p>Title: {job.title}</p>
                            <p>Description: {job.description}</p>
                            <p>How to apply: {job.how_to_apply}</p>
                            <p>Company: {job.company_logo}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}

export default SearchForm;


