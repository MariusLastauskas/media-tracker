import React from 'react';

import { Header } from '../components/header';
import { Filter } from '../components/filter';

import '../style/index.scss';
import './index.scss';

const RootComponent = () => (
    <>
        <Header />
        <main>
            <Filter />
        </main>
    </>
);

export default RootComponent;
