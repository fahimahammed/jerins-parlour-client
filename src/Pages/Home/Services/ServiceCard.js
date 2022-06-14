import React from 'react';

const ServiceCard = ({ singleService }) => {
    const { title, price, description, img } = singleService;
    return (
        <div className="card w-96 bg-base-100 hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Photo" className="rounded-xl w-[72px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h4>${price}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;