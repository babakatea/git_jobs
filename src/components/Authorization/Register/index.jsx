import React, {Component} from 'react';
import './index.less'

class Register extends Component {
    render() {
        return (<div className="register-form">
            <label id="login-text">Registration</label>
            <form>
                <input type="text" required placeholder="Name"/>
                <input type="text" required placeholder="Surname"/>
                <input type="text" required placeholder="Email"/>
                <input type="text" required placeholder="Password"/>
                <input type="text" required placeholder="Confirm password"/>
                <button type="submit">Sign Up</button>
            </form>
        </div>);
    }
}

export default Register;