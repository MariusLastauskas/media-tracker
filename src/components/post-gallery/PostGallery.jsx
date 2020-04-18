import React from 'react';

import { Post } from '../post';
import { PostInput } from '../post-input';

import './post-gallery.scss';

const PostGallery = ({ postsProps, ...other }) => {
    const mainComponentClass = 'post-gallery';

    const DataProps = postsProps.map((cardProps, key) => (
        <Post key={key} {...cardProps} />
    ));

    return (
        <div className={mainComponentClass} {...other}>
            <PostInput />
            {DataProps}
        </div>
    );
};

export default PostGallery;
