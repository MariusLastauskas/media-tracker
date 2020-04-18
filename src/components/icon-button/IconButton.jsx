import React from 'react';
import classNames from 'classnames';

import { Button } from '../button';
import { Icon } from '../icon';

const IconButton = ({ className, iconClassName, text, variant, ...other }) => {
    const componentMainClass = 'icon-button';
    const iconButtonClass = classNames(componentMainClass, className);
    const iconClass = classNames(`${componentMainClass}__icon`, iconClassName);

    const photoImage = (
        <>
            <Icon className={iconClass} variant={variant} />
            {text}
        </>
    );

    return <Button className={iconButtonClass} label={photoImage} {...other} />;
};

export default IconButton;
