import React, {Component} from 'react';
import * as styles from './index.css';
import './index.css';

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

const Profile = () => {
    console.log(styles);
    return (<div className={styles.base}>Hello, here will be the profile page ... </div>);
};

export default Profile;

