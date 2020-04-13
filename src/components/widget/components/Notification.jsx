import React from 'react';

import { Icon, ICONS } from '../../icon';

import '../style/notification.scss';

const Notification = ({ ...props }) => {
    const mainComponentClass = 'notification';
    const iconClass = `${mainComponentClass}__icon`;

    return (
        <div className={mainComponentClass} {...props}>
            <Icon
                className={iconClass}
                tabIndex={0}
                variant={ICONS.NOTIFICATION}
            />
        </div>
    );
};

export default Notification;
