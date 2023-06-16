/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructor from './Popular/PopularInstructor';
import PopularClass from './Popular/PopularClass';
import useTitle from '../../../hook/useTitle';
import About from '../ABout/About';

const Home = () => {
    useTitle('Home')
    return (
        <div className='dark:bg-gray-800'>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <About></About>
        </div>
    );
};

export default Home;