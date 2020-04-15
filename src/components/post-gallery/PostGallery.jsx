import React from 'react';

import { PostInput } from '../post-input';

import './post-gallery.scss';

const PostGallery = ({ ...other }) => {
    const mainComponentClass = 'post-gallery';

    return (
        <div className={mainComponentClass} {...other}>
            <PostInput />
            <PostInput />
            <PostInput />
            <PostInput />
        </div>
    );
};

export default PostGallery;
