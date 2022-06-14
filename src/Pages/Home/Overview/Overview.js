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
                </div>
            </div>
        </div>
    );
};

export default Overview;