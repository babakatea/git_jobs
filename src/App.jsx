import React, {Component} from 'react';
import Header from "./components/Header";

class App extends Component {
    render() {
        const navButtons = [
            {id: 3, text: 'Login'},
            {id: 2, text: 'Register'},
            {id: 1, text: 'Get started'},
            {id: 0, text: 'How it works'},
        ];

        return (
            <div className="App">
                <Header buttons={navButtons}/>
            </div>
        );
    }
}

export default App;
