import React from 'react';
import bannarImg from '../../../images/banner-img.png';

const Header = () => {
    return (
        <div className='bg-accent py-10'>
            <div className='flex lg:flex-row md:flex-row flex-col  items-center justify-items-stretch gap-1 container mx-auto'>
                <div className='basis-1/2 mx-[10px]'>
                    <h1 className='text-[48px] font-bold'>BEAUTY SALON</h1>
                    <h1 className='text-[48px] font-bold mb-2'>FOR EVERY WOMEN</h1>
                    <p className='lg:w-[370px] md:w-[370px] w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className='btn btn-primary my-3'>Get an appointment</button>
                </div>
                <div className='basis-1/2 mx-[10px]'>
                    <img className='w-[484px] h-[478px]' src={bannarImg} alt='banner image'></img>
                </div>
            </div>
        </div>
    );
};

export default Header;