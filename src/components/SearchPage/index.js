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
    CheckBox,
} from "grommet";
import {loadJobsList} from "../../redux/actions/jobs";


class SearchForm extends React.Component {
    state = {
        checked: false,
        activePage: 1,
        pages: [
            {
                number: 1,
                active: true
            },
            {
                number: 2,
                active: false
            },
            {
                number: 3,
                active: false
            },
            {
                number: 4,
                active: false
            },
            {
                number: 5,
                active: false
            },
            {
                number: 6,
                active: false
            },
            {
                number: 7,
                active: false
            }
        ],
    };

    componentDidMount() {
        !this.props.list.length > 0 && this.props.dispatch(loadJobsList({method: 'GET'}));
    }

    buildDetailsClickHandler = (job) => () => {
        this.props.history.push(`/job/${job.id}`)
    };

    onPageChange = (event) => {
        let newPages = this.state.pages.map(page => ({
            number: page.number,
            active: page.number === parseInt(event.target.name)
        }));

        console.log(this.state.pages);

        this.setState({pages: newPages});
        const filters = {
            page: event.target.name,
        };

        this.props.dispatch(loadJobsList({method: 'GET', params: filters}));
    };

    onSubmit = (params) => {
        const filters = {
            description: params.value.description,
            location: params.value.location,
            full_time: params.value.full_time,
            page: 1,
        };

        this.props.dispatch(loadJobsList({method: 'GET', params: filters}));
    };

    render() {
        return (
            <div className="search-page">
                <div>
                    <Grommet theme={grommet}>
                        <Form onSubmit={this.onSubmit}>
                            <Box direction="row" pad="medium" justify="center">
                                <FormField id="name-input"
                                           placeholder="Filter by title, benefits, companies"
                                           className="search-fields" label="Job description" name="description">
                                </FormField>
                                <FormField id="location-input" className="search-fields" label="Location"
                                           name="location"
                                           placeholder="Filter by city, state, zip code or country">
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

                <div className={'jobs-list'}>
                    {this.props.list && this.props.list.map((job) =>
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
                        <a>&laquo;</a>
                        {this.state.pages.map(page => (
                            <a key={page.number} onClick={this.onPageChange} name={page.number}
                               className={page.active ? "active" : ""}>{page.number}</a>
                        ))}
                        <a>&raquo;</a>
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
