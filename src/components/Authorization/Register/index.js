import React from 'react';
import './index.less';

import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    RadioButton,
} from "grommet";
import {grommet} from "grommet/themes";
import Link from "react-router-dom/es/Link";

const RadioButtonGroup = ({name, onChange, options, value}) => (
    <Box gap="small">
        {options.map(option => (
            <Box key={option}>
                <RadioButton
                    name={name}
                    value={option}
                    label={option}
                    checked={value === option}
                    onChange={() => onChange({value: option})}
                />
            </Box>
        ))}
    </Box>
);

const Register = () => (
    <Grommet full theme={grommet}>
        <h1 id="reg_title"> Sign Up </h1>
        <Box id="main_box" fill align="center" justify="center">
            <Box width="medium">
                <Form onSubmit={({value}) => console.log("Submit", value)}>
                    <FormField
                        label="First name"
                        name="first_name"
                        required
                        validate={{regexp: /^[a-z]/i}}
                    />
                    <FormField
                        label="Last name"
                        name="last_name"
                        required
                        validate={{regexp: /^[a-z]/i}}
                    />
                    <FormField label="Email" name="email" type="email" required/>
                    <FormField
                        label="Password"
                        name="password1"
                        required
                        validate={{regexp: /^[a-z]/i}}
                    />
                    <FormField
                        label="Repeat password"
                        name="password2"
                        required
                        validate={{regexp: /^[a-z]/i}}
                    />
                    <Box direction="row" justify="between" margin={{top: "medium"}}>
                        <Link to="/">
                            <Button label="Cancel"/>
                        </Link>
                        <Link to="/profile">
                            <Button type="submit" label="Submit" primary/>
                        </Link>
                    </Box>
                </Form>
            </Box>
        </Box>
    </Grommet>
);

export default Register;