import React from 'react';

import { CARD_DATA_PROPS } from '../dummy_data/constants';
import { Header } from '../components/header';
import { Filter } from '../components/filter';
import { PostGallery } from '../components/post-gallery';

import '../style/index.scss';
import './index.scss';

const RootComponent = () => {
    return (
        <>
            <Header />
            <main>
                <Filter />
                <PostGallery postsProps={CARD_DATA_PROPS} />
            </main>
        </>
    );
};

export default RootComponent;
