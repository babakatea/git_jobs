import React, {Component} from 'react';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Registration from './components/Authorization/Registration/index';
import Login from './components/Authorization/Login/index';
import Logout from './components/Authorization/Logout';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import Profile from "./components/Profile/index";
import EditForm from "./components/Profile/EditForm";
import {PrivateRoute} from "./components/PrivateRoute/index.js";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {Provider} from "react-redux";
import JobDetails from "./components/JobDetails";
import {store} from "./redux/store";
import alertActions from "./redux/actions/alerts";
import Statistics from "./components/Statistics/index";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {alert, user, auth} = this.props;
        const navButtons = [
            {id: 1, text: 'Login', link: 'login'},
            {id: 0, text: 'How it works', link: '/'}
        ];

        const footerLinks = [
            {
                id: 0,
                name: 'About',
                href: '/about',
            },
            {
                id: 1,
                name: 'Home',
                href: '/',
            }
        ];

        return (
                <BrowserRouter>
                    <div>
                        {/*{alert.message &&*/}
                        {/*<div className={`alert ${alert.type}`}>{alert.message}*/}
                            {/*<div className="close" onClick={() => this.props.dispatch(alertActions.hide())}>x</div>*/}
                        {/*</div>*/}
                        {/*}*/}
                        <Header buttons={navButtons}/>
                        <Switch>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/register" component={Registration}/>
                            <Route path="/search" component={SearchForm}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/job/:id" component={JobDetails}/>
                            <PrivateRoute path="/editProfile" component={EditForm}/>
                            <Route path="/statistics" component={Statistics}/>
                            <Route path="/" component={MainPage}/>
                        </Switch>
                        <Footer links={footerLinks}/>
                    </div>
                </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    const {alert, authorization} = state;
    return {
        alert,
        authorization
    };
}

export default connect(mapStateToProps, null)(App);
