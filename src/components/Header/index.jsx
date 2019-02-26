import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less'

class Header extends Component {
    render() {
        return (
            <header>
                {this.props.buttons.map(button =>
                    <button key={button.id}>{button.text}</button>
                )}
            </header>
        );
    }
}

Header.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object)
};

export default Header;