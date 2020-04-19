import React, { useState } from 'react';

import { Button } from '../button';
import { FILTER_BUTTONS_PROPS } from './constants';

import './filter.scss';

const Filter = ({ onChange, ...other }) => {
    const mainComponentClass = 'filter';
    const buttonClass = `${mainComponentClass}__button`;
    const wrapperClass = `${mainComponentClass}__wrapper`;
    const [activeFilter, setActiveFilter] = useState(
        FILTER_BUTTONS_PROPS[0].name
    );

    const FilterButtons = FILTER_BUTTONS_PROPS.map(
        ({ filterFunction, name, ...buttonProps }) => {
            const isActive = activeFilter === name;
            const setActive = () => {
                onChange(filterFunction);
                setActiveFilter(name);
            };

            return (
                <Button
                    className={buttonClass}
                    isActive={isActive}
                    key={name}
                    onClick={setActive}
                    {...buttonProps}
                />
            );
        }
    );

    return (
        <div className={mainComponentClass} {...other}>
            <div className={wrapperClass}>{FilterButtons}</div>
        </div>
    );
};
export default Filter;
