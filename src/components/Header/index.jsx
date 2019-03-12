import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less'
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>

                {this.props.buttons.map(button =>
                    <Link key={button.id} to={button.link}>
                        <button>{button.text}</button>
                    </Link>
                )}
                <div className="logo"/>
            </header>
        );
    }
}

Header.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object)
};

export default Header;
// TODO: change the navbar for different pages?