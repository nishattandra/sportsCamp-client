/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/images/banner/img2.png'
import img2 from '../../../assets/images/banner/img1.png'
import img3 from '../../../assets/images/banner/img3.png'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#403f3f] to-[rgba(30, 30, 30, 30)]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='md:text-6xl font-bold'>Want to know about Summer Camp?</h2>
                            <p>We are excited to announce the return of our Summer Programs! </p>
                            <div>
                                <button className="btn text-white mr-5 bg-green-600 border-0">Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 bg-green-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-green-600">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#403f3f] to-[rgba(30, 30, 30, 30)]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='md:text-6xl font-bold'>Want to know about Sports Camp?</h2>
                            <p>Here we provides football, cricket, badminton, chess etc.</p>
                            <div>
                                <button className="btn text-white mr-5 bg-green-600 border-0">Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 bg-green-600">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-green-600">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#403f3f] to-[rgba(30, 30, 30, 30)]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='md:text-6xl font-bold'>Want to know about the game?</h2>
                            <p>We provides our best instructors in each games.</p>
                            <div>
                                <button className="btn text-white mr-5 bg-green-600 border-0">Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5 bg-green-600">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-green-600">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;