import React from 'react';

import { getRandomProfileImage } from '../helpers/profileHelper';
import Dropdown from './Dropdown';
import { Icon, ICONS } from '../../icon';

import '../style/profile.scss';

const Profile = ({ userName, ...other }) => {
    const mainComponentClass = 'profile';
    const iconClass = `${mainComponentClass}__icon`;
    const imageClass = `${mainComponentClass}__image`;
    const nameClass = `${mainComponentClass}__name`;

    const profilePictureUrl = getRandomProfileImage();

    const renderDropdownButton = () => (
        <div className={mainComponentClass}>
            <img
                className={imageClass}
                src={profilePictureUrl}
                alt={userName}
            />
            <span className={nameClass}>{userName}</span>
            <Icon className={iconClass} variant={ICONS.DROPDOWN_ARROW} />
        </div>
    );

    return <Dropdown buttonRenderer={renderDropdownButton} {...other} />;
};

export default Profile;
