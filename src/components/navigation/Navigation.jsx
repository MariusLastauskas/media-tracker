import React from 'react';

import { NAVIGATION_BUTTONS_PROPS } from './constants';
import { Button } from '../button';

import './navigation.scss';

const Navigation = () => {
    const mainComponentClass = 'navigation';

    const NavigationButtons = NAVIGATION_BUTTONS_PROPS.map(buttonProps => (
        <Button key={buttonProps.name} {...buttonProps} />
    ));

    return <nav className={mainComponentClass}>{NavigationButtons}</nav>;
};

export default Navigation;
