import React from 'react';

import { Header } from '../components/header';
import { Filter } from '../components/filter';
import { PostGallery } from '../components/post-gallery';

import '../style/index.scss';
import './index.scss';

const RootComponent = () => (
    <>
        <Header />
        <main>
            <Filter />
            <PostGallery />
        </main>
    </>
);

export default RootComponent;
