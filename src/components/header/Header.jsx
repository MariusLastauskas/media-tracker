import React from 'react';

import { Navigation } from '../navigation';
import { Widget, VARIANTS as WIDGET_VARIANTS } from '../widget';

import './header.scss';

const Header = ({ ...props }) => {
    const mainClass = 'header';
    const wrapperClass = `${mainClass}__wrapper`;
    const widgetsClass = `${mainClass}__widgets`;

    return (
        <header className={mainClass} {...props}>
            <div className={wrapperClass}>
                <Navigation />
                <div className={widgetsClass}>
                    <Widget variant={WIDGET_VARIANTS.SEARCH} />
                    <Widget variant={WIDGET_VARIANTS.NOTIFICATION} />
                    <Widget
                        userName="Tomas"
                        variant={WIDGET_VARIANTS.PROFILE}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
