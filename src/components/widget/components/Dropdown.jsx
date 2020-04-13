import React, { useState } from 'react';
import className from 'classnames';

import '../style/dropdown.scss';

const Dropdown = ({ buttonRenderer, ...other }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const mainComponentClass = 'dropdown';
    const buttonClass = `${mainComponentClass}__button`;
    const dropdownClass = className(mainComponentClass, {
        [`${mainComponentClass}--collapsed`]: isCollapsed,
    });
    const listClass = `${mainComponentClass}__list`;
    const itemClass = `${mainComponentClass}__item`;

    const openDropdown = () => {
        setIsCollapsed(false);
    };

    const toggleDropdown = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={dropdownClass} {...other}>
            <button className={buttonClass} onClick={toggleDropdown}>
                {buttonRenderer()}
            </button>
            <ul className={listClass}>
                <li className={itemClass} onFocus={openDropdown}>
                    <a href="#">My profile</a>
                </li>
                <li className={itemClass} onFocus={openDropdown}>
                    <a href="#">Sign out</a>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
