import React, {Component} from 'react';
import {connect} from "react-redux";
import './index.less';
import userActions from "../../redux/actions/users";
import {Link} from "react-router-dom";
import {grommet} from "grommet/themes";
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    CheckBox,
} from "grommet";


class Statistics extends Component {

    render() {
        return (
            <div className="statistics-page">
                <div>
                    <Grommet theme={grommet}>
                        <Form>
                            {/*onSubmit={this.onSubmit}*/}
                            <Box direction="row" pad="medium" justify="center">
                                <FormField id="name-input"
                                           placeholder="Filter by title, benefits, companies"
                                           className="search-fields" label="Job description" name="description">
                                </FormField>
                                <FormField id="location-input" className="search-fields" label="Location"
                                           name="location"
                                           placeholder="Filter by city, state, zip code or country">
                                </FormField>
                                <Button id="search" type="submit" label="Search" primary/>
                            </Box>
                        </Form>
                    </Grommet>
                </div>

                <div className="statistics-results">
                    Results:
                </div>
            </div>);
    }
}

export default Statistics;
