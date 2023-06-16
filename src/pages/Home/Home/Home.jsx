/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from './Popular/PopularInstructor';
import PopularClass from './Popular/PopularClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;