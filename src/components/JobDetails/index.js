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

class JobDetails extends React.Component {
    componentDidMount() {
        // console.log(this.props.location.pathname.slice(5));
        const location = this.props.location;
        this.props.dispatch(loadJobsDetails(location.pathname.slice(5)))
    }

    render() {
        const details = this.props.job_details;



        console.log(details);

        // function goBack() {
        //     window.history.back();
        // }

        return details ? (
                <div className="single-job-content">
                    <p>Created at: {details.created_at}</p>
                    <p>Company name: {details.company}</p>
                    <p> Working schedule: {details.type} </p>
                    <p>Location: {details.location}</p>
                    <p className="description"> {details.description}</p>
                    <p className="how-to-apply"> {details.how_to_apply} </p>
                    <button>Back</button>
                    <button>Like</button>
                    <button>Apply</button>
                </div>)
            : <p>Fetching data...</p>
    }

}

const mapStateToProps = (state) => {
    const {jobs} = state;

    return jobs;
};

export default connect(mapStateToProps, null)(JobDetails);
