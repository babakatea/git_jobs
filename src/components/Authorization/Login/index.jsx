import React, {Component} from 'react';
import './index.less'

class Login extends Component {
    render() {
        return (
            <div className="login-form">
                <label id="login-text">Login</label>
                <form>
                    <input type="text" required placeholder="Email"/>
                    <input type="text" required placeholder="Password"/>
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;