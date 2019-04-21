import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: props.links,
        };
    }

    render() {
        const headerLinksAuthorized = [
            {
                id: 0,
                name: 'Logout',
                href: '/logout',
                active: 'active',
            },
            {
                id: 1,
                name: 'Profile',
                href: '/profile',
                active: 'active',
            },
            {
                id: 2,
                name: 'Search Jobs',
                href: '/search',
                active: 'active',
            },
            {
                id: 3,
                name: 'Statistics',
                href: '/statistics',
                active: 'active',
            },
            {
                id: 4,
                name: 'How it works',
                href: '/',
                active: 'active',
            }

        ];

        const headerLinksUnauthorized = [
            {
                id: 0,
                name: 'Login',
                href: '/login',
                active: 'active',
            },
            {
                id: 1,
                name: 'How it works',
                href: '/',
                active: 'active',
            }
        ];

        const links = localStorage.getItem('token') ? headerLinksAuthorized : headerLinksUnauthorized;

        return (
            <header>
                {/*<a href="/" className="logo"/>*/}
                <div className="header-right">
                    {links.map(item => <a key={item.id} href={item.href} className={item.active}>{item.name}</a>)}
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    const {authorization} = state;
    return {
        authorization
    };
}

export default connect(mapStateToProps, null)(Header);
