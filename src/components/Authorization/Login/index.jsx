import React from 'react';
import "./index.less";

import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
} from "grommet";
import {grommet} from "grommet/themes";
import {Link} from "react-router-dom";

const submitForm = (email, password) => {
    if (email.length === 0 && password.length === 0) {
        alert("Please complete the fields");
    }
};

const Login = () => (
    <div className="login_pic">
        <Grommet id="groomet" full theme={grommet}>
            <h1 id="log_title"> Welcome </h1>
            <Box fill align="center" justify="center">
                <Box id="main_box_login" width="medium">
                    <Form onSubmit={({value}) => console.log("Submit", value)}>
                        <FormField label="Email" name="email" type="email" required/>
                        <FormField
                            label="Password"
                            name="password1"
                            required
                            validate={{regexp: /^[a-z]/i}}
                        />
                        <Box direction="row" justify="between" margin={{top: "medium"}}>
                            <Link to="/">
                                <Button label="Cancel"/>
                            </Link>
                            <Link to="/search">
                                <Button label="Login" primary/>
                            </Link>
                        </Box>
                    </Form>
                </Box>
            </Box>
            <h4>Don't have an account? <Link to="/register">Register</Link> now.</h4>
        </Grommet>
    </div>
);

export default Login;