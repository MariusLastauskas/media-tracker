import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/header';
import { Filter } from '../components/filter';
import { PostGallery } from '../components/post-gallery';
import { getCurratorPosts, mapNetlifyPost, sortPosts } from '../helpers/';

import '../style/index.scss';
import './index.scss';

const RootComponent = data => {
    const [cardDataProps, setCardDataProps] = useState(mapNetlifyPost(data));
    const [filteredCardDataProps, setFilteredCardDataProps] = useState({});

    useEffect(() => {
        getCurratorPosts().then(resp => {
            const allPosts = sortPosts([...cardDataProps, ...resp]);

            setCardDataProps(allPosts);
            setFilteredCardDataProps(allPosts);
        });
    }, []);

    const handleFilterChange = filterRule => {
        const filteredPosts = cardDataProps.filter(filterRule);
        setFilteredCardDataProps(filteredPosts);
    };

    return (
        <>
            <Header />
            <main>
                <Filter onChange={handleFilterChange} />
                <PostGallery postsProps={filteredCardDataProps} />
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
