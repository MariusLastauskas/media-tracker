import React from 'react';

import { Card } from '../card';
import { ICONS } from '../icon';
import { IconButton } from '../icon-button';

import './post-input.scss';

const PostInput = ({ ...other }) => {
    const mainComponentClass = 'post-input';
    const buttonClass = `${mainComponentClass}__button`;
    const iconClass = `${mainComponentClass}__icon`;
    const inputClass = `${mainComponentClass}__input`;

    const helpText = "What's on your mind ?";
    const inputComponent = (
        <>
            <input className={inputClass} placeholder={helpText} type="text" />
            <IconButton
                className={buttonClass}
                iconClassName={iconClass}
                variant={ICONS.PHOTO_CAMERA}
            />
        </>
    );

    return (
        <Card
            className={mainComponentClass}
            content={inputComponent}
            {...other}
        />
    );
};

export default PostInput;
