import React, {Component} from 'react';
import LoginForm from './LoginForm/index';
import './index.less';
import {connect} from "react-redux";

class Login extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="login">
                <LoginForm dispatch={this.props.dispatch}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {authorization} = state;

    return authorization;
};

export default connect(mapStateToProps, null)(Login);
