import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less'

class SearchForm extends Component {
    render() {
        return (
            <div className="hero-image">
                <form>
                    <input type="text" required placeholder="Job name"/>
                    <input type="text" placeholder="City"/>
                    {/*TODO radiobutton with part/full time options*/}
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;