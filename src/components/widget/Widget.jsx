import React from 'react';

import { Notification, Profile, Search } from './components';
import { VARIANTS } from './constants';

import './widget.scss';

const Widget = ({ variant, userName, ...other }) => {
    const mainComponentClass = 'widget';

    const WidgetComponent = () => {
        switch (variant) {
            case VARIANTS.SEARCH:
                return <Search />;

            case VARIANTS.PROFILE:
                return <Profile userName={userName} />;

            case VARIANTS.NOTIFICATION:
                return <Notification />;

            default:
                return null;
        }
    };

    return (
        <div className={mainComponentClass} {...other}>
            <WidgetComponent />
        </div>
    );
};

export default Widget;
