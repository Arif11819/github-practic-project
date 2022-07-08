import React from 'react';
import logo from '../assets/images/justice-logo.png'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { FaCopyright } from 'react-icons/fa'


const Footer = () => {
    return (
        <div >
            <div className='grid grid-cols-3 bg-[#373649] p-5'>
                <div className='flex justify-center'>
                    <div className='text-white'>
                        <div className='flex justify-center mb-3'>
                            <img width={150} src={logo} alt="" />
                        </div>
                        <h2 className='font-bold'>OPEYEMI LEGAL SERVICES</h2>
                        <p>We are the best</p>
                        <div className='flex justify-center gap-4 text-2xl mt-3'>
                            <a href="#"><AiOutlineInstagram /></a>
                            <a href="#"><BsFacebook /></a>
                            <a href="#"><AiFillTwitterSquare /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='text-[#EFC980] font-bold text-3xl'>Useful Links</h2>
                        <div className='text-white mt-10 font-bold flex justify-center'>
                            <div>
                                <div className='flex items-center gap-6'>
                                    <AiOutlineRight />
                                    <a href="#">Home</a>
                                </div>
                                <div className='flex items-center gap-6 my-3'>
                                    <AiOutlineRight />
                                    <a href="#">About</a>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <AiOutlineRight />
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='text-[#EFC980] font-bold text-3xl'>Contact Info</h2>
                        <div className='text-white mt-10 font-bold flex justify-center'>
                            <div>
                                <div className='flex items-center gap-6'>
                                    <FaHome />
                                    <a href="#">Aso Rock, FCT, Abuja</a>
                                </div>
                                <div className='flex items-center gap-6 my-3'>
                                    <MdCall />
                                    <a href="#">08161836558</a>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <MdEmail />
                                    <a href="#">ope_adedotun@live.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black flex justify-center gap-2 items-center text-white p-3'>
                <FaCopyright />
                <p>2022 Opeyemi Legal Services. All Rights Reserved. Powered By DoT </p>
            </div>

        </div>
    );
};

export default Footer;