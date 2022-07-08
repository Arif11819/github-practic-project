import React from 'react';
import image from '../images/justice logo.png';
import './HowDoIt.css';
import vactor from '../images/Vector.png'

const HowDOIt = () => {
    return (
        <>
            <div class="hero min-h-screen bg-s-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='class="max-w-min h-fit	 rounded-lg shadow-2xl text-center '>
                        <img src={image}  />

                        <h1 className='text-3xl '>OPEYEMI LEGAL SERVICES</h1>
                        <p className='mb-8' >we are the best</p>
                    </div>
                    <div className='class="max-w-min h-fit 	 rounded-lg shadow-2xl text-center bg-white p-10'>
                        <h1 className='text-4xl mb-16'>HOW WE DO IT!</h1>
                        <span className='flex  mb-5'><img src={vactor} alt="" className='h-6' /> <p className='ml-10 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p></span> 
                        <span className='flex  mb-5'><img src={vactor} alt="" className='h-6' /> <p className='ml-10 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p></span> 
                        <span className='flex  mb-5'><img src={vactor} alt="" className='h-6' /> <p className='ml-10 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p></span> 
                        <span className='flex  mb-5'><img src={vactor} alt="" className='h-6' /> <p className='ml-10 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p></span> 
                        
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowDOIt;