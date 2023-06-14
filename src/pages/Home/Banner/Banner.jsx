/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/images/banner/img2.png'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#403f3f] to-[rgba(30, 30, 30, 30)]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsa?</p>
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
                    <img src={img1} className="w-full" />
                    <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#403f3f] to-[rgba(30, 30, 30, 30)]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsa?</p>
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
                    <img src={img1} className="w-full" />
                    <div className="absolute  h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#403f3f] to-[rgba(30, 30, 30, 30)]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ipsa?</p>
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