/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../../assets/images/logo/logo1.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='h-20 w-20' src={logo} alt="" />
                    <p className='font-bold'>SPORT&apos;sCamp <br />Providing reliable services since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-end  ">
                    <div className="grid grid-flow-col gap-4 sm:mx-auto">
                        <Link to='https://www.facebook.com/profile.php?id=100082673616604' target='_blank'><FaFacebook style={{ height: '24px', width: '24px' }}></FaFacebook></Link>
                        <Link to='https://www.linkedin.com/in/nishat-jahan-tandra-074633251/' target='_blank'><FaLinkedin style={{ height: '24px', width: '24px' }}></FaLinkedin></Link>
                        <Link to='https://www.instagram.com/nishat_jahan_tandra/' target='_blank'><FaInstagram style={{ height: '24px', width: '24px' }}></FaInstagram></Link>
                        <Link to='https://github.com/nishattandra' target='_blank'><FaGithub style={{ height: '24px', width: '24px' }} ></FaGithub></Link>
                    </div>
                </div>
            </footer>
            <div className='text-center pb-10'>
                <p className=''>Copyright © 2023 <br /> Developed By : <span className='text-green-600 font-bold'>Nishat Jahan Tandra</span> <br /> Email: nishattandra2001@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;