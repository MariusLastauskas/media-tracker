import React from 'react';

const Icon = ({ variant, alt, ...other }) => {
    return <img src={variant} alt={alt} {...other} />;
};

export default Icon;
