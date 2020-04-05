import React from 'react';

import { Navigation } from '../navigation';

import './header.scss';

const Header = () => (
    <header className="header">
        <div className="header__holder">
            <Navigation />
            <div className="column">profile</div>
        </div>
    </header>
);

export default Header;
