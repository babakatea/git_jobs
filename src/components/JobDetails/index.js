import React from 'react'
import styles from "./index.less";
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    RadioButton,
    TextInput, CheckBox,
} from "grommet";
import {loadJobsDetails} from "../../redux/actions/jobs";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

class JobDetails extends React.Component {
    componentDidMount() {
        const location = this.props.location;
        this.props.dispatch(loadJobsDetails(location.pathname.slice(5)))
    }

    render() {
        const details = this.props.jobs && this.props.jobs.job_details;

        return details ? (
                <div className="single-job-content">
                    <p className="created-at">Created at: {details.created_at}</p>
                    <span className="company-name">{details.company}</span>
                    <button className="like-button">Like</button>
                    <p className="working-schedule"> Working schedule: <span>{details.type} </span></p>
                    <p className="location">Location: <span>{details.location}</span></p>
                    <div>
                        <img src={details.company_logo} alt="company-logo" className="company-logo" align="right"/>
                    </div>
                    <div className="divider divider-default"/>
                    {ReactHtmlParser(details.description)}
                    <p className="how-to-apply">How to apply:</p>
                    {ReactHtmlParser(details.how_to_apply)}
                    <Link to={'/search'}>
                        <button className="back-button">Back</button>
                    </Link>
                </div>)
            : <p>Fetching data...</p>
    }

}

const mapStateToProps = (state) => {
    const {jobs} = state;

    return {jobs};
};

export default connect(mapStateToProps, null)(JobDetails);
