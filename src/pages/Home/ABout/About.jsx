/* eslint-disable no-unused-vars */
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import img1 from '../../../assets/images/about/1.jpg'
import img2 from '../../../assets/images/about/2.jpg'
import img3 from '../../../assets/images/about/3.jpg'
import img4 from '../../../assets/images/about/4.jpg'

const About = () => {
    return (
        <div>
            <h3 className='text-4xl  font-bold text-center mb-10 dark:text-white'>About <span className='text-green-600'>Us</span></h3>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row mb-16">
                    <div className='grid grid-cols-1 md:grid-cols-2 w-1/2 gap-4'>
                        <img className='w-72 h-64' src={img1} alt="" />
                        <img className='w-72 h-64' src={img2} alt="" />
                        <img className='w-72 h-64' src={img3} alt="" />
                        <img className='w-72 h-64' src={img4} alt="" />
                        {/* <img  className="w-3/4 rounded-lg shadow-2xl" />
                    <img className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-2/3 border-8 border-white " /> */}
                    </div>
                    <div className='lg:w-1/2 space-y-5 mt-8 p-4 dark:text-white'>
                        <h1 className="text-5xl font-bold">We are qualified &  experience in this field</h1>
                        <p className="py-6">A summer sports camp is a program where children and teenagers engage in various sports activities during the summer break.These camps offer coaching, practice sessions, and friendly competitions to help participants develop their skills and fitness.They promote teamwork, sportsmanship, and personal growth while providing a structured and fun environment.</p>
                        <p className="py-6">Summer sports camps can focus on specific sports or offer a variety of options.Attending a camp allows participants to stay active, learn new skills, make friends, and have a memorable summer experience.</p>
                        <button className="btn bg-green-600 border-0 text-white">Get More Info <span className='ml-3'><BsArrowRight></BsArrowRight></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;