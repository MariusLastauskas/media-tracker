import React from 'react';
import { graphql } from 'gatsby';

// import { CARD_DATA_PROPS } from '../dummy_data/constants';
import { Header } from '../components/header';
import { Filter } from '../components/filter';
import { PostGallery } from '../components/post-gallery';
import { mapNetlifyPost } from '../helpers/';

import '../style/index.scss';
import './index.scss';

const RootComponent = data => {
    const cardDataProps = mapNetlifyPost(data);

    return (
        <>
            <Header />
            <main>
                <Filter />
                <PostGallery postsProps={cardDataProps} />
                {/* <PostGallery postsProps={CARD_DATA_PROPS} /> */}
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
