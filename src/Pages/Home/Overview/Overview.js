import React from 'react';
import overviewImg from '../../../images/overview-img.png';

const Overview = () => {
    return (
        <div className='bg-accent'>
            <div className='container mx-auto py-20 flex lg:flex-row md:flex-row flex-col flex-wrap justify-between'>
                <div className='mx-[10px]'>
                    <img className='lg:w-[580px]' src={overviewImg} alt="overview image"></img>
                </div>
                <div className='lg:w-[550px] mx-[10px]'>
                    <h2 className='lg:text-[38px] md:text-[32px] text-[28px] font-medium'>Let us handle your<br/>screen <span className='text-primary'>Professionally.</span></h2>
                    <p className='lg:my-6'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                    <div className="flex flex-row gap-16 lg:mt-12">
                        <div>
                            <h1 className="text-[42px] font-bold  text-primary">500+</h1>
                            <p className="text-[16px]">Happy Customer</p>
                        </div>
                        <div>
                            <h1 className="text-[42px] font-bold  text-primary">16+</h1>
                            <p className="text-[16px]">Total Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;