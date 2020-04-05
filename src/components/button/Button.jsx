import React from 'react';
import classNames from 'classnames';

import { VARIANTS } from './constants';

import './button.scss';

const Button = ({
    href,
    isActive,
    label,
    name,
    onClick,
    variant,
    ...other
}) => {
    const mainComponentClass = 'button';
    const className = classNames(mainComponentClass, {
        [`${mainComponentClass}__${variant}`]: variant === VARIANTS.LINK,
        [`${mainComponentClass}--active`]: isActive,
    });

    const isLink = variant === VARIANTS.LINK;
    const Tag = isLink ? 'a' : 'button';

    const buttonProps = {
        href: isLink ? href : null,
        name,
        onClick: isLink ? null : onClick,
        ...other,
        className,
    };

    return <Tag {...buttonProps}>{label}</Tag>;
};

export default Button;
