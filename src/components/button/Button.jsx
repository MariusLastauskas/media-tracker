import React from 'react';
import classNames from 'classnames';

import './button.scss';

const Button = ({
    className,
    href,
    isActive,
    isLink,
    label,
    name,
    onClick,
    ...other
}) => {
    const mainComponentClass = 'button';
    const buttonClass = classNames(
        mainComponentClass,
        {
            [`${mainComponentClass}--active`]: isActive,
        },
        className
    );

    const Tag = isLink ? 'a' : 'button';

    const buttonProps = {
        className: buttonClass,
        href: isLink ? href : null,
        name,
        onClick: isLink ? null : onClick,
        ...other,
    };

    return <Tag {...buttonProps}>{label}</Tag>;
};

export default Button;
