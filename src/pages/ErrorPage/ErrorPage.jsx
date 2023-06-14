/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import myGif from '../../../src/assets/images/error/404-error-dribbble-800x600.gif'

const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 text-gray-900 bg-white'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img src={myGif} alt="my-gif" />
                <div className='max-w-md text-center -mt-10'>
                    <Link
                        to='/'
                        className='px-8 py-3 font-bold rounded-lg bg-green-500 text-white'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;