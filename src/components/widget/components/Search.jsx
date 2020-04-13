import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { ICONS, Icon } from '../../icon';

import '../style/search.scss';

const Search = ({ className, ...other }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const mainComponentClass = 'search';
    const searchClass = classNames(
        mainComponentClass,
        {
            [`${mainComponentClass}--unfolded`]: value !== '',
        },
        className
    );

    const focusInput = () => {
        inputRef.current.focus();
    };

    const handleInputChange = event => {
        setValue(event.target.value);
    };

    return (
        <div className={searchClass}>
            <input
                className={`${mainComponentClass}__input`}
                onChange={handleInputChange}
                ref={inputRef}
                {...other}
            />
            <Icon
                className={`${mainComponentClass}__icon`}
                onClick={focusInput}
                variant={ICONS.SEARCH}
            />
        </div>
    );
};

export default Search;
