import React, {Component} from 'react';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Login from './components/Authorization/Login';
import Register from './components/Authorization/Register'
import SearchPage from './components/SearchPage';
import Profile from "./components/Profile";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from "react-redux";
import {JobDetails} from "./components/JobDetails";
import {store} from "./redux/store";


class App extends Component {
    render() {
        const navButtons = [
            {id: 1, text: 'Login', link: 'login'},
            {id: 0, text: 'How it works', link: '/'}
        ];

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header buttons={navButtons}/>
                        <Switch>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/search" component={SearchPage}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/" component={MainPage}/>
                            <Route path="/job/:id" component={JobDetails}/>
                            <Redirect from="*" to="/jobs"/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
