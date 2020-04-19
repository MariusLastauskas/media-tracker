import React from 'react';
import classNames from 'classnames';

import { Card } from '../card';
import { Icon, ICONS } from '../icon';
import { IconButton } from '../icon-button';

import './post.scss';

const Post = ({
    avatarImage,
    className,
    commentCount,
    date,
    showLikeCommentSection,
    image,
    isBlog,
    isEvent,
    isLiked,
    likeCount,
    name,
    text,
    title,
    ...other
}) => {
    const mainComponentClass = 'post';
    const postComponentClass = classNames(
        mainComponentClass,
        {
            [`${mainComponentClass}--blog`]: isBlog,
            [`${mainComponentClass}--event`]: isEvent,
            [`${mainComponentClass}--show-like-comment`]: showLikeCommentSection,
        },
        className
    );
    const avatarClass = `${mainComponentClass}__avatar`;
    const buttonClass = `${mainComponentClass}__button`;
    const buttonIconClass = `${mainComponentClass}__button-icon`;
    const buttonTextClass = `${mainComponentClass}__button-text`;
    const likesCountClass = classNames({
        [`${mainComponentClass}__like-button-count--liked`]: isLiked,
    });

    const postCredentialsClass = `${mainComponentClass}__credentials`;
    const postDateClass = `${mainComponentClass}__date`;
    const postFooterClass = `${mainComponentClass}__footer`;
    const postHeaderClass = `${mainComponentClass}__header`;
    const postImageClass = `${mainComponentClass}__image`;
    const postNameClass = `${mainComponentClass}__name`;
    const postTextClass = `${mainComponentClass}__text`;
    const postTitleClass = `${mainComponentClass}__title`;

    const commentText = (
        <span className={buttonTextClass}>{commentCount || 0} COMMENTS</span>
    );
    const likeText = (
        <span className={buttonTextClass}>
            <label className={likesCountClass}>{likeCount || 0}</label> LIKES
        </span>
    );

    const postContent = (
        <>
            <div className={postHeaderClass}>
                <Icon className={avatarClass} variant={avatarImage} />
                <div className={postCredentialsClass}>
                    <span className={postNameClass}>{name}</span>
                    <span className={postDateClass}>{date}</span>
                </div>
            </div>
            {!!title && <h2 className={postTitleClass}>{title}</h2>}
            {!!text && (
                <div
                    className={postTextClass}
                    dangerouslySetInnerHTML={{ __html: text }} //TODO think about a way to get desired functionality without security issues
                />
            )}
            {!!image && (
                <img
                    className={postImageClass}
                    src={image}
                    alt={`${title}. Article image`}
                />
            )}
            {showLikeCommentSection && (
                <div className={postFooterClass}>
                    <IconButton
                        className={buttonClass}
                        iconClassName={buttonIconClass}
                        variant={ICONS.HEARTH}
                        text={likeText}
                    />
                    <IconButton
                        className={buttonClass}
                        iconClassName={buttonIconClass}
                        variant={ICONS.COMMENT}
                        text={commentText}
                    />
                </div>
            )}
        </>
    );

    return (
        <Card className={postComponentClass} content={postContent} {...other} />
    );
};

export default Post;
