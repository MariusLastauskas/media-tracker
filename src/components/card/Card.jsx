import React from 'react';
import classNames from 'classnames';

import './card.scss';

const Card = ({ className, content, ...other }) => {
    const mainComponentClass = 'card';
    const cardClass = classNames(mainComponentClass, className);

    return (
        <div className={cardClass} {...other}>
            {content}
        </div>
    );
};

export default Card;
