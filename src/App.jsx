import React, {Component} from 'react';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Login from './components/Authorization/Login';


class App extends Component {
    render() {
        const navButtons = [
            {id: 3, text: 'Login', link: 'login'},
            {id: 2, text: 'Register', link: ''},
            {id: 1, text: 'Get started', link: '/'},
            {id: 0, text: 'How it works', link: ''},
        ];

        return (
            <BrowserRouter>
                <div className="App">
                    <Header buttons={navButtons}/>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" component={SearchForm}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
