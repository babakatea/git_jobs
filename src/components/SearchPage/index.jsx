import React, {Component} from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }


    componentWillMount() {
        fetch('https://jobs.github.com/positions.json?search=node', {
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(response => this.setState({data: response.data})) // parses response to JSON
            .catch(err => console.log(err));
    }

    render() {
        return (
            this.state.data.map(item => <div key={item.id}>{item.text}</div>)
        );
    }
}

export default SearchForm;
//https://jobs.github.com/positions.json?search=node