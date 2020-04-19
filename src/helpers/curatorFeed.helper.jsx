import axios from 'axios';

import { NETWORK_ICONS } from './constants';
import { getDateString } from './utils';

const mapCurratorPosts = posts => {
    const cardDataProps = [];
    console.log('RAW POST', posts);

    posts.forEach(post => {
        cardDataProps.push({
            avatarImage: NETWORK_ICONS[post.network_name],
            date: getDateString(post.source_created_at),
            image: post.image,
            showLikeCommentSection: true,
            name: post.user_full_name,
            likeCount: post.likes,
            commentCount: post.comments,
            text: post.text,
        });
    });

    return cardDataProps;
};

export const getCurratorPosts = () => {
    return axios
        .get(
            'https://api.curator.io/restricted/feeds/1fed3548-5f03-45f0-9cfa-07e9ac444c08/posts?limit=30&hasPoweredBy=true&version=4.0&limitPosts=false'
        )
        .then(response => {
            return mapCurratorPosts(response.data.posts);
        });
};
