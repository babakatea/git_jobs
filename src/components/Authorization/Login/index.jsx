import React, {Component} from 'react';
import './index.less'

class Login extends Component {
    render() {
        return (
            <div className="login-form">
                <form>
                    <input type="text" required placeholder="Email"/>
                    <input type="text" required placeholder="Password"/>
                </form>

                <button type="submit">
                    Log in
                </button>
            </div>
        );
    }
}

export default Login;