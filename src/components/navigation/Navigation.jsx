import React from 'react';

import { NAVIGATION_BUTTONS_PROPS } from './constants';
import { Button } from '../button';

import './navigation.scss';

const Navigation = () => {
    const mainComponentClass = 'navigation';
    const buttonClass = `${mainComponentClass}__button`;

    const NavigationButtons = NAVIGATION_BUTTONS_PROPS.map(buttonProps => (
        <Button
            className={buttonClass}
            key={buttonProps.name}
            isLink
            {...buttonProps}
        />
    ));

    return <nav className={mainComponentClass}>{NavigationButtons}</nav>;
};

export default Navigation;
