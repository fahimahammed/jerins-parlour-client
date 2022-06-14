import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [serviceData, setServiceData] = useState();

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, []);
    return (
        <div className="container mx-auto mt-16">
            <h1 className="text-center text-[43px] font-bold">Our Awesome <span className="text-primary">Services</span></h1>
            <div className="flex lg:flex-row md:flex-row flex-wrap gap-3 justify-center">
                {
                    serviceData && serviceData.map(singleService => <ServiceCard key={singleService._id} singleService={singleService}></ServiceCard>)
                }
            </div>

            <div className='text-center my-10'>
                <button className='btn btn-primary'>Explore more</button>
            </div>
        </div>
    );
};

export default Services;