import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

import styles from "./index.less";

export class JobDetails extends React.Component {

    state = { character: void 0 };

    loadJobDetails = (jobId) => {
        fetch(`https://jobs.github.com/positions/${jobId}`)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({ job: data })
            })
    }

    componentDidMount() {
        if (this.props.match.params) {
            this.loadJobDetails(this.props.match.params.id)
        }
    }


    render() {

        const { job } = this.state;

        if (!job) {
            return <h3>Loading</h3>
        }

        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={6} lg={4} justify="center">
                    <Card className={styles.card}>
                        <CardMedia
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {job.title}
                            </Typography>
                            <Typography>
                                Type: {job.type}
                            </Typography>

                            <hr/>

                            <Table className="">
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">Company name</TableCell>
                                        <TableCell align="right">{job.company}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Location</TableCell>
                                        <TableCell align="right">{job.location}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Description</TableCell>
                                        <TableCell align="right">{job.description}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">How to apply</TableCell>
                                        <TableCell align="right">{job.how_to_apply}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}