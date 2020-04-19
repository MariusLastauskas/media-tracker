import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/header';
import { Filter } from '../components/filter';
import { PostGallery } from '../components/post-gallery';
import { getCurratorPosts, mapNetlifyPost } from '../helpers/';

import '../style/index.scss';
import './index.scss';

const RootComponent = data => {
    const [cardDataProps, setCardDataProps] = useState(mapNetlifyPost(data));

    useEffect(() => {
        getCurratorPosts().then(resp => {
            console.log(resp);
            setCardDataProps([...cardDataProps, ...resp]);
        });
    }, []);

    return (
        <>
            <Header />
            <main>
                <Filter />
                <PostGallery postsProps={cardDataProps} />
            </main>
        </>
    );
};

export const query = graphql`
    query HomePageQuery {
        allFile {
            edges {
                node {
                    childMarkdownRemark {
                        id
                        frontmatter {
                            author
                            avatarImage
                            date
                            description
                            image
                            isEvent
                            showLikeCommentSection
                            title
                        }
                        html
                    }
                }
            }
        }
    }
`;

export default RootComponent;
