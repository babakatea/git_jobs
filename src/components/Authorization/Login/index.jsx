import React from 'react';
import "./index.less";

import {
    Box,
    Button,
    CheckBox,
    Grommet,
    Form,
    FormField,
    RadioButton,
    RangeInput,
    Select,
    TextArea
} from "grommet";
import {grommet} from "grommet/themes";
import {Link} from "react-router-dom";

const submitForm = (login, password) => {

};

const Login = () => (
    <Grommet full theme={grommet}>
        <Box fill align="center" justify="center">
            <Box width="medium">
                <Form onSubmit={({value}) => console.log("Submit", value)}>
                    <FormField label="Email" name="email" type="email" required/>
                    <FormField
                        label="Password"
                        name="password1"
                        required
                        validate={{regexp: /^[a-z]/i}}
                    />
                    <Box direction="row" justify="between" margin={{top: "medium"}}>
                        <Button label="Cancel"/>
                        <Link to="/search">
                            <Button label="Login" primary/>
                        </Link>
                    </Box>
                </Form>
            </Box>
        </Box>
    </Grommet>
);

export default Login;